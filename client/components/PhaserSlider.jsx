import React from 'react';  
import { phaser } from './Synth.jsx';

function PhaserSlider() {  
  const handleSliderChange = (event) => {  
    const value = parseFloat(event.target.value);
    phaser.wet.value = value;
  }

  return (  
    <div>  
      <input type="range" min="0" max="1" step="0.01" onChange={handleSliderChange} />
      <label>Phaser</label>
    </div>  
  )  
}  

export default PhaserSlider;
