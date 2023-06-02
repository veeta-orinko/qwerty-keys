import React, { useState, useEffect } from 'react';
import { distortion } from './Synth.jsx'; // Import the distortion from Synth.jsx
import WebFont from 'webfontloader';

function DistortionSlider() {
  const [value, setValue] = useState(0);

  const handleSliderChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setValue(newValue);

    // Set the distortion amount. You may need to scale or adjust this depending
    // on the range and scale of your slider.
    distortion.distortion = newValue;
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto']
      }
    });
  }, []);

 
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '60px', marginBottom: '20px', fontSize: '20px' }}>
      <div style={{ position: 'relative', height: '2px', width: '180px', background: '#66aa78', marginRight: '20px' }}>
        <span style={{ position: 'absolute', top: '-11px', left: `${value * 175}px`, fontSize: '24px', userSelect: 'none' }}>🌸</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={value}
          onChange={handleSliderChange}
          style={{ position: 'absolute', opacity: 0, width: '200px', height: '24px' }}
        />
      </div>
      <label style={{ color: '#66aa78' }}>DISTORTION</label>
    </div>
  );
}

export default DistortionSlider;
