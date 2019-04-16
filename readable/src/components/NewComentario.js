import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { handleAddComentario } from '../actions/comentario'
import {generateUID} from '../utils/helpers'

// import { Container } from './styles';

class NewComentario extends Component {

    state = {
        text: '',
        author: '',
        toHome: false,
    }
    handleChangeText = (e) => {
        const text = e.target.value

        this.setState(() => ({
            text
        }))
    }
    handleChangeAuthor = (e) => {
        const author = e.target.value

        this.setState(() => ({
            author
        }))
    }


    handleSubmit = (e) => {
        e.preventDefault()

        const { text, author } = this.state
        const { dispatch,id } = this.props
        const dados = {
            id: generateUID(),
            timestamp: Date.now(),
            body: text,
            author: author,
            parentId: id
        }
        console.log(dados)
        dispatch(handleAddComentario(dados))

        this.setState(() => ({
            text: '',
            author: '',
            toHome: id ? false : true,
        }))
    }
    render() {
        const { text, toHome, author } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }
        return (

            <div className="card">
                <div className="card-body">
                    <h5 className='card-title'>New Comentario</h5>
                    <form className='new-tweet' onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input className="form-control form-control-sm" value={author} type="text" onChange={this.handleChangeAuthor} placeholder='enter your name'></input>
                        </div>
                        <textarea className="form-control"
                            placeholder="What are you thinking about post?"
                            value={text}
                            onChange={this.handleChangeText}
                            className='textarea'
                            maxLength={280}
                        />
                        <button type="submit" className="btn btn-primary">Primary</button>
                    </form>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ }, props) {
    const { id } = props
    return {
        id
    }
}
// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(NewComentario);
