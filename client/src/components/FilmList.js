import React from 'react'
import days from '../../../utilities/days.json'

const FilmList = props => {
  const { films } = props
  return (
    <div id="films">
      {
        films.map(film => {
          let { title, episode_id, release_date } = film
          release_date = new Date(release_date.replace(/-/g, ' ')).toDateString()
          let key = release_date.slice(0, 3), formattedDate = days[key].concat(release_date.slice(4))
          return (
            <div key={title} className="singleFilm">
              <h4>{`Episode ${episode_id}`}</h4>
              <h2>{title}</h2>
              <p>{formattedDate}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default FilmList
