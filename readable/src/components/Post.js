import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatPost, formatDate } from '../utils/helpers'
import { TiArrowBackOutline } from 'react-icons/ti/index'
import { Link, withRouter } from 'react-router-dom'
import { MdThumbUp, MdThumbDown, MdClear, MdBrush } from 'react-icons/md/index'
import { handlePostLike, handleDeletePost } from '../actions/posts'
import { handleInitialData } from '../actions/shared'
import EditPost from './EditPost'
import {Card } from 'react-bootstrap';

class Post extends Component {
    state = {
        edit: false
    }
    handleLike = (e, opt) => {
        e.preventDefault()
        const { dispatch, id } = this.props
        console.log(opt, '---', id)
        dispatch(handlePostLike(id, opt))
        dispatch(handleInitialData())
    }
    handleDel = (e) => {
        e.preventDefault()
        const { dispatch, id } = this.props
        dispatch(handleDeletePost(id))
        dispatch(handleInitialData())
    }
    handleEdit = (e) => {
        this.setState({
            edit: true
        })
    }
    handleCanc = (e) => {
        this.setState({
            edit: false
        })
    }
    render() {
        const { post } = this.props
        const { id, timestamp, title, body, author, category, voteScore, commentCount } = post
        console.log(post)
        return (
            <div>
                {this.state.edit === false ? (
                    <Card bg="light">
                        <Card.Header> {author} - <Link to={`/${category}`}>{category}</Link> - {formatDate(timestamp)}
                            <MdClear style={{ float: "right" }} className='tweet-icon' onClick={(e) => this.handleDel(e)} />
                            <MdBrush style={{ float: "right" }} className='tweet-icon' onClick={(e) => this.handleEdit(e)} />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {body}
                            </Card.Text>
                            <Link to={`/posts/${id}`}><TiArrowBackOutline className='tweet-icon' /><span>{commentCount !== 0 ? commentCount : 0}</span></Link>&nbsp;&nbsp; 
                            <Card.Link href={`/posts/${id}`}><MdThumbUp className='tweet-icon' onClick={(e) => this.handleLike(e, 'upVote')} values='te' /></Card.Link>
                            <Card.Link href={`/posts/${id}`}><MdThumbDown className='tweet-icon' onClick={(e) => this.handleLike(e, 'downVote')} values='te' /> <span>{voteScore !== 0 ? voteScore : 0}</span></Card.Link>
                        </Card.Body>                     
                    </Card>
                        
                    ) : (<div>
            <MdClear style={{ float: "right" }} className='tweet-icon' onClick={(e) => this.handleCanc(e)} />
            <EditPost category={category} title={title} body={body} author={author} id={id} />
        </div>)
    }
            </div >
        )
    }
}
function mapStateToProps({ posts }, { id }) {
console.log('map',id)
    const post = posts[id]
    return {
        post: post
            ? formatPost(post)
            : null
    }
}
export default withRouter(connect(mapStateToProps)(Post))