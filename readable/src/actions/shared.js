import { getInitialData } from '../utils/api'
import { receiveCategoria } from '../actions/categoria'
import { receivePosts } from '../actions/posts'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ categoria, posts }) => {
                dispatch(receivePosts(posts))
                dispatch(receiveCategoria(categoria))
                dispatch(hideLoading())
            })
    }
}