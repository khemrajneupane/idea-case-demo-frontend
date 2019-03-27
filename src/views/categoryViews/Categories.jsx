import React, { Component } from 'react';
import AddCategory from '../../components/categoryComponents/AddCategory';


export default class Categories extends Component {

  render() {

    return (
      <div className="App">
        <div>
          <h2>My Categories</h2>
              <AddCategory />              
        </div>
      </div>
    );
  }
}
