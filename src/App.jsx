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

const App = () => {

  const [authNow, setAuthNow] = useState()
  const [userNow, setUserNow] = useState([])



  //console.log(user)

  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={<AuthPage setAuthNow={setAuthNow} setUserNow={setUserNow} />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/feed" element={<ListView authNow={authNow} userNow={userNow} />} />
        <Route path="/feed/:id" element={<Detail />} />
        <Route path='/map' element={<MapList />} />

      </Routes>



    </BrowserRouter>

  )
}

export default App