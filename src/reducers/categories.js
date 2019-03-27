import ActionTypes from "../actions/ActionTypes";


//defining initial state:
const initialState = {
  isLoading: false,
  categoryist: [],
  categoryIdsFound: null,
  categoryCurrent: null,
  selectedIds:[]
};

export default function categoriess(state = initialState, action) {
  // console.log(action.type);
  switch (action.type) {
    //show all functions...
    case ActionTypes.CATEGORIES_ALL_REQ:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.CATEGORIES_ALL_OK:
      return {
        ...state,
        isLoading: false,
        categoryist: action.categoryist
      };
    case ActionTypes.CATEGORIES_ALL_X:
      return {
        ...state,
        isLoading: false
      };
    //ADD request types:
    case ActionTypes.CATEGORY_ADD_REQ:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.CATEGORY_ADD_OK:
      return {
        ...state,
        isLoading: false,
        //categoryist: [...state.categoryist, action.categoryist]
      };
    case ActionTypes.CATEGORY_ADD_X:
      return {
        ...state,
        isLoading: false
      };
    //delete request
    case ActionTypes.CATEGORY_DELETE_REQ:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.CATEGORY_DELETE_OK:
      return {
        ...state,
        /*categoryist: 
         state.categoryist.filter((item) => item.id !== action.id),*/
          isLoading:false,
        
      };
    case ActionTypes.CATEGORY_DELETE_X:
      return {
        ...state,
        isLoading: false
      };
      //Categories filter by budget limit
      case ActionTypes.CATEGORIES_FILTER_BY_BUDGET_LIMIT_FILTER_REQ:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.CATEGORIES_FILTER_BY_BUDGET_LIMIT_FILTER_OK:
      return {
        ...state,
        isLoading: false,
        selectedIds : action.selectedIds
        
        
      };
    case ActionTypes.CATEGORIES_FILTER_BY_BUDGET_LIMIT_FILTER_X:
      return {
        ...state,
        isLoading: false
      };
      
    case null:
      return state;
    default:
      return state;
  }
}