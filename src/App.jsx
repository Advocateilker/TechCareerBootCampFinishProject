import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import '@splidejs/splide/css'
import MapList from './pages/MapList'
import ListView from './pages/ListView'
import AuthPage from './pages/AuthPage'
import Detail from './pages/Detail'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [auth, setAuth] = useState()
  const [user, setUser] = useState([])



  //console.log(user)

  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={<AuthPage setAuth={setAuth} setUser={setUser} />} />
        <Route path="/feed" element={<ListView auth={auth} user={user} />} />
        <Route path="/feed/:id" element={<Detail />} />
        <Route path='/map' element={<MapList />} />

      </Routes>



    </BrowserRouter>

  )
}

export default App