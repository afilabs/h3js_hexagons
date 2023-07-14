import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MapBoxSvg from './components/MapBoxSingleHex';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root')
  
);
root.render(
  <React.StrictMode>
    <MapBoxSvg />
  </React.StrictMode>
);
reportWebVitals();