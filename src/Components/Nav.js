import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const product = JSON.parse(localStorage.getItem("Cart"));

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          E-Com
        </a>

        <div class="navbar" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <Link to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/category">Category</Link>
            </li>
            <li class="nav-item">
              <Link to="/checkout">Cart : {product.length} </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
