import { RECEIVE_COMENTARIO } from '../actions/Comments'

export default function posts(state = {}, action) {
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