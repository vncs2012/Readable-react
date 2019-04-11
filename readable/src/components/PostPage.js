import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetComentarios } from '../actions/Comments'
import Post from './Post'
import Comentario from './Comentario'
import NewComentario from './NewComentario'

class PostPage extends Component {
    componentDidMount() {
        this.props.dispatch(handleGetComentarios(this.props.id))
    }
    render() {
        const { id, comentariosIds } = this.props
        console.log(this.propsW)
        return (
            <div className=' justify-content-md-center'>
                <Post id={id} />
                <NewComentario />

                <Comentario />
            </div>
        )
    }
}

function mapStateToProps({ Post }, props) {
    const { id } = props.match.params
    const {comentario}= props
    return {
        id
    }
}


export default connect(mapStateToProps)(PostPage) 