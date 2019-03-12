import React, { Component } from "react";
import CategoryItem from "../CategoryItem";

class CategoryListItem extends Component {
  render() {
    return (
      <li>
        <CategoryItem item={this.props.item} />
        <button onClick={()=>this.props.itemDeleted(this.props.item.id)}>delete</button>
      </li>
    );
  }
}

export default CategoryListItem;