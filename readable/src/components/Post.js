import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatPost, formatDate } from '../utils/helpers'
import { TiArrowBackOutline } from 'react-icons/ti/index'
import { Link, withRouter } from 'react-router-dom'
import { MdThumbUp, MdThumbDown, MdClear, MdBrush } from 'react-icons/md/index'
import { handlePostLike } from '../actions/posts'
import { handleInitialData } from '../actions/shared'

class Post extends Component {
    handleLike = (e, opt) => {
        e.preventDefault()
        const { dispatch, id } = this.props
        console.log(opt, '---', id)
        dispatch(handlePostLike(id, opt))
        dispatch(handleInitialData())
    }
    render() {
        const { post } = this.props
        if (post === null) {
            return <p>This Tweet doesn't existd</p>
        }
        const {
            id, timestamp, title, body, author, category, voteScore, commentCount
        } = post
        return (
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title"><strong>{title}</strong>
                        <MdClear style={{ float: "right" }} className='tweet-icon' onClick={(e) => this.handleDel(e)} />
                        <MdBrush style={{ float: "right" }} className='tweet-icon' onClick={(e) => this.handleEdit(e)} />
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">author: {author} - <Link to={`/${category}/posts`}>{category}</Link> - {formatDate(timestamp)}</h6>
                    <p className="card-text">{body}</p>
                    <div className='card-link'>
                        <Link to={`/posts/${id}`}>
                            <TiArrowBackOutline className='tweet-icon' />
                        </Link>
                        <span>{commentCount !== 0 ? commentCount : 0}</span>
                        <MdThumbUp className='tweet-icon' onClick={(e) => this.handleLike(e, 'upVote')} values='te' />
                        <MdThumbDown className='tweet-icon' onClick={(e) => this.handleLike(e, 'downVote')} values='te' />
                        <span>{voteScore !== 0 ? voteScore : 0}</span>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ posts }, { id }) {

    const post = posts[id]
    return {
        post: post
            ? formatPost(post)
            : null
    }
}
export default withRouter(connect(mapStateToProps)(Post))