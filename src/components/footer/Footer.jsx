import React from 'react'
import './Footer.css'
import logo from '../../img/icons/Logo.svg'



const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className="frame42">
                <div className="divImg">
                    <img src= {logo} alt="Logo" />
                </div>

                <div className="infoPlusPlaceholder">
                    <div className="info">
                        <div className="infoContent">
                            <h2 className='text'>
                                info
                            </h2>

                            <div className="frame4">
                                <p><a href="#">About us</a></p>
                                <p><a href="#">Terms & Conditions</a></p>
                                <p><a href="#">Social Media</a></p>  
                            </div>
                        </div>

                        <div className="extra">
                            <h2 className='text'>Extra</h2>
                            <div className="frame5">
                                <p><a href="#">Games</a></p>
                                <p><a href="#">Movies</a></p>
                                <p><a href="#">Fandom</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="subscribeForNews">
                        <h2>Subscribe for news</h2>

                        <p>Get the latest news from StarWars world</p>
                            <div className="inputEnter">
                                <input type="text" className='inputFooter' />
                                <button className='arrowButton'><span className="arrow">&#8594;</span></button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer