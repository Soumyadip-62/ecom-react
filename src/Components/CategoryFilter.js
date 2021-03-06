import React from "react";

const CategoryFilter = ({ products }) => {
  return (
    <div>
      <div className="center-img">
        <img src={products.thumbnail} alt="notfound" />
      </div>
      <h3>{products.name}</h3>
      <p className="price">
        Price : {products.price}
        {products.currency}
      </p>
      <p className={products.inStock ? "text-green" : "text-red"}>
        {products.inStock ? "in stock" : "Out of stock"}
      </p>
    </div>
  );
};

export default CategoryFilter;
