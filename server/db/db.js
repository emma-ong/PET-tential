const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPets,
  addPet,
  getReviews,
  addReview

}

function getPets(db = connection) {
  return db('pets').select()
}

function addPet(newPet, db=connection){
  return db('pets').insert(newPet, 'id')
}

function getReviews(db=connection){
  return db('reviews').select()
}

function addReview(newReview, db=connection){
  return db('reviews').insert(newReview)
}