import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { Container,Row,ListGroup,Col } from 'react-bootstrap';
class Dashboard extends Component {

    render() {
        return (
            <Container>
                <Row>
                <Col>
                <ListGroup variant="flush">
                        {this.props.location.pathname === '/' ? (
                            this.props.postsIds.filter((p) => !p.deleted).map((c) => (
                                <ListGroup.Item key={c.id}>
                                    <Post id={c.id} />
                                </ListGroup.Item>
                            ))) : (
                                this.props.postsIds.filter((f) => '/' + f.category === this.props.location.pathname && !f.deleted).map((c) => (
                                    <ListGroup.Item  key={c.id}>
                                        <Post id={c.id} />
                                    </ListGroup.Item>
                                )))
                        }
                    </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({ posts }) {
    return {
        postsIds: Object.values(posts).sort((a, b) => {
            return a.timestamp > b.timestamp ? -1 : a.timestamp < b.timestamp ? 1 : 0;
        })
    };
}

export default connect(mapStateToProps)(Dashboard)