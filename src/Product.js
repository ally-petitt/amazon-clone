import React from 'react'
import './Product.css'
import star from './star.svg';

function Product({ title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><img src={star} alt={rating + " stars"} className="product__star"/></p>
                    ))}
                </div>
            </div>
            <img src={image} alt="product"/>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
