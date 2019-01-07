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
      currentPage: +e.target.id // e.target.id 
    })
  }

  render () {
    let { unfiltered } = this.props
    const { currentPage } = this.state

    const endIdx = currentPage * 30, startIdx = endIdx - 30,
    books = unfiltered.slice(startIdx, endIdx), numPages = Math.ceil(unfiltered.length / 30),
    pageNumbers = []

    for (let i = 1; i <= numPages; i++) {
      pageNumbers.push(i)
    }

    return unfiltered.length ? 
    (
      <div id="results">
        <div id="pagination">
          <p>Displaying {startIdx + 1} - {endIdx} of {unfiltered.length} results</p>
        </div>

        {
          books && books.map(book => {
            return (
              <div key={book.key} className="result">
                {book.title}
              </div>
            )
          })
        }

        <div id="pages">
          {
            pageNumbers.map(num => {
              return num === currentPage ?
              (
                <p
                  className="page currPage"
                  key={num}
                  id={num}
                  onClick={this.handleClick}>{num}</p>
              )
              : (
                <p
                  className="page"
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
  unfiltered: state.books.list
})

export default connect(mapState)(BookResults)
