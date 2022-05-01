const path = require('path')
const express = require('express')



const pets = require('./routes/pets')
const dogFacts = require('./routes/dogFacts')
const reviews = require('./routes/reviews')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/pets', pets)
server.use('/api/v1/dogFacts', dogFacts)
server.use('/api/v1/reviews', reviews)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
