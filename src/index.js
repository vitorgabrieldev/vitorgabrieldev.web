import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importa arquivos globais
import './assets/scss/app.scss';
import './assets/js/app.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);