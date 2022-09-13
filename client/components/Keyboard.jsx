import React from 'react'
import Key from './Key'

const Keyboard = () => {
  return (
    <div>
      <Key keycode={27} id="1" />
      <Key keycode={49} id="2" />
      <Key keycode={50} id="3" />
    </div>
  )
}

export default Keyboard
