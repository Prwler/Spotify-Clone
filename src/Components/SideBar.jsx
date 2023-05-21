import React from 'react'
import './SideBar.css'

const SideBar = () => {
  return (
    <>
        <div className="container">
            <h1 className='header'>Spotify</h1>
            <ul className='list'>
                <li className='list-item'>Home</li>
                <li className='list-item'>Search</li>
                <li className='list-item'>Your Library</li>
            </ul>
            <div className='extra'>
                <button className='extrabtn'>➕Create Playlist</button><br/>
                <button className='extrabtn'>💟Liked Songs</button>
            </div>
            <div className='footer'>
                Legal       Privacy-Center       Privacy-Policy       Cookies       About       Ads
            </div>

            <button className='eng'>🌐English</button>
        </div>
    </>
  )
}

export default SideBar
