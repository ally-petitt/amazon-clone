import React from "react";
import star from "../../star.svg";
import "./Order.css";

function Order({ image, rating, title, price }) {
  return (
    <div className="order">
      <div className="order__container">
        <div className="order__imageContainer">
          <img src={image} alt="" />
        </div>
        <div className="order__info">
          <p>{title}</p>
          <small>$</small>
          <strong>{price}</strong>
          <div className="order__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <img src={star} alt="" className="orders__star" />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
