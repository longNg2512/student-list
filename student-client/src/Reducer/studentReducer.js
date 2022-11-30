import * as types from "../constant";

const DEFAULT_STATE = {
  isLoading: false,
  dataFetched: false,
  error: false,
  listStudent: [],
  activePage: 0,
  totalPage: 0,
  skip: 0,
};

const studentReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.PAGINATION_STUDENT_REQUEST:
    case types.DELETE_STUDENT_REQUEST:
    case types.SEARCH_PAGINATION_STUDENT_REQUEST:
    case types.ADD_STUDENT_REQUEST:
    case types.UPDATE_STUDENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        dataFetched: false,
        error: false,
      };
    case types.PAGINATION_STUDENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        listStudent: action.payload.listStudent,
        dataFetched: true,
        activePage: action.payload.activePage,
        totalPage: action.payload.totalPage,
        skip: action.payload.skip,
      };
    case types.SEARCH_PAGINATION_STUDENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        listStudent: action.payload.listStudent,
        dataFetched: true,
        activePage: action.payload.activePage,
        totalPage: action.payload.totalPage,
        skip: action.payload.skip,
        textSearchName: action.payload.textSearchName,
        textSearchGender: action.payload.textSearchGender,
      };
    case types.DELETE_STUDENT_SUCCESS:
    case types.ADD_STUDENT_SUCCESS:
    case types.UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataFetched: false,
        error: false,
      };
    case types.PAGINATION_STUDENT_FAILURE:
    case types.DELETE_STUDENT_FAILURE:
    case types.ADD_STUDENT_FAILURE:
    case types.UPDATE_STUDENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        dataFetched: false,
        error: true,
      };
    default:
      return state;
  }
};

export default studentReducer;
