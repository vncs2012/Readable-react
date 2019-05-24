import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import Comentario from './Comentario'
import NewComentario from './NewComentario'
import {ListGroup } from 'react-bootstrap';
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
            <div>
            <ListGroup variant="flush">
            <ListGroup.Item>
                <Post id={id} />
                </ListGroup.Item>
                <ListGroup.Item>
                        <NewComentario id={id} />
                        </ListGroup.Item>
                    {idsComentario.map((c) => (
                         <ListGroup.Item key={c.id}>
                            <Comentario idC={c.id} idp={id} />
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                </div>
        )
    }
}

function mapStateToProps({ comentario }, props) {
    const { id } = props.match.params
    return {
        id,
        idsComentario: !Object.values(comentario).filter(f => f.parentId === id) ? [] : Object.values(comentario).sort((a, b) => {
            return a.timestamp > b.timestamp ? -1 : a.timestamp < b.timestamp ? 1 : 0;
        }).filter(f => f.parentId === id && !f.deleted)
    }
}


export default connect(mapStateToProps)(PostPage) 