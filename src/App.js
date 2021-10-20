/* eslint-disable no-unused-vars */
import react, { useState } from "react";
import { Route, Router, Switch } from "react-router";

import Nav from "./Components/Nav";
import Category from "./Pages/Category";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";

function App() {
  const [Cart, setCart] = useState([]);
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/category" component={Category} />
        <Route path="/category/:id" component={Category} />
        <Route>
          <h1>404 page not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
