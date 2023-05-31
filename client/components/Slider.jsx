import React, { useState, useEffect } from 'react';
import { Slider, Typography } from '@mui/material';
import * as Tone from 'tone';

let synth = new Tone.Synth().toDestination();
let volume = new Tone.Volume(0);
let distortion = new Tone.Distortion(0);
synth.chain(volume, distortion, Tone.Destination);

function DistortionSlider() {
  const [distValue, setDistValue] = useState(0);
  const [volValue, setVolValue] = useState(0);

  useEffect(() => {
    distortion.distortion = distValue;
    volume.volume.value = volValue;
  }, [distValue, volValue]);

  const handleDistChange = (event, newValue) => {
    setDistValue(newValue);
  };

  const handleVolChange = (event, newValue) => {
    setVolValue(newValue);
  };

  return (
    <>
      <Typography id="dist-slider" gutterBottom>
        Distortion
      </Typography>
      <Slider
        value={distValue}
        min={0}
        max={1}
        step={0.01}
        onChange={handleDistChange}
        aria-labelledby="dist-slider"
      />
      <Typography id="vol-slider" gutterBottom>
        Volume
      </Typography>
      <Slider
        value={volValue}
        min={-60}
        max={0}
        step={1}
        onChange={handleVolChange}
        aria-labelledby="vol-slider"
      />
    </>
  );
}

export default DistortionSlider;
