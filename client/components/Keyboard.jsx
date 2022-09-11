import React, { useState } from 'react'

const Keyboard = () => {
  window.addEventListener('keydown', keypress, false)
  const [img, setImg] = useState('')
  function keypress(e) {
    if (e.keyCode == '27') {
      setImg(<img src="../images/27keyDown.png" alt="escape key pressed" />)
    }
  }
  return <div>{img}</div>
}

export default Keyboard
