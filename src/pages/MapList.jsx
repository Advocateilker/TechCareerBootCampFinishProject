import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline
} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import ToAuthPage from '../components/ToAuthPage';

const MapList = ({user}) => {


    const navigate = useNavigate()
    const [events, setEvents] = useState([])



    useEffect(() => {
        axios.get("http://localhost:3038/events")
            .then((res) => setEvents(res.data))
            .catch((err) => console.log(err))
    }, [])

    if (!user || !events) {
        return <ToAuthPage/>
      }

    return (
        <div className='mapView'>
            <MapContainer style={{ height: "100%", width: "100%" }} center={[41.01, 29.01]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {events?.map((e) => (

                    <Marker position={[e.location.lat, e.location.lng]}>
                        <Popup>
                            <h4>{e?.name}</h4>
                            <p>{e?.category}</p>
                            <p>Tarih: <span> {e?.startDate} - {e?.endDate}</span></p>
                            <p>Price: <span> 65 &#8378;</span></p>
                            <button onClick={()=> navigate(`/feed/${e.id}`)}>Detaylar</button>
                        </Popup>
                    </Marker>

                ))}

            </MapContainer>

        </div>
    )
}

export default MapList