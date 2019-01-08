import React from 'react'
import Sidebar from './Sidebar'
import BookDetails from './BookDetails'
import MainContent from './MainContent'

const Main = () => {
  return (
    <div id="main">
      <Sidebar/>
      <MainContent/>
      <BookDetails/>
    </div>
  )
}

export default Main
