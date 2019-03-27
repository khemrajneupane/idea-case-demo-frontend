import React, { Component } from 'react';
import CategoryItem from '../../components/CategoryItem';

class CategoryDetails extends Component {
    render() {
        return (
            <div>
                <h1>Each Category</h1>
                <CategoryItem item = {{name : "Khem", budget: 1000}}/>
            </div>
        );
    }
}

export default CategoryDetails;