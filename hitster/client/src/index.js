import React from 'react';
import ReactDOM from 'react-dom/client';
import './ClientApp';
import App from './App.jsx'
import './index.css'
// import reportWebVitals from './reportWebVitals';

// Create the root element for React 18 and later
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main application inside StrictMode
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// Measure performance if needed
// reportWebVitals(console.log);
