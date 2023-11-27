import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Home = ({ user, events }) => {

  console.log(user, events)

  if (!user || !events) {
    return <div>YÜkleniyor</div>
  }

  const popularEvents = events.filter((e) => e.images && e.images.length > 0);


  return (
    <div className='home'>
      <div className='welcome'>

        <p><img src={user?.photoURL} alt="" />Hoşgeldiniz, <span>{user?.displayName}</span> </p>

      </div>
      <div className='popular'>
        <h1 style={{textAlign:"center",marginTop:"12px"}}>POPÜLER ETKİNLİKLER</h1>
        <Splide className="splide"
          options={{
            rewind: true,
            autoplay:true,
          }}
        >

          {popularEvents?.map((p) => (
            <SplideSlide>
              <div className='popular-index'>
                <h2>{p?.name}</h2>
                <p>Kategori : <span>{p.category}</span></p>
                <p>Tarih: <span> {p.startDate} - {p.endDate}</span></p>
                <p>Yeri: <span>{p.place}</span> </p>
                <p>Price: <span> 65 &#8378;</span></p>
                <img src={p.images[0]} alt="" />
              </div>
            </SplideSlide>
          ))}
        </Splide>

      </div>


    </div>
  )
}

export default Home