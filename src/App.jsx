import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import '@splidejs/splide/css'
import MapList from './pages/MapList'
import ListView from './pages/ListView'
import AuthPage from './pages/AuthPage'
import Detail from './pages/Detail'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/config'
import axios from 'axios';
import PlaceEvents from './pages/PlaceEvents'


const App = () => {

  const [user, setUser] = useState()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  const [events,setEvents]=useState([])




  useEffect(()=>{
    axios.get("http://localhost:3038/events")
    .then((res)=>setEvents(res.data))
    .catch((err)=>console.log(err))


  },[])
  



  //console.log(user)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<AuthPage user={user} />} />
        <Route path="/home" element={<Home user={user} events={events} />} />
        <Route path="/feed" element={<ListView user={user} events={events} setEvents={setEvents}  />} />
        <Route path="/feed/:id" element={<Detail />} />
        <Route path="/place/:place" element={<PlaceEvents events={events}  />} />
        <Route path='/map' element={<MapList />} />

      </Routes>



    </BrowserRouter>

  )
}

export default App