import React, { useState, useEffect } from 'react'
import * as Tone from 'tone'
import { synth } from './Synth'



const Key = (props) => {

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
    setIsPressed(true)
  }

  function keyUnPressed() {
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
      draggable="false"
      // onMouseEnter={clicker}
      // onMouseLeave={keyUnPressed}
      height="55px"
      src={image}
      alt="keys"
      className={isPressed ? 'key active' : 'key'}
      onMouseUp={keyUnPressed}
      onMouseDown={keyPressed}
      onTouchStart={keyPressed}
      onTouchEnd={keyUnPressed}
    />
  )
}

export default Key
