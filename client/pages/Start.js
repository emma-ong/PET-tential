import React from 'react';
import Cards from '../components/Cards'
import Upload from '../components/Upload'

const Start = () =>{
  return <>
  <div className="page">
  <h1>Find your PET-tential</h1>
  <div className='cards-box'>
    <Cards />
  </div>
  <h1>Find a PET-tential home</h1>
  <div className='cards-box'>
    <Upload />
  </div>
</div>
  
  </>
}
export default Start;
