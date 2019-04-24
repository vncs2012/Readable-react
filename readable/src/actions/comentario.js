import { getComentarios,_saveComentario,_comentarioLike } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_COMENTARIO = 'RECEIVE_COMENTARIO'
export const ADD_COMENTARIO = 'ADD_COMENTARIO'
export const COMENTARIO_LIKE = 'COMENTARIO_LIKE'

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
export function handleGetComentarios(id) {
    return (dispatch, getState) => {
        dispatch(showLoading())
        return getComentarios(id)
            .then((comentario) => dispatch(receiveComentario(comentario,id)))
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