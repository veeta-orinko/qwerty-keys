import React from 'react';  
import { distortion } from './Synth.jsx'; // Import the distortion from Synth.jsx

function DistortionSlider() {  
  // This function is called when the slider's value changes  
  const handleSliderChange = (event) => {  
    // Convert the slider value from string to float  
    const value = parseFloat(event.target.value);  

    // Set the distortion amount. You may need to scale or adjust this depending  
    // on the range and scale of your slider.  
    distortion.wet.value = value;
}  

  return (  
    <div>  
      <input type="range" min="0" max="1" step="0.01" onChange={handleSliderChange} />  
    </div>  
  )  
}  

export default DistortionSlider;
