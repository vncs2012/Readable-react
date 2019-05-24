import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { MdAdd } from "react-icons/md/index";
import { Nav, Navbar  } from 'react-bootstrap';

class Menu extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/react">React</Nav.Link>
            <Nav.Link href="/redux">Redux</Nav.Link>
            <Nav.Link href="/udacity">Udacity</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/add">
              <MdAdd style={{ float: "right" }} className='tweet-icon' />Novo Post
          </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
function mapStateToProps({ categoria }) {
  return {
    categoria
  }
}
export default withRouter(connect(mapStateToProps)(Menu))