import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { Splide, SplideSlide } from '@splidejs/react-splide';



const Detail = ({ events }) => {

  let { id } = useParams();

  const [event, setEvent] = useState()

  console.log(id)

  useEffect(() => {
    axios.get(`http://localhost:3038/events/${id}`)
      .then((res) => setEvent(res.data))
      .catch((err) => console.log(err))

  }
    , [id]);

  console.log(event)

  return (
    <div className='detail-card'>
      <div className='detail-card-left'>
        
      {!event?.images && 
        <img src="https://t4.ftcdn.net/jpg/02/16/94/65/360_F_216946587_rmug8FCNgpDCPQlstiCJ0CAXJ2sqPRU7.jpg" alt="" />
      }

{event?.images &&  <Splide className="splide"
          options={{
            rewind: true,
             }}
        >
          {event?.images?.map((i) => (
            <SplideSlide>
              <img src={i} alt="Image 1" />
            </SplideSlide>

          ))}

        </Splide> }



      </div>
      <div className='detail-card-rigth' >

       


        <p>{event?.name}</p>

      </div>

    </div>
  )
}

export default Detail