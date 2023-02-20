const express = require('express')
const request = require('superagent')
const router = express.Router()

// GET /api/v1/dogFacts
router.get('/', (req, res) => {
  return request
    .get('http://dog-api.kinduff.com/api/facts')
    .then((data)=>{
      res.json(data)
    })
    .catch ((err) => {
      res.status(500).send(err.message)
    })  
    
})
    

module.exports = router
