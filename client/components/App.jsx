import React from 'react'
import Keyboard from './Keyboard'
import About from './About'
import DistortionSlider from './Slider'
import { Route, Routes } from 'react-router-dom'

function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<><Keyboard/> <DistortionSlider/></>} />
        <Route path="/about" element={<About />} />
      </Routes>
   
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
