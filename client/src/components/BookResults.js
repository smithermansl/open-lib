import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookResults extends Component {
  constructor (props) {
    super (props)
    this.state = {
      currentPage: 1
    }
  }

  handleClick = e => {
    e.preventDefault()
    this.setState({
      currentPage: e.target.value // e.target.id 
    })
  }

  render () {
    let { books } = this.props
    const { currentPage } = this.state

    const endIdx = currentPage * 20, startIdx = endIdx - 20
    books = books.slice(startIdx, endIdx)

    return (
      <div id="results">
        {
          books && books.map(book => {
            return (
              <div key={book.key} className="result">
                {book.title}
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapState = state => ({
  books: state.books.list
})

export default connect(mapState)(BookResults)
