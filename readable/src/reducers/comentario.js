import { RECEIVE_COMENTARIO } from '../actions/comentario'

export default function comentario(state = {}, action) {
    switch (action.type) {
        case RECEIVE_COMENTARIO:
            return {
                ...state,
                ...action.comentario
            }
        default:
            return state
    }
}