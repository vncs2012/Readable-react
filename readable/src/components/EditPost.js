import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { handleEditPost } from '../actions/posts'

class NewPost extends Component {
    state = {
        body: '',
        title: ''
    }
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }
    handleChangeBody = (e) => {
        const body = e.target.value

        this.setState(() => ({
            body
        }))
    }
    handleChangeTitle = (e) => {
        const title = e.target.value

        this.setState(() => ({
            title
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { body, title } = this.state
        const { dispatch, id } = this.props
        const dados = {
            title: title,
            body: body,
        }
        dispatch(handleEditPost(dados, id))
        dispatch(handleInitialData())
        this.setState(() => ({
            body: '',
            title: ''
        }))
    }
    render() {
        const { categoria, category, title, author, id, body } = this.props

        return (
            <div className="card">
                <div className="card-body">
                    <h5 className='card-title'>Novo Post</h5>
                    <form className='new-tweet' onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input className="form-control form-control-sm" defaultValue={title} onChange={this.handleChangeTitle} type="text" placeholder='Titulo do Post'></input>
                        </div>
                        <div className="form-group">
                            <input className="form-control form-control-sm" defaultValue={author} disabled onChange={this.handleChangeAuthor} type="text" placeholder='Autor do Post'></input>
                        </div>
                        <div className="form-group">
                            <select className="form-control form-control-sm" disabled onChange={this.handleChangeCategoria} >
                                <option>Selecione uma Categoria</option>
                                {categoria.map((c) => (
                                    category === c.path ? <option key={c.path} value={c.path} defaultValue>{c.name}</option> : <option key={c.path} value={c.path}>{c.name}</option>
                                ))}
                            </select>
                        </div>
                        <textarea className="form-control"
                            placeholder="What are you thinking about post?"
                            defaultValue={body}
                            className='textarea'
                            onChange={this.handleChangeBody}
                        />
                        <button type="submit" className="btn btn-primary">Editar</button>
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