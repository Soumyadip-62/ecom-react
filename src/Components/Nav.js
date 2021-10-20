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
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
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
