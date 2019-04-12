import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import Comentario from './Comentario'
import NewComentario from './NewComentario'

import { handleGetComentarios } from '../actions/comentario'

class PostPage extends Component {
    componentDidMount() {
        this.props.dispatch(handleGetComentarios(this.props.id))
    }
    render() {
        const { id, idsComentario } = this.props
        return (
            <div className=' justify-content-md-center'>
                <Post id={id} />
                
                <ul className='dashboard-list'>
                <li  key='new'>
                <NewComentario />
                </li>
                    {idsComentario.map((c) => (
                        <li key={c}>
                            <Comentario idC={c} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ comentario }, props) {
    const { id } = props.match.params
    return {
        id,
        idsComentario: Object.keys(comentario)
            .sort((a, b) => comentario[b].timestamp >= comentario[a].timestamp)
    }
}


export default connect(mapStateToProps)(PostPage) 