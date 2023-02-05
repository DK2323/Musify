import React from 'react'
import './AlbumImage.css'

const AlbumImage = ({url}) => {
  return (
    <div className='albumimg-body'>
        <img src={url} alt="albumImg" className='albumImg' />
    </div>
  )
}

export default AlbumImage