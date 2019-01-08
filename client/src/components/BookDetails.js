import React from 'react'
import { connect } from 'react-redux'

const BookDetails = props => {
  const { book } = props
  return (
    <div id="details">
      <h3 id="bookTitle">{book.title}</h3>
      {
        book.author_name ?
        (
          <h5>by {book.author_name[0]}</h5>
        ) : null
      }
    </div>
  )
}

const mapState = state => ({
  book: state.books.selectedBook
})

export default connect(mapState)(BookDetails)
