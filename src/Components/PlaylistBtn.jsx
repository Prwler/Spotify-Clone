import React from 'react'
import './PlaylistBtn.css'

const PlaylistBtn = (props) => {
  return (
    <>
        <button className='playlist-btn'>
            <img src = {props.imageSource} className='btn-img'/>
            <h4 className='btn-header'>{props.title}</h4>
            <p className='btn-text'>{props.body}</p>
        </button>
    </>
  )
}

export default PlaylistBtn