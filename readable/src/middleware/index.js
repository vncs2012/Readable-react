// import checker from './checker'
import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger'

const loggerMiddleware = createLogger()
export default applyMiddleware(
    thunk
   // ,loggerMiddleware
   ,logger
)