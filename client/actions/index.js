export const REQUEST_REVIEWS = 'REQUEST_REVIEWS'
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const SHOW_ERROR = 'SHOW_ERROR'
export const ADD_REVIEW = 'ADD_REVIEW'
export const SET_USER = 'SET_USER'

export function setUser(user) {
  return {
    type: SET_USER,
    user,
  }
}


export function requestReviews () {
  return {
    type: REQUEST_REVIEWS,
  }
}

export function receiveReviews (payload) {
  return {
    type: RECEIVE_REVIEWS,
    payload
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage
  }
}

export function addReview(review) {
  return {
    type: ADD_REVIEW,
    payload: review
  }
}




