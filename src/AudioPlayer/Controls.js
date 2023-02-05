import React from 'react'
import './Controls.css'
import { IconContext } from 'react-icons'
import {AiOutlineStepBackward, AiFillStepForward } from 'react-icons/ai'
import { BsFillPlayFill, BsPauseFill }  from 'react-icons/bs'

const Controls = ({isPlaying, setIsPlaying, nextSong, prevSong}) => {
  return (
    <>
      <IconContext.Provider value={{size:'1.8rem', color:'rgb(31, 210, 31)'}}>
        <div className='controls-wrapper'>
          <div className='back-btn btn' onClick={prevSong}>
            <AiOutlineStepBackward/>
          </div>
          <div className='play-pause-btn btn' onClick={() => setIsPlaying(!isPlaying)}>
            { isPlaying ? <BsPauseFill/> : <BsFillPlayFill/> }
          </div>
          <div className='forward-btn btn' onClick={nextSong}>
            <AiFillStepForward/>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Controls