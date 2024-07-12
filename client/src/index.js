import React from 'react';
import './style/tailwind.css'
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>
);


