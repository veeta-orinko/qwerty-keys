
import React, { useState, useEffect } from 'react';  
import { delay } from './Synth.jsx';
import WebFont from 'webfontloader';


function DelaySlider() {
    const [value, setValue] = useState(0);

    const handleSliderChange = (event) => {
      const newValue = parseFloat(event.target.value);  
      setValue(newValue);
      delay.feedback.value = newValue;  
    };

    useEffect(() => {
      WebFont.load({
        google: {
          families: ['Roboto']
        }
      });
    }, []);
  
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px', fontWeight: 'bold', fontSize: '20px' }}>
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
        <label style={{ color: '#66aa78' }}>DELAY</label>
      </div>
    )
  }
  
export default DelaySlider;
