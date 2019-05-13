const api = "http://localhost:3001/"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
}

export function getAllCategoria() {
  return fetch(`${api}categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
}
function getAllPosts() {
  return fetch(`${api}posts`, { method: 'GET', headers })
    .then(res => res.json())
    .then(data => data)
}
export function getComentarios(id) {
  return fetch(api + 'posts/' + id + '/comments',
    { method: 'get', headers })
    .then(res => res.json())
    .then(data => data)
}
export function _saveComentario(obj) {
  return fetch(api + 'comments',
    { method: 'post', headers, body: JSON.stringify(obj) })
    .then(res => res.json())
    .then(data => data)
}
export function _EditComentario(obj, id) {
  return fetch(api + 'comments/' + id,
    { method: 'PUT', headers, body: JSON.stringify(obj) })
    .then(res => res.json())
    .then(data => data)
}
export function _postLike(id, option) {
  return fetch(api + 'posts/' + id,
    { method: 'POST', headers, body: JSON.stringify({ option }) })
    .then(res => res.json())
    .then(data => data)
}
export function _savePost(obj) {
  return fetch(api + 'posts',
    { method: 'POST', headers, body: JSON.stringify(obj) })
    .then(res => res.json())
    .then(data => data)
}

export function _comentarioLike(id, option) {
  return fetch(api + 'comments/' + id,
    { method: 'POST', headers, body: JSON.stringify({ option }) })
    .then(res => res.json())
    .then(data => data)
}
export function delComentarios(id) {
  return fetch(api + 'comments/' + id,
    { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data)
}
export function _delPost(id) {
  return fetch(api + 'posts/' + id,
    { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data)
}
export function getInitialData() {
  return Promise.all([
    getAllCategoria(),
    getAllPosts(),
  ]).then(([categoria, posts]) => ({
    categoria,
    posts,
  }))
}
