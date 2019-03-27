import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from '../views/categoryViews/Categories';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CategoryListFilteredBudget from '../components/categoryComponents/CategoryListFilteredBudget';

import RandomItem from '../components/categoryComponents/RandomItem';
import CategoryList from '../components/categoryComponents/CategoryList';
import CategoryDetails from '../views/categoryViews/CategoryDetails';

class Navigation extends Component {
   
    render() { 
        return (
            <div>


                        
        <BrowserRouter baseline>
          <div>

          <div className="row">
                        <Link className="navbar-brand" to="/CategoryList"><Button className="primary" active>CategoryList</Button></Link>
                        <Link className="navbar-brand" to="/AddCategories"><Button className="primary" active>AddCategories</Button></Link>
                        <Link className="navbar-brand" to="/RandomItem"><Button className="primary" active>RandomItem</Button></Link>
                        <Link className="nav-link" to="/CategoryListFilteredBudget"><Button className="primary" active>HighBudget</Button></Link>
                        <Link className="nav-link" to="/Category/:id"><Button className="primary" active>CategoryDetails</Button></Link>
                </div>
              <Switch>
                <Route path="/CategoryList" component={CategoryList} />
                <Route path="/AddCategories" component={Categories} />
                <Route path="/RandomItem" component={RandomItem} />
                <Route path="/CategoryListFilteredBudget" component={CategoryListFilteredBudget} />
                <Route path="/Category/:id" component={CategoryDetails} />
              </Switch>
          </div>
        </BrowserRouter>
            </div>

        )
    }
}

export default Navigation;