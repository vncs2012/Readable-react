import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatComentario, formatDate } from '../utils/helpers'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti/index'
import { withRouter } from 'react-router-dom'

class Comentario extends Component {


  handleLike = (e) => {
    e.preventDefault()

  }
  render() {
    const { comentario } = this.props
    if (comentario === null) {
      return <p>This Comment doesn't existd</p>
    }
    const {
      id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted
    } = comentario
    return (
      <div className="card" >
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">
            author: {author} - {formatDate(timestamp)}</h6>
          <p className="card-text">{body}</p>
          <div className='card-link'>
            <TiArrowSortedUp className='tweet-icon' />
            <TiArrowSortedDown className='tweet-icon' />
            <span>{voteScore !== 0 ? voteScore : 0}</span>
          </div>
        </div>
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
export default withRouter(connect(mapStateToProps)(Comentario))