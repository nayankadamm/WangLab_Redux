import React from 'react';
import './style/tailwind.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import App from './App';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Profile from './components/Profile';
import AboutLab from './components/AboutLab';
import Userhist from './components/Userhist';
import NavB from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { Container } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Container>
    <Router>
        
        <NavB/>
       
        
        <Routes>
         <Route path='/' element={<App/>}/>
         <Route path='/profile' element={<Profile/>}/>
         <Route path='/userhistory' element={<Userhist/>}/>
         <Route path='/about' element={<AboutLab/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    
          </Container>
      
    </Provider>
    
  </React.StrictMode>
);


