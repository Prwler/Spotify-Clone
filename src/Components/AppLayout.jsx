import React from 'react'
import SideBar from './SideBar'
import Navbar from './Navbar'

const AppLayout = ({children}) => {
  return (
    <div className='tree'>
      <div className=''><SideBar/></div>
      <div className=''><Navbar/></div>
    </div>
  )
}

export default AppLayout
