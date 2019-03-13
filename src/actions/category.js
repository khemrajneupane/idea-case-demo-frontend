import ActionTypes from "./ActionTypes";
//import {fetchTestCategories} from "../models/Test";
import API_ROOT from "../constants/AppConstants";
import axios from 'axios';

// ACTION CREATORS (Action object creator functions)
// ~ standard and only way to create each action object
export const categoriesAll_REQ = () => ({
  type: ActionTypes.CATEGORIES_ALL_REQ
});
export const categoriesAll_OK = categoryist => ({
  type: ActionTypes.CATEGORIES_ALL_OK,
  categoryist: categoryist
});
export const categoriesAll_X = () => ({
  type: ActionTypes.CATEGORIES_ALL_X
});

// Helper function, real action function?
// Helper function, real action function?
export function fetchAllCategories() { 
  return async (dispatch, getState) => {
      dispatch(categoriesAll_REQ());

      //const categoryList = //fetchTestCategories();  // from mock "Back-end"
      const ajaxRequest = {
          method:'get',
          url: API_ROOT + '/category/all'
      };

      axios(ajaxRequest)
      .then((response) => {
          dispatch(categoriesAll_OK(response.data));
      })
      .catch((error)=> {
          //console.log(error);
          dispatch(categoriesAll_X());
      })
      .then( () => {
              return {type:null};  // 'Empty' action object
      });             
      
  }
};

//make add function
export const categoriesAdd_REQ = () => ({
  type: ActionTypes.CATEGORY_ADD_REQ
});
export const categoriesAdd_OK = categoryist => ({
  type: ActionTypes.CATEGORY_ADD_OK,
  categoryist: categoryist
});
export const categoriesAdd_X = () => ({
  type: ActionTypes.CATEGORY_ADD_X
});
// Helper function, real action function?

export function addCategory(category) {
  return async (dispatch, getState) => {
    dispatch(categoriesAdd_REQ());
    const ajaxRequest = {
      method:'post',
      url: API_ROOT + '/addCategory',
      data : category,
      /*data: {
        id : Number(category.id),
        name : category.name,
        budget : Number(category.budget)
      }*/
    };
    axios(ajaxRequest)
    .then((response)=>{
      dispatch(fetchAllCategories());
      dispatch(categoriesAdd_OK());
      //dispatch(categoriesAdd_OK(response.data));
    })
      .catch((error)=>{
        console.log("Error : "+ error);
        dispatch(categoriesAdd_X());
    })
    .then(()=>{
      return {type:null};
    })
  };
}

// delete action and payloads

export const categoryDelete_REQ = () => ({
  type: ActionTypes.CATEGORY_DELETE_REQ
});
export const categoryDelete_OK = () => ({
  type: ActionTypes.CATEGORY_DELETE_OK,
  //id: id
});
export const categoryDelete_X = () => ({
  type: ActionTypes.CATEGORY_DELETE_X
});
//required deleteCategory function creation
/*export function deleteCategory(id) {
  return async (dispatch, getState) => {
    
    dispatch(categoryDelete_REQ());
    //const categoryist = fetchTestCategories();
    console.log(id);
    if (id) {//if all the category lists have id values then do following, just to check if the delete works

      dispatch(categoryDelete_OK(id));
    } else {
      dispatch(categoryDelete_X());
    }
  };
}*/
export function deleteCategory(thisId) {
  return async (dispatch, getState) => {
    console.log(thisId);
    dispatch(categoryDelete_REQ());
    const ajaxRequest = {
      method:'delete',
      url: API_ROOT + '/deleteCategory',
      params: {
        id :thisId
      }
    };
   axios(ajaxRequest)
   .then(()=>{
    dispatch(categoryDelete_OK());
    
   })
   .catch((error)=>{
    //console.log("Error : "+ error);
    dispatch(categoryDelete_X());
})
.then(()=>{
  return {type:null};
})
   
  };
}
/**FILTER BY BUDGET LIMIT */
export const categoriesFILTER_REQ = () => ({
  type: ActionTypes.CATEGORIES_FILTER_BY_BUDGET_LIMIT_FILTER_REQ
});
export const categoriesFILTER_OK = selectedIds => ({
  type: ActionTypes.CATEGORIES_FILTER_BY_BUDGET_LIMIT_FILTER_OK,
  selectedIds: selectedIds
});
export const categoriesFILTER_X = () => ({
  type: ActionTypes.CATEGORIES_FILTER_BY_BUDGET_LIMIT_FILTER_X
});

// Helper function, real action function?
// Helper function, real action function?
//export function fetchAllCategories() { 
  export function fetchAllCategoriesFilteredByBudgetLimit() { 
  return async (dispatch, getState) => {
      dispatch(categoriesFILTER_REQ());

      //const categoryList = //fetchTestCategories();  // from mock "Back-end"
      const ajaxRequest = {
          method:'get',
          url: API_ROOT + '/category/idsByBudgetLimit'
      };

      axios(ajaxRequest)
      .then((response) => {
        let selectedIds = response.data;
          dispatch(categoriesFILTER_OK(selectedIds));
      })
      .catch(()=> {
          //console.log("Error: "+ error);
          dispatch(categoriesFILTER_X());
      })
      .then( () => {
              return {type:null};  // 'Empty' action object
      });             
      
  }
};
