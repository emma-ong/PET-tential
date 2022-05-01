const express = require('express')
const request = require('superagent')
const router = express.Router()

// GET /api/v1/dogFacts
router.get('/', (req, res) => {
  return request
    .get('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all')
    .then((data)=>{
      res.json(data)
    })
    .catch ((err) => {
      res.status(500).send(err.message)
    })  
    
})
    

module.exports = router
