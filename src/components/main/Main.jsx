import React from 'react'
import {useState} from 'react'
import '../../normalize.css'
import '../../reset.css'
import './main.css'
import search from '../../img/icons/Search.png'
import DartVader from '../../img/charecters/Dart Vader.png'
import CharacterCard from './CharacterCard/CharacterCard'
import Modal from '../modal window/Modal'

const Main = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [characterId, setCharacterId] = useState(null)
    const openModal = (id) => {
        setIsModalOpen(true)
        setCharacterId(id)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const charNames = ['Dart Vader', 'Luke Skywalker', 'C3Po', 'R2D2']
    return (
        <main>
            <div className="namePlusInput">
                <h2>Character</h2>
                <div className="namePlusInput__divInput">
                    <img src= {search} alt="search icon"/>
                    <input type="text" placeholder="Search character..."/>
                </div>
            </div>
            <div className="characterInfo">
               <CharacterCard img={DartVader} charName={charNames[0]} openModal={() => openModal(1)} characterId={characterId}/>
               <CharacterCard img={DartVader} charName={charNames[1]} openModal={() => openModal(2)} characterId={characterId}/>
               <CharacterCard img={DartVader} charName={charNames[2]} openModal={() => openModal(3)} characterId={characterId}/>
               <CharacterCard img={DartVader} charName={charNames[3]} openModal={() => openModal(4)} characterId={characterId}/>
            </div>
            {isModalOpen && <Modal closeModal={closeModal} characterId={characterId}/>}
    </main>
    )
}

export default Main
