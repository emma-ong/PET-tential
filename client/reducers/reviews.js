import { RECEIVE_REVIEWS } from "../actions";

const initialState = []

function reviews (state = initialState, action) {
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.payload

    default:
      return state
  }
}

export default reviews