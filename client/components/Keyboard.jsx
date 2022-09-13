import React from 'react'
import Keys from './Keys'

const Keyboard = () => {
  return (
    <div>
      <Keys keycode={27} id="1" />
      <Keys keycode={49} id="2" />
      <Keys keycode={50} id="3" />
    </div>
  )
}

export default Keyboard
