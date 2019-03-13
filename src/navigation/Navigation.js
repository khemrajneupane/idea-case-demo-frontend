import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigation extends Component {
   
    render() { 
        return (
            <div>

                <div className="row">
                        <Link className="navbar-brand" to="/CategoryList"><Button className="primary" active>CategoryList</Button></Link>
                        <Link className="navbar-brand" to="/AddCategories"><Button className="primary" active>AddCategories</Button></Link>
                        <Link className="navbar-brand" to="/RandomItem"><Button className="primary" active>RandomItem</Button></Link>
                        <Link className="nav-link" to="/CategoryListFilteredBudget"><Button className="primary" active>HighBudget</Button></Link>
                </div>
            </div>

        )
    }
}

export default Navigation;