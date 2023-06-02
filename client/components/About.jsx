import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import WebFont from 'webfontloader';



function About() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto']
      }
    });
  }, []);

  const [isPressed, setIsPressed] = useState(false)
  const navigate = useNavigate();

  // shared function for typing
  function keyPressed() {
    console.log('clicked OR typed ')
    setIsPressed(true)
  }

  function keyUnPressed() {
    setIsPressed(false)
    navigate('/'); // navigates back to the main page when the button is unpressed
  }

  const textStyle = {
    letterSpacing: '0.02em',
    paddingTop: '10px',
    paddingLeft: '250px',
    paddingRight: '250px',
    paddingBottom: '300px',
    fontSize: '16px',
    fontFamily: 'Roboto',
    lineHeight: '1.5',
    color: '#66aa78',
  };

  const headingStyle = {
    fontSize: '50px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const txtStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const txt2Style = {
    fontSize: '17px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const linkStyle = {
    color: '#66aa78',
    textDecoration: 'none',
  };

  const linkHoverStyle = {
    color: '#66aa78',
    textDecoration: 'underline',
  };

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

      <div style={textStyle}>
        <h1 style={headingStyle}>𓂉 hi  </h1>
        <p style={txtStyle}> You found the about page! QWERTY keys was built by me 
        (Veeta Orinko)
        I'm a mum who loves to code, and I live in Lake Hawea, New Zealand 
        <p style={txtStyle}> I'll be evolving the project some more, so keep an eye out for feature updates! This is an early release so it's a bit buggy, and some of the keys don't work, but that's all part of the charm, right?  </p>
      </p>  <p style={txt2Style}> <a href="https://www.instagram.com/veetaorinko/" target="_blank" rel="noreferrer" style={linkStyle} onMouseOver={() => {linkStyle = linkHoverStyle}} onMouseOut={() => {linkStyle = linkHoverStyle}}> my socials ⛰️ @veetaorinko</a></p>
      </div>
    </>
  )
}

export default About
