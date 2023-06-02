import React, { useEffect } from 'react';
import Keyboard from './Keyboard';
import About from './About';
import * as Tone from 'tone';
import DistortionSlider from './DistortionSlider';
import ReverbSlider from './ReverbSlider';
import DelaySlider from './DelaySlider';
import { Route, Routes } from 'react-router-dom';
import { emojiCursor } from "cursor-effects";
new emojiCursor({ emoji: ["🌸", "🌸", "🌸"] });





// import bgImage from '../../server/public/images/bgidea.png';

function App() {

  const headingStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    marginTop: '100px',
    marginBottom: '40px',
    marginLeft: '2%',
    color: '#66aa78',
    letterSpacing: '0.09em',
    
  };

  useEffect(() => {
    Tone.start();
  }, []);

  

  
  return (
    
    <div style={{
      // backgroundImage: `url(${bgImage})`,
      // backgroundPosition: 'top',
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
      // width: '100vw',
     height: '100vh',
      paddingLeft: '10vw'
    }}>
      
      <h1 style={headingStyle}> QWERTY KEYS  </h1>

      <Routes>
        <Route path="/" element={<>
          <Keyboard/> 
        <DistortionSlider/> <ReverbSlider/> <DelaySlider/> 
       
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
