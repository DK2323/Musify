import React  from 'react'
import './Sidebar.css'
import SidebarButtons from './SidebarButtons'
import {FaPlay} from "react-icons/fa"
import { IoLibrary } from "react-icons/io5"


const Sidebar = () => {
  
  return (
    <>
    <div className="sidebar-container">
      <SidebarButtons title = 'Library' to = '/' icon = {<IoLibrary/>}/>
      <SidebarButtons title = 'Player' to = '/player' icon = {<FaPlay/>}/>
      
    </div>
    </>
  )
}

export default Sidebar