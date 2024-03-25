import React from "react";
import Products from 'products/productList';
import Cart from 'cart/cartList';

const Container = () => {
  return (
  <div>
    <h1>Shopping App</h1>
    <h2>Products list</h2>
    <Products/>
    <hr/>
    <Cart/>
  </div>
  )
};

export default Container;