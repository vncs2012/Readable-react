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
        console.log(id)
        return (
            <div className=' justify-content-md-center'>
                <Post id={id} />

                <ul className='dashboard-list'>
                    <li key='new'>
                        <NewComentario id={id} />
                    </li>
                    {idsComentario.map((c) => (
                        <li key={c}>
                            <span>{c}-{id}</span>
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
        idsComentario: !comentario[id] ? [] : Object.keys(comentario[id])
            .sort((a, b) => comentario[b].timestamp >= comentario[a].timestamp)
    }
}


export default connect(mapStateToProps)(PostPage) 