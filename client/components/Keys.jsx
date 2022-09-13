import React, { useState } from 'react'

const Keys = (props) => {
  const [isPressed, setIsPressed] = useState(false)

  const down = () => setIsPressed(true)
  const up = () => setIsPressed(false)

  const image = '../images/' + props.keycode + 'keyDown.png'

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <img
      src={image}
      alt="keys"
      className={isPressed ? 'key active' : 'key'}
      onMouseDown={down}
      onMouseUp={up}
      onTouchStart={down}
      onTouchEnd={up}
    />
  )
}

export default Keys
