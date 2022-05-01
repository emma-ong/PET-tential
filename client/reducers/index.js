import { combineReducers } from 'redux'
import errorMessage from './errorMessage'
import reviews from './reviews'

export default combineReducers({
  errorMessage,
  reviews
})
