import React from 'react';
import ReactDOM from 'react-dom/client';
import Cart from './Cart';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('cart-list'));
root.render(
  <React.StrictMode>
    <Cart />
  </React.StrictMode>
);
reportWebVitals();
