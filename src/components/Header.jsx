import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <NavLink to={"/list"}>List</NavLink>
        <NavLink to={"/map"}>Map</NavLink>
        
    </div>
  )
}

export default Header