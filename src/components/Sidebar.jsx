import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Sidebar = ({categories,filterCategory}) => {



  return (
    <div className='sidebar'>
      <h5 className='text-decoration-underline'>Kategoriler</h5>
      <span onClick={()=>filterCategory("hepsi")} >Hepsi</span>
      {categories?.map((c)=> <span onClick={()=>filterCategory(c)}>{c}</span> )}

    </div>
  )
}

export default Sidebar