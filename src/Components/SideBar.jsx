import React from 'react'
import {FaSpotify} from 'react-icons/fa'
import './SideBar.css'

const SideBar = () => {
  return (
    <>
        <div className="container">
            <h1 className='header'><FaSpotify />       Spotify</h1>
            <ul className='list'>
                <button className='list-item'>🏡          Home</button> <br/>
                <button className='list-item'>🔎          Search</button> <br/>
                <button className='list-item'>📚          Library</button>
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
