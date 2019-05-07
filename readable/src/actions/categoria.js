import { showLoading, hideLoading } from 'react-redux-loading'
import { getAllCategoria } from '../utils/api'
export const RECEIVE_CATEGORIA = 'RECEIVE_CATEGORIA'

export function receiveCategoria(categoria) {
    return {
        type: RECEIVE_CATEGORIA,
        categoria,
    }
}
export function handleInitialCategoria() {
    return (dispatch) => {
        dispatch(showLoading())
        return getAllCategoria()
            .then(categoria => {
                dispatch(receiveCategoria(categoria))
                dispatch(hideLoading())
            })
    }
}