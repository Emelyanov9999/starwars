import DartVader from "../../img/charecters/modal image/Dart Vader modal.png";
import "./modal.css";
import React, { useState, useEffect } from "react";

const Modal = ({ closeModal, characterId }) => {

    const [characterData, setCharacterData] = useState(null)
    const fetchData = async (id) => {
        const apiUrl = `https://swapi.dev/api/people/${id}/`;
        try {
            const response = await fetch(apiUrl)
            const data = await response.json()
            return data
        } 
        catch(error) {
            console.error('Error fetching data: ', error)
        }
    }
    useEffect(() => {
        fetchData(characterId).then((data) => setCharacterData(data))
    }, [characterId])

  return (
    <div className="container">
         <div className="modalWindow">
      <div className="modalWindow__content">
        <div className="modalWindow__closeButton" onClick={closeModal}>
          X
        </div>
        {characterData ? (
          <>
            <div className="modalWindow__picture">
          <img src={DartVader} alt="Dart Vader" />
        </div>
        <div className="modalWindow__info">
          <div className="modalWindow__text">
            <div className="modalWindow__charInfo">
              <h2>{characterData.name}</h2>
              <div className="modalWindow__characteristics">
                <div className="modalWindow__parametr">
                  <p>Birth year: </p>
                  <p>Height: </p>
                  <p>Mass: </p>
                  <p>Hair color: </p>
                  <p>Skin color: </p>
                  <p>Eye color: </p>
                  <p>Films: </p>
                </div>
                <div className="modalWindow__value">
                  <p>{characterData.birth_year}</p>
                  <p>{characterData.height}</p>
                  <p>{characterData.mass}</p>
                  <p>{characterData.hair_color}</p>
                  <p>{characterData.skin_color}</p>
                  <p>{characterData.eye_color}</p>
                  <p>
                    {characterData.films}
                  </p>
                </div>
              </div>
            </div>
            <button>Add to favorite </button>
          </div>
        </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
        
      </div>
    </div>
    </div>
   
  );
};

export default Modal;
