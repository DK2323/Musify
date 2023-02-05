import React from 'react'
import AlbumImage from './AlbumImage.js'
import AlbumInfo from './AlbumInfo.js'

import './SongCard.css'

const SongCard = ({album}) => {
  return (
    <>
      <div className='songCard-body'>
        <AlbumImage url={album?.images[0]?.url}/>
        <AlbumInfo album={album}/>
      </div>
    </>
  )
}

export default SongCard