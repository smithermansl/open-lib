import React, { Component } from 'react'
import jsonObj from '../../../characters.json'
import CharacterOption from './CharacterOption'
import FilmList from './FilmList.js';
import axios from 'axios';

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
          <h4>Select a Character to View the Films in which they Appear</h4>
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
