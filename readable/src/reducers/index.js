import { combineReducers } from 'redux'
import categoria from './categoria'
import posts from './posts'
import comentario from './comentario'
import {loadingBarReducer} from 'react-redux-loading'

export default combineReducers({
    categoria,
    posts,
    comentario,
    loadingBar: loadingBarReducer,
})