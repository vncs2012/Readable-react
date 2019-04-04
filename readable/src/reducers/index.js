import { combineReducers } from 'redux'
import categoria from './categoria'
import posts from './posts'
import {loadingBarReducer} from 'react-redux-loading'

export default combineReducers({
    categoria,
    posts,
    loadingBar: loadingBarReducer,
})