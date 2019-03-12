import React, { Component } from 'react';
import CategoryList from '../../components/categoryComponents/CategoryList';
import AddCategory from '../../components/categoryComponents/AddCategory';
import RandomItem from '../../components/categoryComponents/RandomItem';
import CategoryListFilteredBudget from '../../components/categoryComponents/CategoryListFilteredBudget';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from '../../navigation/Navigation';
export default class Categories extends Component {

  render() {
    /*return (
      <div>
        <h2>My Categories</h2>
        <AddCategory />
        <CategoryList />
        <RandomItem/>
        <CategoryListFilteredBudget />

      </div>
    );*/
    return (
      <div className="App">
        <div>
        <h2>My Categories</h2>
        <AddCategory />
        <CategoryList />
        <RandomItem/>
       

      </div>
        <BrowserRouter baseline>
          <div>

            <Navigation />
            <Switch>
             
              <Route path="/CategoryListFilteredBudget" component={CategoryListFilteredBudget} />
            </Switch>

          </div>
        </BrowserRouter>
       
      </div>
    );
  }
}