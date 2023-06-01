import React, { useEffect } from 'react'
import Keyboard from './Keyboard'
import About from './About'
import * as Tone from 'tone';
import DistortionSlider from './DistortionSlider'
import ReverbSlider from './ReverbSlider';
// import DelaySlider from './DelaySlider'
// import ChorusSlider from './ChorusSlider'
// import PhaserSlider from './PhaserSlider'
import TremoloSlider from './TremoloSlider'
import { Route, Routes } from 'react-router-dom'

function App() {

  useEffect(() => {
    // This will start the audio context as soon as the component is mounted.
    Tone.start();
  }, []); // Pass an empty array to run this effect only once, when the component mounts.


  return (
    <>
      <Routes>
        <Route path="/" element={<><Keyboard/> 
        <DistortionSlider/> <ReverbSlider/><TremoloSlider/>
      {
      //<DelaySlider/>
      //<ChorusSlider/>
      //<PhaserSlider/>
      // */
    }
      </>} />
        <Route path="/about" element={<About />} />
      </Routes>
   
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
