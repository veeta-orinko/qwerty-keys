import React, { useState, useEffect } from 'react'
import * as Tone from 'tone'
const synth = new Tone.PolySynth(Tone.Synth).toDestination()

const Key = (props) => {
  // click state
  const [isPressed, setIsPressed] = useState(false)

  // typing only - key down
  const keydown = (e) => {
    if (e.keyCode === props.keycode) {
      keyPressed()
    }
  }

  // typing only - key up
  const keyup = (e) => {
    if (e.keyCode === props.keycode) {
      keyUnPressed()
    }
  }

  // shared function for typing
  function keyPressed() {
    const now = Tone.now()
    synth.triggerAttackRelease(props.note, '4n', now)
    console.log('clicked OR typed ' + props.keycode)
    setIsPressed(true)
  }

  function keyUnPressed() {
    console.log('stopped clicking OR typing ' + props.keycode)
    setIsPressed(false)
  }

  useEffect(() => {
    window.addEventListener('keydown', keydown)
    window.addEventListener('keyup', keyup)

    return () => {
      window.removeEventListener('keydown', keydown)
      window.removeEventListener('keyup', keyup)
    }
  }, [keyup, keydown])

  const image = '../images/' + props.keycode + 'keyDown.png'

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <img
      height="55px"
      src={image}
      alt="keys"
      className={isPressed ? 'key active' : 'key'}
      onMouseDown={keyPressed}
      onMouseUp={keyUnPressed}
      onTouchStart={keyPressed}
      onTouchEnd={keyUnPressed}
    />
  )
}

export default Key
