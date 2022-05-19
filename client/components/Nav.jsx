import React from 'react'
import {  Outlet, Link } from "react-router-dom";
import Header from '../components/Header';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated';

function Nav() {

  return <>
  <div className='nav-bar'>
  <Header />
  <nav>
  <ul className='nav-ul'>
      {/* <li><Link to="/">Home</Link></li> */}
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/start">Start your Search!</Link></li>
      <IfNotAuthenticated>
        <li><LoginButton/></li>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <li><LogoutButton/></li>
      </IfAuthenticated>
    </ul>
  </nav>
  </div>
  {/* <Footer /> */}
  <Outlet />
  </>
}

export default Nav