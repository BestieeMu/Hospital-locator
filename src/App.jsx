import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LayOut from './LayOut/Layout'
import  Map  from './Pages/Mab/Map'
import  Home  from './Pages/Home/Home'

function App() {

  

  return (
   <>
<div>
  <Routes>

    <Route path='/' element={<LayOut />}>
      <Route index element={<Home />} />
      <Route path='locations' element={<Map />} />
    </Route>

  </Routes>
</div>
   
   </>
  )
}

export default App
