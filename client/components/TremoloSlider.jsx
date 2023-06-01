import React from 'react';  
import { tremolo } from './Synth.jsx';

function TremoloSlider() {  
  const handleSliderChange = (event) => {  
    const value = parseFloat(event.target.value);
    tremolo.wet.value = value;
  }

  return (  
    <div>  
      <input type="range" min="0" max="1" step="0.01" onChange={handleSliderChange} />
      <label>Tremolo</label>
    </div>  
  )  
}  

export default TremoloSlider;
