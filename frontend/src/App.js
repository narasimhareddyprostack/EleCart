import logo from "./logo.svg";
import Navbar from "./modules/layout/components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Signup from "./modules/user/components/signup/Signup";
import Home from "./modules/layout/components/home/Home";
import Login from "./modules/user/components/login/Login";
import Profile from "./modules/user/components/profile/Profile";
import Laptops from "./modules/product/components/laptops/Laptops";
import { Provider } from "react-redux";
import store from "./redux/store";

//Testing

import "./App.css";
import Upload from "./modules/product/components/upload/Upload";
import Watches from "./modules/product/components/watches/Watches";
import Mobiles from "./modules/product/components/mobiles/Mobiles";
import ProductDetails from "./modules/product/components/details/ProductDetails";
import Cart from "./modules/order/components/Cart";

let App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/user/login" component={Login}></Route>
            <Route exact path="/user/signup" component={Signup}></Route>
            <Route exact path="/orders/cart" component={Cart}></Route>

            <Route exact path="/product/upload" component={Upload}></Route>
            <Route exact path="/product/watches" component={Watches}></Route>
            <Route exact path="/product/laptops" component={Laptops}></Route>
            <Route exact path="/product/mobiles" component={Mobiles}></Route>
            <Route exact path="/product/:id" component={ProductDetails}></Route>
          </Switch>
        </Router>
      </Provider>
    </React.Fragment>
  );
};

export default App;
