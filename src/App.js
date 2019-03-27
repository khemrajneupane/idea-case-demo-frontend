import React, { Component } from 'react';
import './App.css';

import Navigation from './navigation/Navigation';


class App extends Component {

  render() {
    return (
      <div className="App" style = {{marginLeft:150}}>
      <Navigation />
      

      </div>
    );
  }
}

export default App;
