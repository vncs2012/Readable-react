import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import Comentario from './Comentario'
import NewComentario from './NewComentario'

class PostPage extends Component {
    render() {
        const { id } = this.props
        return (
            <div>
                <Post id={id} />
                <NewComentario />
                <Comentario />
            </div>
        )
    }
}

function mapStateToProps({ Post }, props) {
    const { id } = props.match.params
    return {
        id
    }
}

export default connect(mapStateToProps)(PostPage) 