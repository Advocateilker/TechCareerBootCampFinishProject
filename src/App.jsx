import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import MapList from './pages/MapList'
import ListView from './pages/ListView'



const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/list' element={<ListView/>} />
        <Route path='/map' element={<MapList/>}/>

      </Routes>



    </BrowserRouter>

  )
}

export default App