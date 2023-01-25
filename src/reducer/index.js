import { combineReducers } from 'redux';

let initialState = {
  data: [],
  editData: null,
  viewData: {},
  viewBlog: {},
};
const credReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POST':
      return {
        ...state,
        data: action.payload,
      };

    case 'GET_EDIT_DATA_BY_ID':
      return {
        ...state,
        editData: action.payload,
      };

    case 'GET_DATA_TO_VIEW':
      return {
        ...state,
        viewData: action.payload,
      };
    case 'GET_BLOG_TO_VIEW':
      return {
        ...state,
        viewBlog: action.payload,
      };
  }

  return state;
};

export default combineReducers({ credReducer });
