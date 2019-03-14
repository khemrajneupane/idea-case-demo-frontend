import React, { Component } from "react";
import { connect } from "react-redux";
import { addCategory } from "../../actions/category";
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newAddCategory: {
        id: null,
        name: null,
        budget: null
      }
    };
  }
  inputChanged = event => {
    this.setState({
      newAddCategory: {
        ...this.state.newAddCategory,
        [event.target.name]: event.target.value
      }
    });
  };
  buttonPressed = () => {
    const category = this.state.newAddCategory;
    this.props.addLocalCategory(category);
    //to reset fields to empty
    this.setState({
      newAddCategory: {
        id: "",
        name: "",
        budget: ""
      }
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>Id: </label>
          <input type="number" name="id" onChange={this.inputChanged} value={this.state.newAddCategory.id}/>
          <label>Name: </label>
          <input type="text" name="name" onChange={this.inputChanged}  value={this.state.newAddCategory.name}/>
          <label>Budget: </label>
          <input type="number" name="budget" onChange={this.inputChanged}  value={this.state.newAddCategory.budget}/>
        </form>
        <Button type="button" onClick={this.buttonPressed}>
          SAVE
        </Button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  addLocalCategory: category => {
    dispatch(addCategory(category));
  }
});
//addCategory
export default connect(
  null,
  mapDispatchToProps
)(AddCategory);
