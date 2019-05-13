import { RECEIVE_POSTS, RECEIVE_POSTS_ID, POSTS_LIKE, POSTS_INSERT,DEL_POST } from '../actions/posts'

export default function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return {
                ...state,
                ...action.posts
            }
        case RECEIVE_POSTS_ID:
            return {
                ...state,
                [action.posts.id]: action.posts,
            }
        case POSTS_LIKE:
            return {
                ...state,
                ...action.posts,
            }
        case POSTS_INSERT:
            return {
                ...state,
                ...action.posts,
            }
            case DEL_POST:
            return {
                ...state,
                ...action.posts,
            }
        default:
            return state
    }
}