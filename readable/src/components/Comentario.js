import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatComentario, formatDate } from '../utils/helpers'
import { MdThumbUp, MdThumbDown, MdClear, MdBrush } from 'react-icons/md/index'
import { handleComentarioLike, handleGetComentarios, handleDelComentarios, handleEditComentario } from '../actions/comentario'
import { handleInitialData } from '../actions/shared'


class Comentario extends Component {
  state = {
    edit: false,
    body: '',
    author: '',
  }
  handleChangeText = (e) => {
    const body = e.target.value

    this.setState(() => ({
      body
    }))
  }
  handleChangeAuthor = (e) => {
    const author = e.target.value

    this.setState(() => ({
      author
    }))
  }

  handleLike = (e, opt) => {
    e.preventDefault()
    const { dispatch, idC, idp } = this.props
    console.log(opt, '---', idC)
    dispatch(handleComentarioLike(idC, opt))
    dispatch(handleGetComentarios(idp))
  }
  handleDel = (e) => {
    e.preventDefault()
    const { dispatch, idC, idp } = this.props
    dispatch(handleDelComentarios(idC))
    dispatch(handleInitialData())
    dispatch(handleGetComentarios(idp))
  }
  handleEdit = (e) => {
    e.preventDefault()
    const { body, author } = this.props
    this.setState({
      edit: true,
      body: body,
      author: author
    })
  }
  handleEditCanc = (e) => {
    e.preventDefault()
    const { body, author } = this.props
    this.setState({
      edit: false,
      body,
      author
    })
  }
  handleSubmitEdit = (e) => {
    e.preventDefault()

    const { dispatch, idC, id } = this.props
    const dados = {
      timestamp: Date.now(),
      body: this.state.body
    }
    dispatch(handleEditComentario(dados, idC))
    dispatch(handleInitialData())
    dispatch(handleGetComentarios(id))
    dispatch(handleGetComentarios(id))
    this.setState(() => ({
      body: '',
      author: '',
      edit: false,
    }))
  }

  render() {
    const { comentario } = this.props
    if (comentario === null) {
      return <p>This Comment doesn't existd</p>
    }
    const { timestamp, body, author, voteScore } = comentario
    return (
      <div>
        {this.state.edit === false ? (
          <div className="card" >
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">
                author: {author} - {formatDate(timestamp)}
                <MdClear style={{ float: "right" }} className='tweet-icon' onClick={(e) => this.handleDel(e)} />
                <MdBrush style={{ float: "right" }} className='tweet-icon' onClick={(e) => this.handleEdit(e)} />
              </h6>
              <p className="card-text">{body}</p>
              <div className='card-link'>
                <MdThumbUp className='tweet-icon' onClick={(e) => this.handleLike(e, 'upVote')} />
                <MdThumbDown className='tweet-icon' onClick={(e) => this.handleLike(e, 'downVote')} />
                <span>{voteScore !== 0 ? voteScore : 0}</span>
              </div>
            </div>
          </div>
        ) : (
            <div>
              <div className="card">
                <div className="card-body">
                  <h5 className='card-title'>Edite Comentario  <MdClear style={{ float: "right" }} className='tweet-icon' onClick={(e) => this.handleEditCanc(e)} /></h5>
                  <form className='new-tweet' onSubmit={this.handleSubmitEdit}>
                    <div className="form-group">
                      <input className="form-control form-control-sm" defaultValue={author} onChange={this.handleChangeAuthor} type="text" placeholder='enter your name'></input>
                    </div>
                    <textarea className="form-control"
                      placeholder="What are you thinking about post?"
                      defaultValue={body}
                      className='textarea'
                      onChange={this.handleChangeText}
                    />
                    <button type="submit" className="btn btn-primary">Editar</button>
                  </form>
                </div>
              </div>
            </div>
          )}
      </div>
    )
  }
}
function mapStateToProps({ comentario }, { idC }) {
  return {
    comentario: comentario[idC]
      ? formatComentario(comentario[idC])
      : null
  }
}
export default connect(mapStateToProps)(Comentario)