import React, { useState, useEffect } from 'react'
import {getDogFacts} from '../api'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
  //The maximum is exclusive and the minimum is inclusive
}

function DogFact() {
  const [fact, setFact] = useState('')

  useEffect(()=>{
    getDogFacts()
    .then((res)=>{
      let factsArr = JSON.parse(res.text)
      let length = factsArr.length
      setFact(factsArr[getRandomInt(0,length)].fact)
    })
    .catch(err => console.log(err))
  }, [])

  return <>
    <div style={{textAlign: 'center'}}>
    <h2>Random fact of the day!</h2>
     <p>{fact}</p>
    </div>
  </>
}

export default DogFact