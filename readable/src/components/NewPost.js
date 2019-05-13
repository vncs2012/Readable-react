import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { handleSalvePost } from '../actions/posts'
import { Redirect } from 'react-router-dom'
import { generateUID } from '../utils/helpers'

class NewPost extends Component {
    state = {
        body: '',
        title: '',
        author: '',
        categoria: '',
        toHome: false,
    }
    handleChangeBody = (e) => {
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
    handleChangeTitle = (e) => {
        const title = e.target.value

        this.setState(() => ({
            title
        }))
    }
    handleChangeCategoria = (e) => {
        const categoria = e.target.value
        console.log(categoria)
        this.setState(() => ({
            categoria
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { body, title, author, categoria } = this.state
        const { dispatch } = this.props
        const dados = {
            id: generateUID(),
            title: title,
            timestamp: Date.now(),
            body: body,
            author: author,
            category: categoria
        }
        console.log(dados)
        dispatch(handleSalvePost(dados))
        dispatch(handleInitialData())
        this.setState(() => ({
            body: '',
            title: '',
            author: '',
            category: '',
            toHome: true,
        }))
    }
    render() {
        const { body, toHome, author, title } = this.state
        const { categoria } = this.props

        if (toHome === true) {
              return <Redirect to='/' />
        }
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className='card-title'>Novo Post</h5>
                    <form className='new-tweet' onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input className="form-control form-control-sm" defaultValue={title} onChange={this.handleChangeTitle} type="text" placeholder='Titulo do Post'></input>
                        </div>
                        <div className="form-group">
                            <input className="form-control form-control-sm" defaultValue={author} onChange={this.handleChangeAuthor} type="text" placeholder='Autor do Post'></input>
                        </div>
                        <div className="form-group">
                            <select className="form-control form-control-sm" onChange={this.handleChangeCategoria} >
                                <option>Selecione uma Categoria</option>
                                {categoria.map((c) => (
                                    <option key={c.path} value={c.path}>{c.name}</option>
                                ))}
                            </select>
                        </div>
                        <textarea className="form-control"
                            placeholder="What are you thinking about post?"
                            defaultValue={body}
                            className='textarea'
                            onChange={this.handleChangeBody}
                        />
                        <button type="submit" className="btn btn-primary">Postar</button>
                    </form>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ categoria }) {
    return {
        categoria: Object.values(categoria)
    }
}
export default connect(mapStateToProps)(NewPost)