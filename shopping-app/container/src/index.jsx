import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from './Container';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
reportWebVitals();
