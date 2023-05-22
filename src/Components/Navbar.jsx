import React from 'react'
import Body from './Body'
import './NavBar.css'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='btn-container'>
            <button className='signup-btn'>Sign Up</button>
            <button className='login-btn'>Log in</button>
        </div>
      </nav>
      <Body/>
    </>
  )
}

export default Navbar
