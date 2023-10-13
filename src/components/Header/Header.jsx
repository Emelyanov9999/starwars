import React from 'react'
import '../../normalize.css'
import '../../reset.css'
import './header.scss'
import logo from '../../img/icons/Logo.svg'
import favourite from '../../img/icons/Favourite.png'

const Header = () => {
  return (
    <header className='header'>
        <div className = 'divImg'>
            <img className = 'logo' src={logo} alt='logo'></img>
        </div>
        <nav className='navigation'>
            <ul>
                <li><a className = 'navLink' href="#">Home</a></li>
                <li><a className = 'navLink' href="#">News</a></li>
                <li><a className = 'navLink' href="#">Gallery</a></li>
                <li><a className = 'navLink' href="#">Forum</a></li>
                <li><button><img src={favourite} alt="favourite" /></button></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header