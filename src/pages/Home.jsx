import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { auth } from '../firebase/config';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import ToAuthPage from '../components/ToAuthPage';
const Home = ({ user, events }) => {
  const navigate = useNavigate()
  if (!user || !events) {
    return <ToAuthPage />
  }
  const popularEvents = events.filter((e) => e.images && e.images.length > 1);
  return (
    <div className='home'>
      <div className='welcome'>
        <p><img src={user?.photoURL} alt="" />Hoşgeldiniz, <span>{user?.displayName}</span> </p>
        <span onClick={() => {
          signOut(auth);
          navigate("/")
          window.location.reload()
        }} className='sign-out'>Çıkış Yap</span>
      </div>
      <div className='popular'>
        <h1 style={{ textAlign: "center", marginTop: "12px" }}>POPÜLER ETKİNLİKLER</h1>
        <Splide className="splide"
          options={{
            rewind: true,
            autoplay: true,
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
                <img src={p.images[1]} alt="" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}

export default Home