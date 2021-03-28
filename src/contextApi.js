import React, { Component } from 'react'

class ProductProvider extends Component {
    state ={
        products: dataProducts,
        detailProduct : prodInDetails,
        Cart: []
    } 

    getItem = (id) => {
        constproduct = this.state.products.find(item => item.id === id)
    }
    
    handleDetails = (id) => {
        const product = this.getItem(id);
        this.setState({
            detailProduct:product
        })
    }
    
    addToCart = (id) => {
        let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { products : tempProduct, Cart : [ ...this.state.Cart, product]}
        })
    }
    
    handleDetails = () => {
        
    }
    
    makeTotal = () => {
        let subtotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const total = subtotal;
        this.setState
    } 

    render(){
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                addToCart : this.addToCart
            }}>
                
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider , ProductConsumer};