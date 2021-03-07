import React from "react";
import CheckoutProduct from "../../checkout/CheckoutProduct";
import { useStateValue } from "../../react-context-api/StateProvider";
import { Link } from "react-router-dom";
import Order from "./Order";
import "./Orders.css";

function Orders() {
  const [{ basket }, dispatch] = useStateValue();

  let clearBasket = () => {
    dispatch({
      type: "CLEAR_BASKET",
    });
  };

  return (
    <div>
      <div className="orders">
        <div className="orders__container">
          <h1>Your order</h1>
          <div className="orders__products">
            {basket.map((item) => (
              <Order
                title={item.title}
                price={item.price}
                id={item.id}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
          <Link to="/">
            <button onClick={clearBasket}>Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Orders;
