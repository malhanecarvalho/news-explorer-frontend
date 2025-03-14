import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { CurrentUserProvider } from './contexts/NewsExplorerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CurrentUserProvider>
    <App />
    </CurrentUserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
