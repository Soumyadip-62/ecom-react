/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React from "react";
import CategoryFilter from "../Components/CategoryFilter";
import Doge from "../Images/Doge.png";
const Checkout = () => {
  const product = JSON.parse(localStorage.getItem("Cart"));
  console.log(product);
  const Cart = (product) => {
    return (
      <div>
        {product.map((product) => (
          <div key={product.id}>
            <CategoryFilter products={product} />
          </div>
        ))}
      </div>
    );
  };
  const empty = () => {
    return (
      <div>
        <img src={Doge} alt="not found" />
        <h3> First add something to cart</h3>
      </div>
    );
  };

  return (
    <div className="products">
      {product.length !== 0 ? Cart(product) : empty()}
    </div>
  );
};

export default Checkout;
