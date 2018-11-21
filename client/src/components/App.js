import React, { Component } from 'react'
import jsonObj from '../../../characters.json'
import CharacterOption from './CharacterOption'
import FilmList from './FilmList.js';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      films: []
    }
    this.updateFilms = this.updateFilms.bind(this)
  }

  updateFilms (films) {
    this.setState({ films })
  }

  render() {
    console.log('this.state: ', this.state.films)
    console.log('there is length', this.state.films.length)
    return (
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
                  updateFilms={this.updateFilms} />
              )
            })
          }
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
