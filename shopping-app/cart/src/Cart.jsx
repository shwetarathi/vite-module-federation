import React from "react";
import { faker } from "@faker-js/faker";

const Cart = () => {
  return (
    <div>
      <p>
      You have added items worth {faker.finance.amount({ min: 5, max: 10, dec: 2, symbol: '$' }) } in your cart!
      </p>
    </div>
  );
};

export default Cart;
