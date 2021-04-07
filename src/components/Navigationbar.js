import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';
import {ProductConsumer} from '../contextApi';

export default class Navigationbar extends Component {
    render() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#">Market place</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/">Products</Link>
                    </Nav>
                    <Nav>
                        <ProductConsumer>
                            {(value) => {
                            return <Link style={{color: "mediumseagreen"}} eventKey={2} to="/cart">
                                MyCart ({value.cart.length})
                            </Link>
                            }}
                        </ProductConsumer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
}