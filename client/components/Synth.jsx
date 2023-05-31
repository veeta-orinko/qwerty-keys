import * as Tone from 'tone';

// create synth instance
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// export synth for use in other modules
export default synth;
