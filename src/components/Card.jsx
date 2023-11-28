import React from 'react'

import {useNavigate } from "react-router-dom";



const Card = ({ event }) => {
   // console.log(i)
    const navigate=useNavigate()

    return (
        <div  className='card'>
            <div className='card-index'>
                <h3>{event?.name}</h3>
                <p>Kategori : <span>{event?.category}</span></p>
                <p>Tarih: <span> {event?.startDate} - {event?.endDate}</span></p>
                <p>Yeri: <span>{event?.place}</span> </p>
                <p>Price: <span> 65 &#8378;</span></p>
                <button onClick={()=> navigate(`/feed/${event.id}`)}>Detaylara Git</button>
            </div>
        </div>
    )
}

export default Card