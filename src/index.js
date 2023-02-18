import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);