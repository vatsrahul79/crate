// Imports

import {
  USER_GET_LIST_REQUEST,
  USER_GET_LIST_RESPONSE,
  USER_GET_LIST_FAILURE,
} from "./actions";

// Users List

// Initial State

const usersInitState = {
  isLoading: false,
  error: null,
  list: [],
};

//State

export const users = (state = usersInitState, action) => {
  switch (action.type) {
    case USER_GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null,
      };

    case USER_GET_LIST_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list,
      };

    case USER_GET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
