import React from 'react'
import { connect } from 'react-redux'
import ErrorView from './ErrorView'
import LoadScreen from './LoadScreen'
import Results from './Results'

const MainContent = props => {
  let { error, filtered, isFetching } = props

  if (isFetching) return <LoadScreen/>
  else if (filtered.length) return <Results/>
  else if (error) return <ErrorView/>
  else return null
}

const mapState = state => ({
  error: state.books.error,
  filtered: state.books.filteredList,
  isFetching: state.books.isFetching
})

export default connect(mapState)(MainContent)
