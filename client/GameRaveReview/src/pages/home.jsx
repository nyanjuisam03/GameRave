import React, { useState } from 'react'
import {Link} from "react-router-dom"
import Main from '../mainpage/main'
import Nav from '../components/nav'
import home from '../picture/home.jpg'
import homepage from '../picture/homepage.gif'
import exhibit3 from "../picture/exhibit3.gif"

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${exhibit3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '600px', // Set the desired height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  }

  const overlayStyle = {
    position: 'absolute',
    top: 75,
    left: 0,
    width: '100%',
    height: '86%',
    background: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity (0.5 in this example)
    zIndex: 1, // Place the overlay above other content
  };
  return (
    <div>
      <Nav/>
<div style={backgroundStyle} className="herosection">
  <div className='heading'>
  <h1>Level Up Your Gaming Experience</h1>
<h2>Explore detailed game reviews, stay updated with industry news, and connect with fellow gamers.</h2>
<button>Explore Games</button>
<button>Browse Reviews</button>
  </div>
  <div style={overlayStyle}></div>
</div>
      <Main/>
    </div>
  )
}

export default Home
