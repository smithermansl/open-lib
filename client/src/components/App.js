import React, { Component } from 'react'
import CharacterOption from './CharacterOption'
import FilmList from './FilmList.js'
import axios from 'axios'
import jsonObj from '../../../utilities/characters.json'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      filmUrls: [],
      films: []
    }
    this.updateFilmUrls = this.updateFilmUrls.bind(this)
    this.updateFilms = this.updateFilms.bind(this)
  }

  updateFilmUrls (filmUrls) {
    this.setState({ filmUrls, films: [] })
    this.updateFilms()
  }

  updateFilms() {
    const { filmUrls } = this.state

    if (filmUrls.length) {
      filmUrls.forEach(async url => {
        let { data } = await axios.get(`${url}`)
        this.setState({ films: [...this.state.films, data] })
      })
    }
  }

  render() {
    return (
      <div>
        <div id="menu">
          <img src="/images/SW_logo.png" alt="star_wars_logo"/>
          <p>Select a Character to View the Films in which they Appear</p>
          <div className="options">
            {
              jsonObj.characters.map(character => {
                return (
                  <CharacterOption
                    key={character.name}
                    name={character.name}
                    url={character.url}
                    updateFilmUrls={this.updateFilmUrls} />
                )
              })
            }
          </div>
        </div>
        {
          this.state.films.length ?
          <FilmList films={this.state.films} />
          : null
        }
      </div>
    )
  }
}
