export function formatDate(timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('pt-BR')
  return d.toLocaleDateString() + ' ' + time.substr(0, 5) + ":" + time.slice(-2)
}

export function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function formatPost(post) {
  const { id, timestamp, title, body, author, category, voteScore, commentCount } = post

  return {
    id, timestamp, title, body, author, category, voteScore, commentCount
  }

}
export function formatComentario(Comentario,idp) {
  const { id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted } = Comentario

  return {
    id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted
  }

}