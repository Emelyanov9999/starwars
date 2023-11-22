import React, {useState} from 'react'
import './CharacterCard.css'

const CharacterCard = ({img, charName, openModal, characterId }) => {
  
  

  return (
    <div className="characterInfo__card">
      <div className="characterInfo__info">
          <div className="characterInfo__smallBlock">
              <h3>{charName}</h3>
              <button onClick={openModal}>Learn more</button>
          </div>
      </div>
      <div className="characterInfo__photo">
          <img src= {img} alt={charName}/>
      </div>
    </div>
  )

}

export default CharacterCard