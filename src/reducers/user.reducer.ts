import { User as UserConstants } from "../constants";
import { initState } from "./initState.reducers";

export default function UserReducer(state = initState, action: any) {
  switch (action.type) {
    // List
    case UserConstants.GET_ALL_USERS_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case UserConstants.GET_ALL_USERS_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: action.payload.data,
      };
    case UserConstants.GET_ALL_USERS_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Detail
    case UserConstants.GET_USER_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case UserConstants.GET_USER_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: [action.payload.data, ...state.data],
      };
    case UserConstants.GET_USER_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Create
    case UserConstants.CREATE_USER_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case UserConstants.CREATE_USER_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: [action.payload.data, ...state.data],
      };
    case UserConstants.CREATE_USER_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Update
    case UserConstants.UPDATE_USER_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case UserConstants.UPDATE_USER_SUCCESS:
      return {
        ...initState,
        errorMessage: "",
        data: state.data.map((item: any) =>
          item.id === action.payload.data.id ? action.payload.data : item
        ),
      };
    case UserConstants.UPDATE_USER_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Delete
    case UserConstants.DELETE_USER_REQUEST:
      return {
        ...initState,
        isLoading: true,
        data: state.data,
      };
    case UserConstants.DELETE_USER_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: state.data.filter(
          (item: any) => item._id !== action.payload.data._id
        ),
      };
    case UserConstants.DELETE_USER_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
