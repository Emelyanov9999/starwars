import React from 'react'
import '../../normalize.css'
import '../../reset.css'
import './main.css'
import search from '../../img/icons/Search.png'
import DartVader from '../../img/charecters/Dart Vader.png'

const Main = () => {
    return (
        <main>
            <div class="namePlusInput">
                <h2>Character</h2>
                <div class="namePlusInput__divInput">
                    <img src= {search} alt="search icon"/>
                    <input type="text" placeholder="Search character..."/>
                </div>
            </div>
            <div class="characterInfo">
                <div class="characterInfo__card">
                    <div class="characterInfo__info">
                        <div class="characterInfo__smallBlock">
                            <h3>Dart Vader</h3>
                            <button>Learn more</button>
                        </div>
                    </div>
                    <div class="characterInfo__photo">
                        <img src= {DartVader} alt="Dart Vader"/>
                    </div>
                </div>
            </div>
    </main>
    )
}

export default Main
