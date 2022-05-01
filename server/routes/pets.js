const express = require('express')
const db = require('../db/db')
const router = express.Router()

// GET /api/v1/pets/
router.get('/', (req, res) => {
  db.getPets()
    .then((data)=>{
      res.json(data)
    })
    .catch ((err) => {
      res.status(500).send(err.message)
    })  
    
})

router.post('/', (req, res) => {
  const {name, mobile, description, img} = req.body
  db.addPet({name, mobile, description, img})
    .then((newPet)=>{
      res.json(newPet)
      return null
    })
    .catch ((err) => {
      res.status(500).send(err.message)
    })  
    
})

module.exports = router
