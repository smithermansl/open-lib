import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../reducers/books'

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
      currentPage: +e.target.id
    })
  }

  render () {
    let { filtered, selectBook } = this.props
    const { currentPage } = this.state

    const endIdx = currentPage * 30, startIdx = endIdx - 30,
    books = filtered.slice(startIdx, endIdx), numPages = Math.ceil(filtered.length / 30),
    pageNumbers = [], lastResult = books.length < 30 ? startIdx + books.length : endIdx

    for (let i = 1; i <= numPages; i++) {
      pageNumbers.push(i)
    }

    return filtered.length ? 
    (
      <div id="results">
        <div id="pagination">
          <p>Displaying {startIdx + 1} - {lastResult} of {filtered.length} results</p>
        </div>

        {
          books && books.map(book => {
            return (
              <div
                key={book.key}
                className="result"
                onClick={() => selectBook(book)}>
                <p>{book.title}</p>
                {
                  book.author_name ?
                  (
                    <p>by {book.author_name[0]}</p>
                  ) : null
                }
              </div>
            )
          })
        }

        <div id="pages">
          {
            pageNumbers.map(num => {
              return (
                <p
                  className={"page " + (num === currentPage ? "active" : null)}
                  key={num}
                  id={num}
                  onClick={this.handleClick}>{num}</p>
              )
            })
          }
        </div>
      </div>
    ) : null
  }
}

const mapState = state => ({
  filtered: state.books.filteredList
})

const mapDispatch = dispatch => ({
  selectBook: book => dispatch(selectBook(book))
})

export default connect(mapState, mapDispatch)(BookResults)
