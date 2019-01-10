import React from 'react'
import Sidebar from './Sidebar'
import BookDetails from './BookDetails'
import MainContent from './MainContent'
import { connect } from 'react-redux'

const Main = props => {
  const { details } = props
  return (
    <div id="main">
      <Sidebar/>
      <MainContent/>
      { details ? <BookDetails/> : null}
    </div>
  )
}

const mapState = state => ({
  details: state.books.details
})

export default connect(mapState)(Main)
