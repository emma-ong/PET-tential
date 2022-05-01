import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers/index'

//Compose - is used when you want to pass multiple store enhancers to the store
//Store enhancers are higher order functions that add some extra functionality to the store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store