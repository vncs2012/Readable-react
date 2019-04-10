import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
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
        
        const { text,author } = this.state
        const { dispatch, id } = this.props
        const dados = {
            timestamp: '',
            body :text,
            author:author,
            parentId: id
        }
        console.log(dados)
        //   dispatch(handleAddTweet(text, id))

        this.setState(() => ({
            text: '',
            author:'',
            toHome: id ? false : true,
        }))
    }
    render() {

        const { text, toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }
        return (

            <div>
                <h5 className='center'>New Comentario</h5>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='enter your name' className='from'></input>
                    <textarea
                        placeholder="What are you thinking about post?"
                        //value={text}
                        // onChange={this.handleChange}
                        className='textarea'
                        maxLength={280}
                    />
                    <button
                        className='btn'
                        type='submit'
                    >
                        Submit
            </button>
                </form>
            </div>)
    }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(NewComentario);
