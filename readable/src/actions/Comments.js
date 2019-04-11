import { getComentarios } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_COMENTARIO = 'RECEIVE_COMENTARIO'

function receiveComentario(comentario) {
    return {
        type: RECEIVE_COMENTARIO,
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