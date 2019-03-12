import React, { Component } from 'react';
import './App.css';
import Categories from './views/categoryViews/Categories';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Categories />
      </div>
    );
  }
}

export default App;
