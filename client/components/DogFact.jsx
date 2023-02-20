import React, { useState, useEffect } from 'react'
import {getDogFacts} from '../api'

function DogFact() {
  const [fact, setFact] = useState('')

  useEffect(()=>{
    getDogFacts()
    .then((res)=>{
      let data = JSON.parse(res.text)
      setFact(data.facts[0])
    })
    .catch(err => console.log(err, getDogFacts()))
  }, [])

  return <>
    <div style={{textAlign: 'center'}}>
    <h2>Random fact of the day!</h2>
     <p>{fact}</p>
    </div>
  </>
}

export default DogFact