import React from 'react'
import Keys from './Keys'

const Keyboard = () => {
  return (
    <div>
      <Keys keycode={27} />
      <Keys keycode={49} />
      <Keys keycode={50} />
    </div>
  )
}

export default Keyboard
