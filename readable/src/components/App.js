import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import Menu from './Menu'
import PostPage from './PostPage'
import NewPost from './NewPost'
import { Container} from 'react-bootstrap';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      
      <Container>
      <Router>
        <Fragment>
          <LoadingBar />
            <Menu />
            {this.props.loading === true
              ? null
              : <div>
                <Route path='/' exact    component={Dashboard} />
                <Route path='/posts/:id' component={PostPage} />
                <Route path='/react'     component={Dashboard} />
                <Route path='/udacity'   component={Dashboard} />
                <Route path='/redux'     component={Dashboard} />
                <Route path='/add'       component={NewPost} />
              </div>}
                 </Fragment>
      </Router>
      </Container>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)