import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter ,   Routes, Route } from "react-router-dom";
import Header from './basic_e_commerce/Header';
import Footer from './basic_e_commerce/Footer';
import Home from './basic_e_commerce/Home';
import Products from './basic_e_commerce/Products';
import Cart from './basic_e_commerce/Cart';

function App() {
  return (
    <BrowserRouter>
    
    <Header />
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/products' element={<Products/>} />
      <Route exact path='/cart' element={<Cart/>} />
    </Routes> 
    <Footer />

    </BrowserRouter> 
  );
}

export default App;

