import React, { useState } from 'react'

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

  // shared function for typing AND clicking - pressed
  function keyPressed() {
    console.log('clicked OR typed ' + props.keycode)
    setIsPressed(true)
  }

  // shared function for typing AND clicking - unpressed
  function keyUnPressed() {
    console.log('stopped clicking OR typing ' + props.keycode)
    setIsPressed(false)
  }

  // key press listener and state handler
  window.addEventListener('keydown', keydown, false)
  window.addEventListener('keyup', keyup, false)

  const image = '../images/' + props.keycode + 'keyDown.png'

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <img
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
