import React from 'react'

import {useNavigate } from "react-router-dom";



const Card = ({ i }) => {
    console.log(i)
    const navigate=useNavigate()

    return (
        <div onClick={()=> navigate(`/feed/${i.id}`)} className='card'>
            <div>
                <h3>{i.name}</h3>
                <p>Kategori : <span>{i.category}</span></p>
                <p>Tarih: <span> {i.startDate} - {i.endDate}</span></p>
                <p>Yeri: <span>{i.place}</span> </p>
                <p>Price: <span> 65 &#8378;</span></p>
            </div>
        </div>
    )
}

export default Card