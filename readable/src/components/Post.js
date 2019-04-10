import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatPost, formatDate } from '../utils/helpers'
import { TiArrowBackOutline, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti/index'
import { Link, withRouter } from 'react-router-dom'

class Post extends Component {
    handleLike = (e) => {
        e.preventDefault()

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
                    <h5 className="card-title"><strong>{title}</strong></h5>
                    <h6 className="card-subtitle mb-2 text-muted">author: {author} -
                     <Link to={`/${category}/posts`}>{category}</Link> -
                    {formatDate(timestamp)}</h6>
                    <p className="card-text">{body}</p>
                    <div className='card-link'>
                        <Link to={`/posts/${id}`}>
                            <TiArrowBackOutline className='tweet-icon' />
                        </Link>
                        <span>{commentCount !== 0 ? commentCount : 0}</span>
                        <TiArrowSortedUp className='tweet-icon' />
                        <TiArrowSortedDown className='tweet-icon' />
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