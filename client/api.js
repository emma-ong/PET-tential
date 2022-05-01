import request from 'superagent'
import {requestReviews, receiveReviews, addReview, showError} from '../client/actions'

// require('dotenv').config()
// const apiKey = process.env.API_KEY


const serverURL = 'http://localhost:3000/api/v1'

// *** EXAMPLE ***
// export function getWelcome() {
//   return request.get(`${serverURL}/welcome`).then((response) => response.body)
// }
// ***   ***   ***
export function getPets() {
  return request.get(`${serverURL}/pets`).then((response) => response.body)
}

export function addPet(newPet) {
  return request
  .post(`${serverURL}/pets`)
  .send(newPet)
  .then((response) => response.body)
}

export function getDogFacts(){
  return request
  .get(`${serverURL}/dogFacts`)
  .then((response) => response.body)
}
export function postReviews(form) {
  return (dispatch) => {
    return request
      .post(`${serverURL}/reviews`)
      .send(form)
      .then(review => {
        dispatch(addReview(review))
      })
      .catch(err => dispatch(showError(err.message)))
  }
}

export function fetchReviews () {
  return (dispatch) => {
    //dispatching action creator
    dispatch(requestReviews())
    //once action creator dispatched, do the following:
    return request 
      .get(`${serverURL}/reviews`)
      .then(res => {
        //dispatch action creator with content retrieved
        //now fetchReviews needs to be called somewhere (e.g. a component)
        dispatch(receiveReviews(res.body))
        return null
      })
      .catch(err => dispatch(showError(err.message)))
  }
}


