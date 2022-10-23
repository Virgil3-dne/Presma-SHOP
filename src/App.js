import React from 'react';
import './App.scss';

import Navbar from './components/Navbar/nav.jsx';
import Footer from './components/Footer/footer'

import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";

import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
          <Navbar />
          <div className="row">
            <div className="col-md-8">
              <Filter />
              <hr />
              <Products />
            </div>
            <div className="col-md-4">
              <Basket />
            </div>
          </div>
          <Footer />
        </Provider>
    );
  }
}

export default App;
