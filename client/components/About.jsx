import React, { useState } from 'react'

function About() {
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
      <div className="about">
        <img
          height="80px"
          src="../images/about.png"
          alt="keys"
          className={isPressed ? 'key active' : 'key'}
          onMouseDown={keyPressed}
          onMouseUp={keyUnPressed}
          onTouchStart={keyPressed}
          onTouchEnd={keyUnPressed}
        />
      </div>

      <div className="text">
        <p>QWERTY keys is a web audio project created by Veeta Orinko</p>
      </div>
    </>
  )
}

export default About
