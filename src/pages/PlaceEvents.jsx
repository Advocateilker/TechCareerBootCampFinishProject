import React from 'react'
import { useParams } from 'react-router-dom';
import Card from "../components/Card"


const PlaceEvents = ({events}) => {

    let { place } = useParams();

    const filtered=events?.filter((i)=> i?.place==place)

    console.log(filtered)
  return (
    <div className="card-container">
      {filtered?.map((event)=> <Card event={event}/>)}
    </div>
  )
}

export default PlaceEvents