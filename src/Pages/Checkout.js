/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React from "react";
import CategoryFilter from "../Components/CategoryFilter";

const Checkout = () => {
  const product = JSON.parse(localStorage.getItem("Cart"));
  console.log(product);
  return (
    <div className="products">
      {product.map((product) => (
        <div key={product.id}>
          <CategoryFilter products={product} />
        </div>
      ))}
    </div>
  );
};

export default Checkout;
