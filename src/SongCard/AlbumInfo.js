import React from 'react'
import './AlbumInfo.css'

const AlbumInfo = ({album}) => {
  return (
    <>
    <div className='albumInfo-body'>
      <p className='songName'> Song Name : {album?.name}</p>
      <p className='releaseDate'> Release Date : {album?.release_date}</p>
    </div>
    </>
  )
}

export default AlbumInfo