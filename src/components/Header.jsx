import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate()
  return (
    <header>
      <div onClick={()=>navigate("/home")} className='left'>BiletEdin</div>
      <div className='right'>
        <NavLink to={"/feed"}>Liste Görünümü</NavLink>
        <NavLink to={"/map"}>Harita Görünümü</NavLink>
        <NavLink to={"/outdated"}>Zamanı Geçmiş</NavLink>
      </div>


    </header>
  )
}

export default Header