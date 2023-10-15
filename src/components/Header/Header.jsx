import React from 'react'
import '../../normalize.css'
import '../../reset.css'
import './header.scss'
import logo from '../../img/icons/Logo.svg'
import favourite from '../../img/icons/Favourite.png'

const Header = () => {
  return (
    <header>
        <div class="head__logo">
            <img src= {logo} alt=""/>
        </div>
        <nav class="head__nav">
            <ul class="head__ul">
                <li><a href="">Home</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Gallery</a></li>
                <li><a href="">Forum</a></li>
                <li><img src= {favourite} alt=""/></li>
            </ul>
        </nav>
    </header>
    
  )
}

export default Header