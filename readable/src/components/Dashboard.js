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
                        {this.props.location.pathname === '/' ? (
                            this.props.postsIds.filter((p) => !p.deleted).map((c) => (
                                <li key={c.id}>
                                    <Post id={c.id} />
                                </li>
                            ))) : (
                                this.props.postsIds.filter((f) => '/' + f.category === this.props.location.pathname && !f.deleted).map((c) => (
                                    <li key={c.id}>
                                        <Post id={c.id} />
                                    </li>
                                )))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ posts }) {
    return {
        postsIds: Object.values(posts)
    };
}

export default connect(mapStateToProps)(Dashboard)