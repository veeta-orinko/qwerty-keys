import React, { useState, useEffect, useRef } from 'react'

///// have all the keys displaying

const Keys = (props) => {
  const [floatClick, setFloatClick] = useState('')
  const el = useRef()
  // sets up a ref that doesn't cause component to re-render
  useEffect(() => {
    function keypress() {
      setFloatClick('key')
      console.log('HELLOOOO')
    }
    el.current.addEventListener('click', keypress)
    return () => {
      el.current.removeEventListener('click', keypress)
    }
  }, [])

  // function keyClick(e) {
  //   e.keyCode >= '8' && e.keyCode <= '90'
  //   setFloatClick('key')
  // }

  const image = '../images/' + props.keycode + 'keyDown.png'
  return <img src={image} alt="keys" className={floatClick} ref={el} />
}

export default Keys
