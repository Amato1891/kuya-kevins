import React from 'react';
import ReactDOM from 'react-dom/client';
import { hydrateRoot } from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// JS imports
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css'; // For animate.css

// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';



const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  // Prerendered by react-snap — hydrate the existing HTML
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Development or first load without prerendering
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
