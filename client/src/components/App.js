import React, { Component } from 'react'
import jsonObj from '../../../characters.json'
import CharacterOption from './CharacterOption'

const App = () => {
  return (
    <div id="main">
      <div className="container">
        {
          jsonObj.characters.map(character => {
            return (
              <CharacterOption
                key={character.name}
                name={character.name}
                url={character.url} />
            )
          })
        }
      </div>
    </div>
  )
}

export default App
