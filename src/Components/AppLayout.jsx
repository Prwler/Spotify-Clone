import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Body'
import SideBar from './SideBar'
import Navbar from './Navbar'

const AppLayout = () => {
  return (
    <div className='tree'>
      <div className=''><SideBar/></div>
      <div className=''><Navbar/></div>
      
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    </div>
  )
}

export default AppLayout
