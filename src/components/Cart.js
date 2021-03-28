import React, { Component } from 'react';
import ProductList from './ProductList';
import {Button, Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductList.Consumer>
                    { value => {
                        if (value.Cart.length > 0) {
                            <div>
                                
                            </div>
                        } 
                    }
                    }
                </ProductList.Consumer>
            </section>
        )
    }
}
