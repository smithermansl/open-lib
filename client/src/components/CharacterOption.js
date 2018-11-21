import React, { Component } from 'react'
import axios from 'axios'

class CharacterOption extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  async handleClick (evt, url) {
    evt.preventDefault()
    const { updateFilmUrls, handleError } = this.props
    try {
      let { data } = await axios.get(`${url}`)
      updateFilmUrls(data.films)
    } catch (err) {
      handleError()
    }
  }

  render() {
    const { name, url } = this.props
    return (
      <div
        className="char-option"
        onClick={e => this.handleClick(e, url)} >
        <h5>{name}</h5>
      </div>
    )
  }
}

export default CharacterOption