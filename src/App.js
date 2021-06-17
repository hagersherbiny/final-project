import React from 'react';
//import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import { productData } from './components/Products/data';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading= ' Choose your favorite' data = {productData}/>
      <Footer/>
    </Router>
  );
}

export default App;
