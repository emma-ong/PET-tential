import React, { useState, useEffect, useRef} from 'react'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import About from "../pages/About"
import Contact from "../pages/Contact"
import Start from "../pages/Start"
import NoPage from '../pages/NoPage'
import Home from '../pages/Home';
import Footer from '../components/Footer';
import Nav from '../components/Nav'
// import { getWelcome } from '../api'
//import { getPets } from '../api'

// export default function App() {
//   return <Carousel />;
// }


function App() {
  // const count = useRef(0)
  // const [test,setTest] = useState(0)

  
  // const [cats, setCats] = useEffect([])
// useEffect(()=>{
//   count.current = count.current + 1
//   console.log(count.current + 1)
  // console.log(setTest(test + 1))
// })
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
    <Nav />
      <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/start" element={<Start />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
  </div>
  </>
}

export default App
