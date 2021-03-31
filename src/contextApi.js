import React, { Component } from 'react'

class ProductProvider extends Component {
    state ={
        products: dataProducts,
        detailProduct : prodInDetails,
        Cart: [],
        CartSubtotal : 0
    } 

    getItem = (id) => {
        constproduct = this.state.products.find(item => item.id === id)
        return product;
    }
    
    handleDetails = (id) => {
        const product = this.getItem(id);
        this.setState(() =>
            { return 
            {detailProduct:product}
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
    
    increment = (id) => {
        let tempProduct = [...this.state.products];
        const selectedProduct = tempCart.find(item => item.id === id);
        const product = tempProduct[index];
       
        product.count = product.count + 1;
        product.total = price.count * product.price;
        this.setState(() => {
            return { Cart: [...tempCart] }, () => {this.makeTotal()}
        })
    }

    decrement = (id) => {
        let tempProduct = [...this.state.Cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempProduct[index];
       
        product.count = product.count - 1;
        product.total = price.count * product.price;
        this.setState(() => {
            return { Cart: [...tempCart] }, () => {this.makeTotal()}
        })
    }
    
    makeTotal = () => {
        let subtotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const total = subtotal;
        this.setState(() => {
            return { product: tempProduct, Cart: [this.state.Cart, product]}
        })
    } 

    render(){
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                addToCart : this.addToCart,
                increment : this.increment,
                decrement: this.decrement,
                mateTotal: this.makeTotal
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider , ProductConsumer};