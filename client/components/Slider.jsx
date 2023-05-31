import React from 'react';
import * as Tone from 'tone';
import Slider from '@mui/material/Slider';

// Create and export the synth and distortion effect in a separate module
// This allows the same synth and distortion effect to be used in multiple components
export const synth = new Tone.PolySynth(Tone.Synth).toDestination();
export const distortionEffect = new Tone.Distortion(0);

// The Slider component controls the amount of distortion
function DistortionSlider() {
  const [distortion, setDistortion] = React.useState(0);

  const handleDistortionChange = (event, newValue) => {
    setDistortion(newValue);
    distortionEffect.distortion = newValue;
  };

  return (
    <Slider value={distortion} onChange={handleDistortionChange} min={0} max={1} step={0.01} />
  );
}


export default DistortionSlider;
