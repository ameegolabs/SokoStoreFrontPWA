import React from 'react';
import './App.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Seller from './components/Seller';
import Features from './components/Features';
import Details from './components/Details';
import Navbar from "./components/Navbar";
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="app">
        <Header/>
        <Categories/>
        <Seller />
        <Features/>
        <Details />
        <Navbar />
    </div>
  );
}

export default App;
