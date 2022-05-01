export const REQUEST_REVIEWS = 'REQUEST_REVIEWS'
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const SHOW_ERROR = 'SHOW_ERROR'
export const ADD_REVIEW = 'ADD_REVIEW'

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




