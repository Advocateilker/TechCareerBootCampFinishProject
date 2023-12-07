import React from 'react'
const Sidebar = ({categories,filterCategory}) => {
  return (
    <div className='sidebar'>
      <h5 className='text-decoration-underline'>Kategoriler</h5>
      <span onClick={()=>filterCategory("hepsi")} >Hepsi</span>
      {categories?.map((c,i)=> <span key={i} onClick={()=>filterCategory(c)}>{c}</span> )}

    </div>
  )
}

export default Sidebar