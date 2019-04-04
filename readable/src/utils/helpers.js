export function formatDate(timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('pt-BR')
  return d.toLocaleDateString() + ' ' + time.substr(0, 5) +":"+time.slice(-2)
}

export function formatPost(post) {
  const { id, timestamp, title, body, author, category, voteScore,commentCount} = post

  return {
    id, timestamp, title, body, author, category, voteScore,commentCount
  }

}