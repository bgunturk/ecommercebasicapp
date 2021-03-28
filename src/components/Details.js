import React, { Component } from 'react'
import Product from './Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Col, Row} from 'react-bootstrap';

export default class Details extends Component {
    render() {
        return (
            <Product.Consumer>
                {(value) => {
                    const {id, title, img, price, info, inCart, company} = value.detailProduct;
                    return (
                        <>
                        <div className="container">
                            <div className="col-10 mx-auto text-center">
                                <h1>Details</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 mx-auto col-md-4">
                                <img src={img} className="img-fluid"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 mx-auto col-md-4">
                                <h4>
                                    Model : {title}
                                </h4>
                                <h5>
                                    <strong>Price : <span>INR</span>{price}</strong>
                                </h5>
                                <p>Info :</p>
                                <div>
                                    <Link to = "/">Back</Link>
                                    <Button size="sm" disabled = {incart} onclick= {() => (value.addToCart(id))} variant="secondary">
                                        {inCart === true ? <span>In Cart</span> : <span>Add to Cart</span>}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </>
                    )
                }
                    
                }
            </Product.Consumer>
        )
    }
}
