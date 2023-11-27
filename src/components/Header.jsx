import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate()
  return (
    <header>
      <div onClick={()=>navigate("/home")} className='left'>LOGO</div>
      <div className='right'>
        <NavLink to={"/feed"}>List</NavLink>
        <NavLink to={"/map"}>Map</NavLink>
      </div>


    </header>
  )
}

export default Header