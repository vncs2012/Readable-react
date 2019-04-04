import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class TweetPage extends Component {
    render() {
        const { id } = this.props
        return (
            <div>
                <Post id={id} />
                
            </div>
        )
    }
}

function mapStateToProps({ Post }, props) {
    const { id } = props.match.params

    return {
        id
    }
}

export default connect(mapStateToProps)(TweetPage) 