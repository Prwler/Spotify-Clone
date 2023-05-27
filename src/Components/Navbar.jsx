import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Body'
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
      <Home/>
    </>
  )
}

export default Navbar
