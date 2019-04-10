import { RECEIVE_POSTS, RECEIVE_POSTS_ID } from '../actions/posts'

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
        default:
            return state
    }
}