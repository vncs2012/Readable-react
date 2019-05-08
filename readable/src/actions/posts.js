import { _postLike, _savePost } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POSTS_ID = 'RECEIVE_POSTS_ID'
export const POSTS_LIKE = 'POSTS_LIKE'
export const POSTS_INSERT = 'POSTS_INSERT'

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
function postLike(post) {
    return {
        type: POSTS_LIKE,
        post,
    }
}
function postInsert(post) {
    return {
        type: POSTS_INSERT,
        post,
    }
}

export function handleSalvePost(opt) {
    return (dispatch) => {
        dispatch(showLoading())
        return _savePost(opt)
            .then((post) => dispatch(postInsert(post)))
            .then(() => dispatch(hideLoading()))
    }
}

export function handlePostLike(id,opt) {
    return (dispatch) => {
        dispatch(showLoading())
        return _postLike(id, opt)
            .then((post) => dispatch(postLike(post)))
            .then(() => dispatch(hideLoading()))
    }
}