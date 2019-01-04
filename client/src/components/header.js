import React, { Component } from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      query: '',
      searchBy: ''
    }
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    console.log('state: ', this.state)
    return (
      <div id="header">
        <h1 id="title" className="header-content">
          Welcome, Readers!
        </h1>
  
        <p id="about" className="header-content">
          Find your next literary adventure using Open Library's Search API.
        </p>
  
        <div id="search" className="header-content">
          <input
            name="query"
            className="search"
            type="text"
            placeholder="Search"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <select
            name="searchBy"
            className="search"
            onChange={this.handleChange}>
            <option value="">Select search type</option>
            <option value="title">by Title</option>
            <option value="author">by Author</option>
            <option value="genre">by Genre</option>
          </select>
          <button type="submit" className="search">Go!</button>
        </div>
      </div>
    )
  }
}