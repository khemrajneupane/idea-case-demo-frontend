import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchAllCategoriesFilteredByBudgetLimit, deleteCategory, fetchAllCategories } from '../../actions/category';
import CategoryListItem from './CategoryListItem';
class CategoryListFilteredBudget extends Component {
    componentDidMount() {
        /*this.setState({
          Categories: FetchTestCategories()
        });
        */
        this.props.categoriesFetchAll();
      }
      itemDeleted = (id) => {
        this.props.deleteRequest(id);
          
      };
      categoriesFilteredForBudgetLimit = () => {

        const originalList = this.props.categoriess.categoryist;
    
        const filteredList = this.props.categoriess.selectedIds;
    
        var filteredListArray = [];
    
        for (var i = 0; i < originalList.length; i++) {
    
          for (var j = 0; j < filteredList.length; j++) {
    
            if (originalList[i].id === filteredList[j]) {
    
              filteredListArray.push(originalList[i]);
    
            }
    
          }
    
    
        }
        return filteredListArray;
    
      }
      
      render() {
        return (
          <div>
            <h4>List of Expensive Categories</h4>
            <ol>
              {this.categoriesFilteredForBudgetLimit().map((item,index) => (
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
        dispatch(fetchAllCategoriesFilteredByBudgetLimit());
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
  )(CategoryListFilteredBudget)

