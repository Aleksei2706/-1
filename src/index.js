import React, { StrictMode } from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider  } from 'react-redux';
import { store } from "./store/index";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <StrictMode>
  <App/>
   </StrictMode>
   </Provider>
)
reportWebVitals();




