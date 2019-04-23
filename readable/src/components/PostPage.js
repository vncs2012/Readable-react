import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import Comentario from './Comentario'
import NewComentario from './NewComentario'

import { handleGetComentarios } from '../actions/comentario'

class PostPage extends Component {
    state = {
        comentarios: []
    }
    componentDidMount() {
        this.props.dispatch(handleGetComentarios(this.props.id))
    }
 
    render() {
        const { id, idsComentario } = this.props
        return (
            <div className=' justify-content-md-center'>
                <Post id={id} />
                <ul className='dashboard-list'>
                    <li key='new'>
                        <NewComentario id={id} />
                    </li>
                    {idsComentario.map((c) => (
                        <li key={c.id}>
                            <span>{id}</span>
                            <Comentario idC={c.id} idp={id} />
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
        idsComentario: !Object.values(comentario).filter(f => f.parentId === id) ? [] : Object.values(comentario).filter(f => f.parentId === id) 
    }
}


export default connect(mapStateToProps)(PostPage) 