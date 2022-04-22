import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from "./serviceWorker";



ReactDOM.render(
  <Routes>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Routes>,
  document.getElementById('root')
);

serviceWorker.unregister();

