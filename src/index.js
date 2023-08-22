import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// it render twice
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);