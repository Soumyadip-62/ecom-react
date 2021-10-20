/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-undef */
import React, { useState, useEffect, useReducer } from "react";
import Checkout from "./Checkout";
import CategoryFilter from "../Components/CategoryFilter";
import Filtering from "../Components/Filtering";

import AddCart from "../Components/AddCart";

function reducer(state, action) {
  if (action.type === "Add") {
    return [...state, action.id];
  }
  return state;
}
const initialState = [];
const Category = ({ match }) => {
  // const item = ;
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(state));
  }, [state]);
  const [item, setItem] = useState(require("../Database/products.json"));
  const [filter, Setfilter] = useState("");
  const [isfilter, setisfilter] = useState(null);
  console.log(item);
  const filtertxt = match.params.id;
  const [Cart, setCart] = useState([]);
  const addtoCart = (product) => {
    const exist = Cart.find((x) => x.id === product.id);
    if (exist) {
      return exist;
    } else {
      setCart([{ ...Cart }, { ...product }]);
    }
  };
  console.log(Cart);
  console.log(match);
  const onRadiochangeAll = (ev) => {
    Setfilter(ev.target.value);
    Setok(true);
    setisfilter(false);
  };
  const onRadiochangeFil = () => {
    Setok(false);
    setisfilter(true);
  };
  const [ok, Setok] = useState(true);
  console.log(filter);
  const productsFilter = item.filter((item) => {
    if (item.categoryId === filtertxt) {
      return item;
    }
  });
  const itemFilter = item.filter((item) => {
    if (item.inStock === true) {
      return item;
    }
  });
  console.log(itemFilter);
  const renderall = (item) => (
    <>
      {ok ? (
        <div className="products">
          {item.map((item) => (
            <div key={item.id}>
              <CategoryFilter products={item} />
              <button
                className={item.inStock ? "btn-vis" : "btn-hid"}
                onClick={() => {
                  dispatch({ type: "Add", id: item });
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="products">
          {itemFilter.map((itemFilter) => (
            <div key={itemFilter.id}>
              <CategoryFilter products={itemFilter} />
              <button
                className={itemFilter.inStock ? "btn-vis" : "btn-hid"}
                onClick={() => {
                  dispatch({ type: "Add", id: itemFilter });
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
  const renderProduct = (productsFilter) => (
    <>
      <div className="products">
        {productsFilter.map((productsFilter) => (
          <div key={productsFilter.id}>
            <CategoryFilter products={productsFilter} />
            <button
              className={productsFilter.inStock ? "btn-vis" : "btn-hid"}
              onClick={() => {
                dispatch({ type: "Add", id: productsFilter });
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );

  console.log(ok);

  return (
    <div>
      <div>
        <label>
          Filter by Stock
          <input
            id="filterbyDelivery"
            checked={isfilter}
            type="radio"
            value="delivery"
            onChange={onRadiochangeFil}
          ></input>
        </label>
        <label>
          Show all Products
          <input
            id="filterbyStock"
            checked={!isfilter}
            type="radio"
            value="inStock"
            onChange={onRadiochangeAll}
          ></input>
        </label>
      </div>
      {match.path === "/category/:id"
        ? renderProduct(productsFilter)
        : renderall(item)}
    </div>
  );
};

export default Category;
