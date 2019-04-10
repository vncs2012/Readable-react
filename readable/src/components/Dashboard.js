import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
class Dashboard extends Component {
    render() {
        return (
            <div>
                <h3 className='center'>You TimeLine</h3>
                <div className='row justify-content-md-center'>

                    <ul className='dashboard-list'>
                        {this.props.postsIds.map((id) => (
                            <li key={id}>
                                <Post id={id} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}



function mapStateToProps({ posts }) {
    return {
        postsIds: Object.keys(posts)
            .sort((a, b) => posts[b].timestamp > posts[a].timestamp)
    };
}

export default connect(mapStateToProps)(Dashboard)