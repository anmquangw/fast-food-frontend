import { User as UserConstants } from "../constants";
import { initState } from "./initState.reducers";

export default function UserReducer(state = initState, action: any) {
  switch (action.type) {
    case UserConstants.default.USER_REQUEST:
      return {
        ...initState,
        datas: state.datas,
        data: state.data,
        isLoading: true,
      };
    case UserConstants.default.USER_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    case UserConstants.default.GET_USERS_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        datas: action.payload.data,
      };
    case UserConstants.default.GET_USER_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        datas: [action.payload.data, ...state.datas],
      };
    case UserConstants.default.CREATE_USER_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        datas: [action.payload.data, ...state.datas],
      };
    case UserConstants.default.UPDATE_USER_SUCCESS:
      return {
        ...initState,
        errorMessage: "",
        datas: state.datas.map((item: any) =>
          item.id === action.payload.data.id ? action.payload.data : item
        ),
      };
    case UserConstants.default.DELETE_USER_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        datas: state.datas.filter(
          (item: any) => item._id !== action.payload.data._id
        ),
      };

    default:
      return state;
  }
}
