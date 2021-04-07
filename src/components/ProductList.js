import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    render() {
        return (
            <div className="container">
                <div><h1>Healthy foods</h1></div>
                <div className="row">
                    <Product.Consumer>
                        {
                                (value)=> {
                                    return value.products.map(product => {
                                        return<Product key  {product.id} product ={product}/>
                                    })
                                }
                        }
                    </Product.Consumer>
                </div>
            </div>
            )
    }
}
