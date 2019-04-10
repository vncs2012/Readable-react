import { getPost } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POSTS_ID = 'RECEIVE_POSTS_ID'

export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts,
    }
}
export function handleGetPost(id) {
    return (dispatch, getState) => {
        const { id } = getState()
        dispatch(showLoading())
        return getPost(id)
            .then((post) => dispatch(receivePost(post)))
            .then(() => dispatch(hideLoading()))
    }
}
export function receivePost(post) {
    return {
        type: RECEIVE_POSTS_ID,
        post,
    }
}