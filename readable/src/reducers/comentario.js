import { RECEIVE_COMENTARIO, COMENTARIO_LIKE } from '../actions/comentario'

export default function comentario(state = {}, action) {
    switch (action.type) {
        case RECEIVE_COMENTARIO:
            return {
                ...state,
                ...action.comentario
            }
        case COMENTARIO_LIKE:
            return {
                ...state,
                ...action.comentario
            }
        default:
            return state
    }
}