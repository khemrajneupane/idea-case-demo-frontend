import React, { Component } from "react";
import { connect } from "react-redux";
import { addCategory } from "../../actions/category";

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
  };

  render() {
    return (
      <div>
        <form>
          <label>Id: </label>
          <input type="number" name="id" onChange={this.inputChanged} />
          <label>Name: </label>
          <input type="text" name="name" onChange={this.inputChanged} />
          <label>Budget: </label>
          <input type="number" name="budget" onChange={this.inputChanged} />
        </form>
        <button type="button" onClick={this.buttonPressed}>
          SAVE
        </button>
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
