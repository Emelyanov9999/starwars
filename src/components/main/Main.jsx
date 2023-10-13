import React from 'react'
import '../../normalize.css'
import '../../reset.css'
import './main.css'
import search from '../../img/icons/Search.png'

const Main = () => {
    return (
        <main className='mainClass'>
            <div className="content">
                <div className="divInput">
                    <h2 className='divInput_text'>Characters</h2>
                    <div className="divInput_search">
                        <button><img src = {search} alt="search_icon" /></button>
                        <input type="text" placeholder='Search character...' />
                    </div>
                </div>
                <div className="divOfCards">
                    <div className="charactersCards">
                        <div className="info">
                            <div className="info_name">
                                <h2></h2>
                                <button>Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div className="charactersCards">
                        <div className="info">
                            <div className="info_name">

                            </div>
                        </div>
                    </div>
                    <div className="charactersCards">
                        <div className="info">
                            <div className="info_name">

                            </div>
                        </div>
                    </div>
                    <div className="charactersCards">
                        <div className="info">
                            <div className="info_name">

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Main
