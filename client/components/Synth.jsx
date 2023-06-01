import * as Tone from 'tone';

const distortion = new Tone.Distortion(0.4).toDestination();
distortion.oversample = '4x';

const synth = new Tone.PolySynth(Tone.Synth).chain(distortion, Tone.Destination);

export { synth, distortion };
