import React, { Component, Fragment } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import BookDetails from './BookDetails'
import BookResults from './BookResults'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Sidebar/>
        <BookResults/>
        <BookDetails/>
      </Fragment>
    )
  }
}