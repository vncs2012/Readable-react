import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'
import { Redirect } from 'react-router-dom'
import { handleInitialCategoria } from '../actions/categoria'

class NewTweet extends Component {
    state = {
        body: '',
        title:'',
        author:'',
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
    handleSubmit = (e) => {
        e.preventDefault()

        const { text } = this.state
        const { dispatch, id } = this.props

        dispatch(handleAddTweet(text, id))

        this.setState(() => ({
            text: '',
            toHome: id ? false : true,
        }))
    }
    render() {
        const { body, toHome, author,title } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }
        console.log(this.props)
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className='card-title'>Novo Post</h5>
                    <form className='new-tweet' onSubmit={this.handleSubmitEdit}>
                        <div className="form-group">
                            <input className="form-control form-control-sm" defaultValue={title} onChange={this.handleChangeTitle} type="text" placeholder='Titulo do Post'></input>
                        </div>
                        <div className="form-group">
                            <input className="form-control form-control-sm" defaultValue={author} onChange={this.handleChangeAuthor} type="text" placeholder='Autor do Post'></input>
                        </div>
                        <div className="form-group">
                            <select className="form-control form-control-sm" placeholder='Autor do Post'>
                                <option>Selecione uma Categoria</option>
                                <option>Teste</option>
                                <option>Teste</option>
                                <option>Teste</option>
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
      //  categoria = this.dispatch(handleInitialCategoria())
    }
}
export default connect(mapStateToProps)(NewTweet)