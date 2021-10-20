/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from "react";
import CategoryFilter from "./CategoryFilter";
const Filtering = ({ products, filter }) => {
  const item = products;
  const itemFilter = item.filter((item) => {
    if (filter === true) {
      return item;
    }
  });
  console.log(itemFilter);
  return (
    <div>
      <CategoryFilter products={itemFilter} />
    </div>
  );
};

export default Filtering;
