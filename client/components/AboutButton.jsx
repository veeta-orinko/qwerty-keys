import React, { useState } from 'react'

const AboutButton = () => {
  // click state
  const [isPressed, setIsPressed] = useState(false)

  // shared function for typing
  function keyPressed() {
    console.log('clicked OR typed ')

    setIsPressed(true)
  }

  function keyUnPressed() {
    setIsPressed(false)
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <>
      <img
        height="55px"
        src="../images/about.png"
        alt="keys"
        className={isPressed ? 'key active' : 'key'}
        onMouseDown={keyPressed}
        onMouseUp={keyUnPressed}
        onTouchStart={keyPressed}
        onTouchEnd={keyUnPressed}
      />
    </>
  )
}

export default AboutButton
