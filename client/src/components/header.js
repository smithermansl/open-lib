import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../reducers/books'

class Header extends Component {
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

  handleSearch = e => {
    e.preventDefault()
    console.log('handle search fired')

    let { query, searchBy } = this.state
    query = query.toLowerCase().replace(' ', '+')

    const queryStr = `${searchBy}=${query}`
    console.log('querying string', queryStr)

    this.props.sendQuery(queryStr)
  }

  render () {
    const { books } = this.state

    return (
      <div id="header">
        <h1 id="title" className="header-content">
          Welcome, Readers!
        </h1>
  
        <h6 id="about" className="header-content">
          Find your next literary adventure using Open Library's Search API.
        </h6>
  
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
          <button
            type="submit"
            className="search"
            onClick={this.handleSearch}>Go!</button>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  books: state.books.list
})

const mapDispatch = dispatch => ({
  sendQuery: queryStr => dispatch(fetchBooks(queryStr))
})

export default connect(mapState, mapDispatch)(Header)
