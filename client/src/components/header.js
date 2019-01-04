import React, { Component } from 'react'

const Header = () => {
  return (
    <div id="header">
      <h1 id="title" className="header-content">
        Welcome, Readers!
      </h1>

      <p id="about" className="header-content">
        Find your next literary adventure using Open Library's Search API.
      </p>
    </div>
  )
}

export default Header