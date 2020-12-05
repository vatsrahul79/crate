//Imports
import axios from "axios";
import { query } from "gql-query-builder";

// App Imports
import { routeApi } from "../../../setup/routes";

export const USER_GET_LIST_REQUEST = "USER_GET_LIST_REQUEST";
export const USER_GET_LIST_RESPONSE = "USER_GET_LIST_RESPONSE";
export const USER_GET_LIST_FAILURE = "USER_GET_LIST_FAILURE";

// Action

// Get List of Users

export function getList(isLoading = true) {
  return (dispatch) => {
    dispatch({
      type: USER_GET_LIST_REQUEST,
      error: null,
      isLoading,
    });

    return axios
      .post(
        routeApi,
        query({
          operation: "users",
          fields: ["id", "name", "email", "createdAt", "updatedAt"],
        })
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: USER_GET_LIST_RESPONSE,
            error: null,
            isLoading: false,
            list: response.data.data.users,
          });
        } else {
          console.error(response);
        }
      })
      .catch((error) => {
        dispatch({
          type: USER_GET_LIST_FAILURE,
          error: "Some Error occured.Please try again",
          isLoading: false,
        });
      });
  };
}
