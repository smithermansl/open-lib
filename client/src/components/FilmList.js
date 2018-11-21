import React, { Component } from 'react'

const FilmList = props => {
  const { films } = props
  return (
    <div id="films">
      {
        films.map(film => {
          const { title } = film
          return (
            <div key={title} className="singleFilm">
              <p>{title}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default FilmList
