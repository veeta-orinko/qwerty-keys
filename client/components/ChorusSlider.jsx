import React from 'react';  
import { chorus } from './Synth.jsx';

function ChorusSlider() {  
  const handleSliderChange = (event) => {  
    const value = parseFloat(event.target.value);
    chorus.wet.value = value;
  }

  return (  
    <div>  
      <input type="range" min="0" max="1" step="0.01" onChange={handleSliderChange} />
      <label>Chorus</label>
    </div>  
  )  
}  

export default ChorusSlider;
