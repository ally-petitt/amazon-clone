import React, { useEffect } from "react";
import "./App.css";
import Header from "./header/Header";
import Home from "./homepage/Home";
import Checkout from "./checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login/Login";
import { auth } from "./firebase/Firebase";
import { useStateValue } from "./react-context-api/StateProvider";
import Payment from "./payment_page/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51ISPqzKhpgDIapXEaKzvBCYduyKI5atktVOAtwEcNgtiYrc9dW0REP8chVeNAtN3AWlKIzcxS3AuRVy16Su4zRcT003j0bnlGR"
);

function App() {
  const [{}, dispatch] = useStateValue();
  //if array is left blank, it will only load once when the app runs
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
