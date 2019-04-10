import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'

class Nav extends Component {
  render() {
    const { categoria } = this.props

    if (categoria === null) {
      return <p>This Tweet doesn't existd</p>
    }
    return (
      <nav >
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink to='/' exact className="nav-link" activeClassName='active'>
              Home
          </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/react/posts' className="nav-link" activeClassName='active'>
              React
          </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/redux/posts' className="nav-link" activeClassName='active'>
              Redux
          </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/udacity/posts' className="nav-link" activeClassName='active'>
              Udacity
          </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
function mapStateToProps({ categoria }) {
  return {
    categoria
  }
}
export default withRouter(connect(mapStateToProps)(Nav))