import React, { Component } from "react";
import CategoryItem from "../CategoryItem";
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class CategoryListItem extends Component {
  render() {
    return (
      <li>
        <CategoryItem item={this.props.item} />
        <Button onClick={()=>this.props.itemDeleted(this.props.item.id)}> Delete </Button>
      </li>
    );
  }
}

export default CategoryListItem;