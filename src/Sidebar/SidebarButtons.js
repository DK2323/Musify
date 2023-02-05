import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import './SidebarButton.css'

const SidebarButtons = (props) => {
    const location = useLocation();
    const isActive = location.pathname === props.to;
    const sidebarBtnClass = isActive ? 'sidebar-btn-active' : 'sidebar-btn';
  return (
    <>
       <Link to={props.to}>
          <div className={sidebarBtnClass}>
            {props.icon}
            <p className='sidebar-btn-title'>{props.title}</p>
          </div>
         
       </Link>
    </>
  )
}

export default SidebarButtons