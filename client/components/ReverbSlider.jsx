import React from 'react';  
import { reverb } from './Synth.jsx';

function ReverbSlider() {  
  const handleSliderChange = (event) => {  
    const value = parseFloat(event.target.value);
    reverb.wet.value = value;
  }

  return (  
    <div>  
      <input type="range" min="0" max="1" step="0.01" onChange={handleSliderChange} />
      <label>Reverb</label>
    </div>  
  )  
}  

export default ReverbSlider;

