import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllCategories, deleteCategory } from "../../actions/category";
import CategoryListItem from "./CategoryListItem";
//import 'bootstrap/dist/css/bootstrap.min.css';

//This CategoryList gets (mounts) all the object instances called in FetchTestCategories function
//later, it puts them in an unordered list.
class CategoryList extends Component {
  /* constructor(props) {
    super(props);
    this.state = { Categories: [] };
  }*/

  componentDidMount() {
    /*this.setState({
      Categories: FetchTestCategories()
    });
    */
    this.props.categoriesFetchAll();
  }
  itemDeleted = (id) => {
    this.props.deleteRequest(id);
      //this.props.categoriess.categoryist.map((values, id) => id)
    
    //console.log(this.props.categoriess.categoryist.map((values, id) => id));
  };
  render() {
    return (
      <div className="list-group">
        <h4>List of Categories</h4>
        <ol className="list-group-item">
          {this.props.categoriess.categoryist.map((item,index) => (
            <CategoryListItem
              key={index}
              item={item}
              itemDeleted={this.itemDeleted}
            />
          ))}
        </ol>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  categoriesFetchAll: () => {
    dispatch(fetchAllCategories());
  },
  deleteRequest: id => {
    dispatch(deleteCategory(id));
  }
});

const mapStateToProps = state => ({
  categoriess: state.categoriess
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);