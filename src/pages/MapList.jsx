import React from 'react'
import { 
    MapContainer, 
    TileLayer, 
    Marker, 
    Popup,
    Polyline
  } from 'react-leaflet'
  import "leaflet/dist/leaflet.css"

const MapList = () => {
    return (
        <div className='mapView'>
            <MapContainer style={{ height: "100%", width: "100%" }} center={[41.05, 29.09]} zoom={11} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>

        </div>
    )
}

export default MapList