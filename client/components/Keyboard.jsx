import React from 'react'

window.addEventListener('keydown', keypress, false)

function keypress(e) {
  if (e.keyCode == '27') {
    alert('esc has been pressed')
  }
}
/// making the keyboard images responsive to key press

const Keyboard = () => {
  return keypress
}

export default Keyboard

// const escKey = <img src="../images/esc.png" alt="escape key no event"></img>

// const Keyboard = () => {
//   function keypress(e) {
//     if (e.keyCode == '27') {
//       return <img src="../images/esckeyup.png" alt="escape key pressed"></img>
//     } else {
//       return { escKey }
//     }
//   }
//   return console.log(keypress)
// }

// export default Keyboard
