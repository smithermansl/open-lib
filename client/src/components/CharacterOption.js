import React, { Component } from 'react'

class CharacterOption extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (evt) {
    evt.preventDefault()
    console.log(`hello from ${this.props.name}`)
  }

  render() {
    const { name, url } = this.props
    return (
      <div className="char-option" onClick={this.handleClick}>
        <h2>
          <h2>{name}</h2>
        </h2>
      </div>
    )
  }
}

export default CharacterOption