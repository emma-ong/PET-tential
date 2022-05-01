import React, { useState, useEffect } from 'react'
import {  Outlet, Link } from "react-router-dom";
import Slider from '../components/Slider'

function Intro() {

  return <>
  <div className='intro'>
    <div className='intro-words'>
    <h1 className="intro-text">Look for a <br />PET-tential match!</h1>
    <button className='intro-button' role="button"><Link to="/start">Begin here</Link></button>
    </div>
    <div className="intro-img-div">
    <Slider className='sliderImg' />
    </div>
  </div>
  
  </>
}

export default Intro