import React, { Component } from 'react';
import './App.css';
import Categories from './views/categoryViews/Categories';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CategoryListFilteredBudget from './components/categoryComponents/CategoryListFilteredBudget';
import Navigation from './navigation/Navigation';
import RandomItem from './components/categoryComponents/RandomItem';
import CategoryList from './components/categoryComponents/CategoryList';
class App extends Component {

  render() {
    return (
      <div className="App" style = {{marginLeft:150}}>
        
        <BrowserRouter baseline>
          <div>

            <Navigation />
              <Switch>
                <Route path="/CategoryList" component={CategoryList} />
                <Route path="/addCategories" component={Categories} />
                <Route path="/RandomItem" component={RandomItem} />
                <Route path="/CategoryListFilteredBudget" component={CategoryListFilteredBudget} />
              </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
