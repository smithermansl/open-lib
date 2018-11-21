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
      films: [],
      error: false
    }
    this.updateFilmUrls = this.updateFilmUrls.bind(this)
    this.updateFilms = this.updateFilms.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  updateFilmUrls (filmUrls) {
    this.setState({ filmUrls, error: false })
    this.updateFilms()
  }

  async updateFilms() {
    const { filmUrls } = this.state
    let films = filmUrls.map(url => axios.get(`${url}`))
    films = await Promise.all(films)
    this.setState({ films })
  }

  handleError() {
    this.setState({ films: [], error: true })
  }

  render() {
    const { films, error } = this.state
    console.log('error true? ', this.state)
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
                    updateFilmUrls={this.updateFilmUrls}
                    handleError={this.handleError} />
                )
              })
            }
          </div>
        </div>
        <div id="display">
          {
            films.length ?
            <FilmList films={films} />
            : null
          }
          {
            error ?
            <h2>Unable to fetch movie data for that character.</h2>
            : null
          }
        </div>
      </div>
    )
  }
}
