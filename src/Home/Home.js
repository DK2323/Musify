import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from '../Login/Login.js'
import Library from '../Library/Library.js'
import Player from '../Player/Player.js'
import Sidebar from '../Sidebar/Sidebar'
import './Home.css'
import { setClientToken } from '../Spotify'
const Home = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    const hash = window.location.hash;
    window.location.hash = ''
    if(!token && hash){
      const _token = hash.split('&')[0].split('=')[1]
    window.localStorage.setItem('token', _token )
    setToken(_token);
    setClientToken(_token);
    }else{
      setToken(token);
      setClientToken(token);
    }
 },[])


  return (
    (!token) ? 
    <Login/> :
    <>
       <Router>
        <div className="main-body">
           <Sidebar/>
          <Routes>
            <Route path='/' element={<Library/>} />
            <Route path='/player' element={<Player/>} />
          </Routes> 
        </div> 
       </Router> 
    </>
  )
}

export default Home