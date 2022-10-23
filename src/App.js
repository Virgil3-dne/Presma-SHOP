import React from 'react';
import './App.scss';

import Navbar from './components/Navbar/nav.jsx';
import Footer from './components/Footer/footer'

import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";

import { Provider } from "react-redux";
import store from "./store";

import { Routes, Route } from 'react-router-dom';


class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <Navbar />
          <Routes>
            <Route path='/'  element={<Products />}/>
            <Route path='/cart' element={<Basket />}/>
          </Routes>
        <Footer />
      </Provider>
    );
  }
}

export default App;

/*
<div className="">
<div className="">
  <Filter />
</div>
<div className="">
  <Basket />
</div>
</div>
*/