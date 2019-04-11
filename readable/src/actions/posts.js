import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POSTS_ID = 'RECEIVE_POSTS_ID'

export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts,
    }
}

export function receivePost(post) {
    return {
        type: RECEIVE_POSTS_ID,
        post,
    }
}