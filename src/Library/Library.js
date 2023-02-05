import React, { useState, useEffect } from 'react'
import APIKit from '../Spotify'
import {IconContext} from 'react-icons'
import {AiFillPlayCircle} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

import './Library.css'

const Library = () => {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get('me/playlists').then(function(res){
      setPlaylists(res.data.items);
      console.log(res.data.items)
    })
  },[])

  const navigate = useNavigate()

  const playPlaylist = (id) => {

    navigate('/player', { state : {id : id} })
  }

 
  return (
    <>
      <div className="main-container">
        <div className="library-body">
          {playlists?.map((playlist) => (
            <div className='playlist-card' key={playlist.id} onClick = { () => playPlaylist(playlist.id)} >
              <img src={playlist.images[0].url} className='playlist-img' alt="" />
              <p className='playlist-name'>{playlist.name}</p>
              <p className='playlist-total'>{playlist.tracks.total} Songs</p>
              <div className='playlist-btn'>
                <IconContext.Provider value={{size:'50px', color:'orange'}}>
                  <AiFillPlayCircle/>
                </IconContext.Provider>
              </div>
            </div>
          ))}   
        </div>     
      </div>
    </>
  )
}

export default Library