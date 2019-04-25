import { getComentarios,_saveComentario,_comentarioLike,delComentarios } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_COMENTARIO = 'RECEIVE_COMENTARIO'
export const ADD_COMENTARIO = 'ADD_COMENTARIO'
export const COMENTARIO_LIKE = 'COMENTARIO_LIKE'
export const DEL_COMENTARIO = 'DEL_COMENTARIO'

function receiveComentario(comentario,id) {
    return {
        type: RECEIVE_COMENTARIO,
        comentario,
        id,
    }
}
function saveComentario(comentario) {
    return {
        type: ADD_COMENTARIO,
        comentario
    }
}
function comentarioLike(comentario) {
    return {
        type: COMENTARIO_LIKE,
        comentario,
    }
}
function comentarioDelete(comentario) {
    return {
        type: DEL_COMENTARIO,
        comentario,
    }
}
export function handleGetComentarios(id) {
    return (dispatch, getState) => {
        dispatch(showLoading())
        return getComentarios(id)
            .then((comentario) => dispatch(receiveComentario(comentario,id)))
            .then(() => dispatch(hideLoading()))
    }
}
export function handleDelComentarios(id) {
    return (dispatch,) => {
        dispatch(showLoading())
        return delComentarios(id)
            .then((comentario) => dispatch(comentarioDelete(comentario)))
            .then(() => dispatch(hideLoading()))
    }
}
export function handleAddComentario(obj){
    return (dispatch, getState) => {
        dispatch(showLoading())
        return _saveComentario(obj)
            .then((comentario) => dispatch(saveComentario(comentario)))
            .then(() => dispatch(hideLoading()))
    } 
}
export function handleComentarioLike(id, opt) {
    return (dispatch) => {
        dispatch(showLoading())
        return _comentarioLike(id, opt)
            .then((post) => dispatch(comentarioLike(post)))
            .then(() => dispatch(hideLoading()))
    }
}