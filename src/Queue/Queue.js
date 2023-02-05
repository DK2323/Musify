import React from 'react'
import './Queue.css'

const Queue = ( {tracks, setCurrentIndex} ) => {
  return (
    <>
      <div className='queue-body'>
        <p className='nextSong'>Next Song</p>
        <div className='songList'>
          {tracks?.map((track, index) => {
            return(
              <div className='trackItem'  onClick={() => setCurrentIndex(index)}>
                <p className='trackName'>{track?.track?.name}</p>
              </div>
            )
          })}

        </div>
      </div>
    </>
  )
}

export default Queue