import React from 'react';
import ReactDOM from 'react-dom/client';
import Products from './Products';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('product-list'));
root.render(
  <React.StrictMode>
    <Products />
  </React.StrictMode>
);

reportWebVitals();
