import { SHOW_ERROR } from "../actions";

const intialError = ''

function errorMessage(state = intialError, action) {
  switch(action.type) {
    case SHOW_ERROR:
      return action.errorMessage

    default:
      return state
  }
}

export default errorMessage