const express = require('express')
const db = require('../db/db')
const router = express.Router()

// GET /api/v1/reviews/
router.get('/', (req, res) => {
  db.getReviews()
    .then((data)=>{
      res.json(data)
    })
    .catch ((err) => {
      res.status(500).send(err.message)
    })  
})

router.post('/', (req,res) => {
  const review = req.body
  db.addReview(review)
   .then(data =>{
    res.json(data)
  })
  .catch ((err) => {
      res.status(500).send(err.message)
    })  
})

module.exports = router