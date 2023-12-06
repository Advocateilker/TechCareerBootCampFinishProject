import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
const Card = ({ event }) => {
    const navigate = useNavigate()
    const [isHover, setIsHover] = useState(false)
    const handleHover = () => {
        setIsHover(!isHover)
    }
    return (
        <div className='card'>
            <div className='card-index'>
                <h3>{event?.name}</h3>
                <hr />
                <p> Kategori : <span>{event?.category}</span></p>
                <p>Tarih : <span> {event?.startDate} - {event?.endDate}</span></p>
                <p className='place'

                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                    onClick={() => navigate(`/place/${event?.place}`)}>Yeri: <span>{event?.place}</span>
                    <span style={{ visibility: isHover === true ? "visible" : "hidden" }} className='hover'>Diğer Etkinlikler için Tıklayınız</span> </p>
                <p> İlçe : <span>{event.district}</span> </p>
                <h5 className='text-decoration-underline'>Fiyatlar</h5>
                {event?.price?.map((p, i) => (
                    <p> Kategori - {i + 1} : <span className='font-italic' > {p} &#8378;</span></p>
                ))}
                <button className='btn btn-secondary' onClick={() => {
                    navigate(`/feed/${event.id}`);
                    toast.success("Detay Sayfasına Geçiş Yapıldı")
                }}>Detaylara Git </button>
            </div>
        </div>
    )
}
export default Card