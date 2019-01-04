import React, { Component, Fragment } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Sidebar/>
      </Fragment>
    )
  }
}