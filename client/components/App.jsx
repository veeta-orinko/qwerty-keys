import React, { useEffect } from 'react';
import Keyboard from './Keyboard';
import About from './About';
import * as Tone from 'tone';
import DistortionSlider from './DistortionSlider';
import ReverbSlider from './ReverbSlider';
import DelaySlider from './DelaySlider';
import { Route, Routes } from 'react-router-dom';
// import bgImage from '../../server/public/images/bgidea.png';

function App() {

  useEffect(() => {
    // This will start the audio context as soon as the component is mounted.
    Tone.start();
  }, []); // Pass an empty array to run this effect only once, when the component mounts.


  return (
    <div style={{
      // backgroundImage: `url(${bgImage})`,
      // backgroundPosition: 'top',
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
      // width: '100vw',
      // height: '100vh',
      paddingTop: '20vh',
      paddingLeft: '10vw'
    }}>
      <Routes>
        <Route path="/" element={<>
        <DistortionSlider/> <ReverbSlider/> <DelaySlider/>
        <Keyboard/> 
      {
      //
      //<TremoloSlider/>
      //<ChorusSlider/>
      //<PhaserSlider/>
      // */
    }
      </>} />
        <Route path="/about" element={<About />} />
      </Routes>
   
      <section className="main">{/* add your code here */}</section>
    </div>
  )
}

export default App
