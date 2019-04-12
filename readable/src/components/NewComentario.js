import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

// import { Container } from './styles';

class NewComentario extends Component {

    state = {
        text: '',
        author: '',
        toHome: false,
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { text, author } = this.state
        const {  id } = this.props
        const dados = {
            timestamp: '',
            body: text,
            author: author,
            parentId: id
        }
        console.log(dados)
        //   dispatch(handleAddTweet(text, id))

        this.setState(() => ({
            text: '',
            author: '',
            toHome: id ? false : true,
        }))
    }
    render() {

        const { text, toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }
        return (

            <div className="card">
                <div className="card-body">
                    <h5 className='card-title'>New Comentario</h5>
                    <form className='new-tweet' onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input className="form-control form-control-sm" type="text" placeholder='enter your name'></input>
                        </div>
                        <textarea className="form-control" 
                            placeholder="What are you thinking about post?"
                            //value={text}
                            // onChange={this.handleChange}
                            className='textarea'
                            maxLength={280}
                        />
                        <button type="button" className="btn btn-primary">Primary</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(NewComentario);
