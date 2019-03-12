import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryItem from "../CategoryItem";


class RandomItem extends Component {
  render() {
    let randomCategory = { id: null, name: null, budget: null };
    const categoryist = this.props.categoriess.categoryist;

    if (categoryist && categoryist.length > 0) {
      let randomIndex = Math.floor(Math.random() * categoryist.length);
      randomCategory = categoryist[randomIndex];
    }
    return (
      <div>
        <CategoryItem item={randomCategory} />
      </div>
    );
  }
}
const mapStateToprops = state => ({
  categoriess: state.categoriess
});
export default connect(
  mapStateToprops,
  null
)(RandomItem);