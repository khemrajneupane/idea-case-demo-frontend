import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigation extends Component {
    render() { 
        return (
            <div>
            <div className="row" style={{marginLeft:400}}>
                
                    <Link className="navbar-brand" to="/"></Link>
                
               
                <div className="card" style={{marginRight:25}}>
                    <Link className="nav-link" to="/CategoryListFilteredBudget"><Button className="primary" active> CategoryListFilteredBudget </Button></Link>
                </div>
                
            </div>
            </div>

        )
    }
}

export default Navigation;