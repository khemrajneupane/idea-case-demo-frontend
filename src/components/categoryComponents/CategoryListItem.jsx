import React, { Component } from "react";
import CategoryItem from "../CategoryItem";
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
class CategoryListItem extends Component {
  render() {
    return (
      <li>
        <Link to={"/Category/"+this.props.item.id}>
        <CategoryItem item={this.props.item} />
        </Link>
        <span> {' '}</span>
        <Button type = "button" onClick={()=>this.props.itemDeleted(this.props.item.id)}> Delete </Button>
        
      </li>
    );
  }
}

export default CategoryListItem;