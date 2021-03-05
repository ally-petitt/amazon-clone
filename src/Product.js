import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>Clean Code</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>star</p>
                    <p>star</p>
                    <p>star</p>
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51b7XbfMIIL.jpg" alt="product"/>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
