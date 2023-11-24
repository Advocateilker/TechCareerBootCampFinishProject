import {useState}from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import MapList from './pages/MapList'
import ListView from './pages/ListView'
import AuthPage from './pages/AuthPage'



const App = () => {

  const [auth,setAuth]=useState()
  const [user,setUser]=useState([])

  //console.log(user)

  return (
    <BrowserRouter>
    <Header/>
      <Routes>

        <Route path='/' element={<AuthPage setAuth={setAuth} setUser={setUser}/>} />
        <Route path="/feed" element={<Home auth={auth} user={user}/>}/>
        <Route path='/list' element={<ListView/>} />
        <Route path='/map' element={<MapList/>}/>

      </Routes>



    </BrowserRouter>

  )
}

export default App