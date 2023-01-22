import React from 'react'
import Logo from "../../images/logo.svg"
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <a href="/" className='logo'><img src={Logo} alt="" /></a>
        <div className="nav">
            <ul className='navbar__list'>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <button className='btn'>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar