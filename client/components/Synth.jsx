import * as Tone from 'tone';


const distortion = new Tone.Distortion(0.4).toDestination();
distortion.oversample = '4x';const reverb = new Tone.Reverb(1).toDestination();
const delay = new Tone.FeedbackDelay(0.5, 0.5).toDestination();
const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination();
const phaser = new Tone.Phaser({
  frequency: 15, 
  octaves: 5, 
  baseFrequency: 1000
}).toDestination();
const tremolo = new Tone.Tremolo(9, 0.75).toDestination();

const synth = new Tone.PolySynth(Tone.Synth).chain(distortion, reverb, delay, chorus, phaser, tremolo);

export { synth, distortion, reverb, delay, chorus, phaser, tremolo };
