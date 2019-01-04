import { applyMiddleware, createStore } from 'redux'
import root from './reducers'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

export default createStore(
  root,
  applyMiddleware(loggingMiddleware, thunkMiddleware.withExtraArgument(axios))
)
