import { getComentarios,_saveComentario } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_COMENTARIO = 'RECEIVE_COMENTARIO'
export const ADD_COMENTARIO = 'ADD_COMENTARIO'

function receiveComentario(comentario) {
    return {
        type: RECEIVE_COMENTARIO,
        comentario,
    }
}
function saveComentario(comentario) {
    return {
        type: ADD_COMENTARIO,
        comentario,
    }
}

export function handleGetComentarios(id) {
    return (dispatch, getState) => {
        dispatch(showLoading())
        return getComentarios(id)
            .then((comentario) => dispatch(receiveComentario(comentario)))
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