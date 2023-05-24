import React from 'react'
import PeacefulPiano from '/assets/PeacefulPiano.svg'
import DeepFocus from '/assets/DeepFocus.svg'
import Instrumental from '/assets/InstrumentalStudy.svg'
import FocusFlow from '/assets/FocusFlow.svg'

import './Body.css'

const Body = () => {
  return (
    <>
        <h1>Focus</h1>
        <button className='playlist-btn'>
        <img src={PeacefulPiano} className="Ppiano" alt="" />
            Peaceful Piano
            <p className='btn-text'>Peaceful piano to help you slow down, breathe and relax</p>
        </button>

        <button className='playlist-btn'>
        <img src={DeepFocus} className="Ppiano" alt="" />
            Peaceful Piano
            <p className='btn-text'>Peaceful piano to help you slow down, breathe and relax</p>
        </button>

        <button className='playlist-btn'>
        <img src={Instrumental} className="Ppiano" alt="" />
            Peaceful Piano
            <p className='btn-text'>Peaceful piano to help you slow down, breathe and relax</p>
        </button>

        <button className='playlist-btn'>
        <img src={FocusFlow} className="Ppiano" alt="" />
            Peaceful Piano
            <p className='btn-text'>Peaceful piano to help you slow down, breathe and relax</p>
        </button>
    </>
  )
}

export default Body