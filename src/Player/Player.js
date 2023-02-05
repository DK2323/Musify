import React, { useEffect, useState } from 'react'
import './Player.css'
import { useLocation } from 'react-router-dom'
import apiClient from '../Spotify'
import SongCard from '../SongCard/SongCard.js'
import Queue from '../Queue/Queue.js'
import AudioPlayer from '../AudioPlayer/AudioPlayer.js'

const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if(location.state){
      apiClient.get('playlists/'+location.state?.id+"/tracks")
      .then(res => {setTracks(res.data.items)
        setCurrentTrack(res.data.items[0].track)
    })
    }
  },[location.state]);

   useEffect(() => {
   setCurrentTrack(tracks[currentIndex]?.track);
   },[currentIndex,tracks])

  return (
    <>
    <div className="main-container flex">
      <div className="left-player">
        <AudioPlayer currentTrack={currentTrack} isPlaying={true} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} total={tracks} />
      </div>


      <div className="right-player">
        <SongCard album={currentTrack?.album}/>
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>  
      </div>
    </div>
    </>
  )
}

export default Player