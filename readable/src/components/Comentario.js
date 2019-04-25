import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatComentario, formatDate } from '../utils/helpers'
import { MdThumbUp, MdThumbDown,MdClear,MdBrush } from 'react-icons/md/index'
import { handleComentarioLike,handleGetComentarios,handleDelComentarios } from '../actions/comentario'
import { handleInitialData } from '../actions/shared'

class Comentario extends Component {
  state ={
    edit: false
  }
  handleLike = (e, opt) => {
    e.preventDefault()
    const { dispatch, idC ,idp} = this.props
    console.log(opt, '---', idC)
    dispatch(handleComentarioLike(idC, opt))
    dispatch(handleGetComentarios(idp))
  }
  handleDel = (e) => {
    e.preventDefault()
    const { dispatch, idC ,idp} = this.props
    dispatch(handleDelComentarios(idC))
    dispatch(handleInitialData())
    dispatch(handleGetComentarios(idp))
  }
  render() {
    const { comentario } = this.props
    if (comentario === null) {
      return <p>This Comment doesn't existd</p>
    }
    const { timestamp, body, author, voteScore
    } = comentario
    return (
      <div className="card" >
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">
            author: {author} - {formatDate(timestamp)}
            <MdClear style={{float: "right"}} className='tweet-icon' onClick={(e) =>this.handleDel(e)} />
            <MdBrush style={{float: "right"}} className='tweet-icon' />
          </h6>
          <p className="card-text">{body}</p>
          <div className='card-link'>
            <MdThumbUp className='tweet-icon' onClick={(e) =>this.handleLike(e,'upVote')} />
            <MdThumbDown className='tweet-icon' onClick={(e) =>this.handleLike(e,'downVote')} />
            <span>{voteScore !== 0 ? voteScore : 0}</span>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps({ comentario }, { idC, idp }) {
  return {
    comentario: comentario[idC]
      ? formatComentario(comentario[idC], idp)
      : null
  }
}
export default connect(mapStateToProps)(Comentario)