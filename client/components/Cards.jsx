import React, { useState, useEffect } from 'react'
import request from 'superagent'
import { getPets } from '../api'

function Cards() {
const [pets, setPets] = useState([])

  useEffect(()=>{
    getPets()
    .then((res)=>{
      setPets(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  })

  return pets.map((pet)=>{
    return <>
    <div className="card">
          <img src={`/images/${pet.img}`} alt={pet.name}></img>
          <h1>{pet.name}</h1>
          <p className="card-title">{pet.description}</p>
          <button>Contact: +64 {pet.mobile}</button>
        </div>
    </>
  })
}



export default Cards

{/* <div className="card">
          <img src={`/images/${pet.img}`} alt={pet.name}></img>
          <h1>{pet.name}</h1>
          <p className="card-title">{pet.description}</p>
          <p>{pet.mobile}</p>
          <button>Contact</button>
        </div> */}