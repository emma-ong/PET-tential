import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function Header() {

  return <>
  <div>
  <Link to="/"><h2 className='heading'>PET-tential</h2></Link> 
  </div>
  </>
}

export default Header