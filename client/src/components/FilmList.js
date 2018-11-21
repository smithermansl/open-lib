import React, { Component } from 'react'

const FilmList = props => {
  const { films } = props
  return (
    <div id="films">
      {
        films.map(film => {
          return (
            <div class="singleFilm">
              <p>Hiii</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default FilmList
