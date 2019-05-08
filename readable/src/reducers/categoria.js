import { RECEIVE_CATEGORIA } from '../actions/categoria'

export default function comentario(state = {}, action) {
    switch (action.type) {
        case RECEIVE_CATEGORIA:
            return {
                ...state,
                ...action.categoria
            }
        default:
            return state
    }
}