import React from 'react';
import ReactDOM from 'react-dom';
import App from './jsx/App';
import reportWebVitals from './js/reportWebVitals';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
