import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter, Link } from 'react-router-dom'
import { MdAdd } from "react-icons/md/index";

class Nav extends Component {
  render() {
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
        <Link  to="/add">
          <MdAdd style={{ float: "right" }} className='tweet-icon' />
        </Link>
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