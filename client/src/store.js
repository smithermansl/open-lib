import { applyMiddleware, createStore } from 'redux'
import root from './reducers'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'
let middleware

if (process.env.NODE_ENV !== 'production') {
  middleware = applyMiddleware(thunkMiddleware.withExtraArgument(axios), loggingMiddleware)
} else {
  middleware = applyMiddleware(thunkMiddleware.withExtraArgument(axios))
}

export default createStore(
  root,
  middleware
)
