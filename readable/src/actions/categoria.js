import { saveLikeToggle, saveTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_CATEGORIA = 'RECEIVE_CATEGORIA'

export function receiveCategoria(categoria) {
    return {
        type: RECEIVE_CATEGORIA,
        categoria,
    }
}