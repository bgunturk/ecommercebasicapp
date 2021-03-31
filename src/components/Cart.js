import React, { Component } from 'react';
import ProductList from './ProductList';
import {Button, Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { dataData } from '../Data';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductList.Consumer>
                    { value => {
                        if (value.Cart.length > 0) {
                            return(
                            <div>
                                <h1>Food</h1>
                                <div className="container-fluid text-center">
                                    <div className="row">
                                        <div className="col-10 col-lg2">
                                            <strong>Food</strong>
                                        </div>
                                        <div className="col-10 col-lg2">
                                            <strong>Section</strong>
                                        </div>
                                        <div className="col-10 col-lg2">
                                            <strong>Price</strong>
                                        </div>
                                        <div className="col-10 col-lg2">
                                            <strong>Quantity</strong>
                                        </div>
                                        <div className="col-10 col-lg2">
                                            <strong>Remove Item</strong>
                                        </div>
                                        <div className="col-10 col-lg2">
                                            <strong>Total</strong>
                                        </div>
                                    </div>
                                </div>
                                {value.Cart.map(cart => {
                                return (
                                    <div className="container-fluid text-center">
                                        <div className="row">
                                            <div className="col-10 col-lg2">
                                                <img style={{ width: '6rem', height:'4rem'}} src={dataData.img} className="img-fluid"/>
                                            </div>
                                            <div className="col-10 col-lg2">
                                                {dataData.title}
                                            </div>
                                            <div className="col-10 col-lg2">
                                                {dataData.price}
                                            </div>
                                            <div className="col-10 col-lg2">
                                                <input size="sm" className="qtyminus" value='-' onClick={()=> value.decrement(dataData.id)}/>
                                                {dataData.count}
                                                <input size="sm" className="qtyminus" value='-' onClick={()=> value.decrement(dataData.id)}/>
                                            </div>
                                            <div className="col-10 col-lg2">
                                                <Button variant="secondary" onClick= {() => value.removeItem(dataData.id)} size="sm">Remove</Button>
                                            </div>
                                            <div className="col-10 col-lg2">
                                                {dataData.total}
                                            </div>
                                        </div>
                                    </div>
                                )
                            } )}
                            </div>
                            )
                        } 
                    }
                    }
                </ProductList.Consumer>
            </section>
        )
    }
}
