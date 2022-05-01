
import React, { useState, useEffect } from 'react'
// import { getWelcome } from '../api'
//import { getPets } from '../api'
// import Header from '../components/Header'
import Intro from '../components/Intro'
import Benefits from '../components/Benefits'
import Reviews from '../components/Reviews'


function Home() {

  // const [cats, setCats] = useEffect([])

  // useEffect(() => {
  //   getPets()
  //   .then((res)=>{
  //     setCats(res)
  //   })
  //   .catch((err) => {
  //     console.error(err.message)
  //   })
  // })

  return <>
  <div className="main">
    {/* <Header /> */}
    <Intro />
    <Benefits />
    <Reviews />
    {/* <Footer /> */}
  </div>
  </>
}

export default Home
