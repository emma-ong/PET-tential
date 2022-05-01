import React, { useState, useEffect } from 'react'
import {  Outlet, Link } from "react-router-dom";
import Header from '../components/Header';


function Nav() {

  return <>
  <div className='nav-bar'>
  <Header />
  <nav>
  <ul className='nav-ul'>
      {/* <li><Link to="/">Home</Link></li> */}
      {/* <li><Link to="/">Home</Link></li> */}
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/start">Start your Search!</Link></li>
    </ul>
  </nav>
  </div>
  {/* <Footer /> */}
  <Outlet />
  </>
}

export default Nav