import React from 'react';
import Cards from '../components/Cards'
import Upload from '../components/Upload'
import { IfAuthenticated, IfNotAuthenticated } from '../components/Authenticated';


const Start = () =>{
  return <>
  <div className="page">
    <IfAuthenticated>
      <div className="page-auth">
        <h1>Find your PET-tential</h1>
        <div className='cards-box'>
          <Cards />
        </div>
        <h1>Find a PET-tential home</h1>
        <div className='cards-box'>
        <Upload />
        </div>
      </div>
    </IfAuthenticated>
    <IfNotAuthenticated>
      <div className="page-not-auth">
            <h1>Sign in to Browse and/or Add Pet-tentials</h1>
      </div>
    </IfNotAuthenticated>
</div>


  
  </>
}
export default Start;
