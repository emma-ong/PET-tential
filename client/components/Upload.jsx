import React, { useState, useEffect } from 'react'
import { addPet } from '../api'

const initialFormData = {
  name: "",
  mobile: 0,
  description: "",
  img: null
}

function Upload() {  

  const [form, setForm] = useState(initialFormData)
  const [pets, setPet] = useState([])

  const handleChange = (event) => {
    const {name, value} = event.target
    const newForm = {
      ...form, [name]:value
    }
    setForm(newForm)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form)
    return addPet(form)
    .then((pet)=>setPet([...pets,pet]))
    .catch((err)=>console.log(err))
  }
  
  return <>
  <div className='upload'>
     <form onSubmit={handleSubmit} className='upload-form'>
       <div className='upload-inputs'>
       <label htmlFor="name">Name of Pet</label>
        <input  
            id="name"
            onChange={handleChange}
            value={form.name}
            name="name"/>
       </div>
      <div className='upload-inputs'>
        <label htmlFor="mobile">Contact Number</label>
        <input  
            id="mobile"
            onChange={handleChange}
            value={form.mobile}
            name="mobile"/></div>
      <div className='upload-inputs'>
        <label htmlFor="">Description of Pet</label>
        <input  
            id="description"
            onChange={handleChange}
            value={form.description}
            name="description"/>
            </div>
      <div className='upload-inputs'>
       <label htmlFor="img">Image of Pet</label>
       <input  
            id="img"
            onChange={handleChange}
            value={form.img}
            name="img"/>
     </div>
      <div className='upload-button'>
      <button role="button">Submit</button>
      </div>
     </form>
  </div>
  </>
}

export default Upload