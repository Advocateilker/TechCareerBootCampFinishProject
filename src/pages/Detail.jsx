import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ShareButtons from '../components/ShareButtons';
const Detail = () => {
  let { id } = useParams();
  const [event, setEvent] = useState()
 // console.log(id)
  useEffect(() => {
    axios.get(`http://localhost:3038/events/${id}`)
      .then((res) => setEvent(res.data))
      .catch((err) => console.log(err))

  },[id]);
  return (
    <div className='detail-card'>
      <div className='detail-card-left'>
        {!event?.images &&
          <img src="https://t4.ftcdn.net/jpg/02/16/94/65/360_F_216946587_rmug8FCNgpDCPQlstiCJ0CAXJ2sqPRU7.jpg" alt="" />
        }
        {event?.images && <Splide className="splide"
          options={{
            rewind: true,
            autoplay: true,
          }}
        >
          {event?.images?.map((i, index) => (
            <SplideSlide key={index} >
              <img src={i} alt="Image 1" />
            </SplideSlide>

          ))}
        </Splide>}
      </div>
      <div className='detail-card-rigth' >

        {!event ? "Yükleniyor" : (

          <div>

            <h3>{event.name}</h3>
            <p>Kategori : <span>{event.category}</span></p>
            <p>Tarih: <span> {event.startDate} - {event.endDate}</span></p>
            <p>Price: <span> 65 &#8378;</span></p>
            <h5 className='text-decoration-underline text-primary'>Fiyatlar</h5>
            {event?.price?.map((p, i) => (
              <p key={i} className='fw-bold'>Kategori-{i + 1} : <span className='text-secondary font-italic'> {p} &#8378;</span></p>

            ))}
            <iframe
              src={event?.iframeSrc}
              width="100%"
              height="450"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />

          </div>

        )}

        <ShareButtons event={event} />

      </div>

    </div>
  )
}

export default Detail