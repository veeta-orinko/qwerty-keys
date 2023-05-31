import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import * as Tone from 'tone';

function DistortionSlider() {
  const [volume, setVolume] = useState(0);
  const [distortion, setDistortion] = useState(0);

  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const volumeControl = new Tone.Volume(volume);
  const distortionEffect = new Tone.Distortion(distortion);

  synth.chain(distortionEffect, volumeControl);

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    volumeControl.volume.value = newValue;
  };

  const handleDistortionChange = (event, newValue) => {
    setDistortion(newValue);
    distortionEffect.distortion = newValue;
  };

  return (
    <div>
      <div>
        <h2>Volume</h2>
        <Slider value={volume} onChange={handleVolumeChange} />
      </div>
      <div>
        <h2>Distortion</h2>
        <Slider value={distortion} onChange={handleDistortionChange} />
      </div>
    </div>
  );
}

export default DistortionSlider;
