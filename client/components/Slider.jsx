import React, { useEffect, useRef } from 'react';
import * as Tone from 'tone';

function DistortionSlider() {
    // Create a Tone.js distortion effect with an initial value
    const distortion = useRef(new Tone.Distortion(0.4));

    // This function is called when the slider's value changes
    const handleSliderChange = (event) => {
        // Convert the slider value from string to float
        const value = parseFloat(event.target.value);

        // Set the distortion amount. You may need to scale or adjust this depending
        // on the range and scale of your slider.
        distortion.current.distortion = value;
    }

    // When the component is mounted, connect the distortion effect to the master output
    useEffect(() => {
        distortion.current.toDestination();
        return () => {
            // Disconnect and dispose of the distortion effect when the component is unmounted
            distortion.current.disconnect();
            distortion.current.dispose();
        }
    }, []);

    return (
        <div>
            <input type="range" min="0" max="1" step="0.01" onChange={handleSliderChange} />
        </div>
    )
}

export default DistortionSlider;
