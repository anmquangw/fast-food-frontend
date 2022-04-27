import { Food as FoodConstants } from "../constants";
import { initState } from "./initState.reducers";

export default function FoodTypeReducer(state = initState, action: any) {
  switch (action.type) {
    case FoodConstants.default.FOOD_REQUEST:
      return {
        ...initState,
        datas: state.datas,
        isLoading: true,
      };
    case FoodConstants.default.FOOD_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action?.payload?.data?.error,
      };

    case FoodConstants.default.GET_FOODS_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        datas: action.payload.data,
      };
    case FoodConstants.default.GET_FOOD_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        datas: state.datas,
        data: state.datas.find(
          (item: any) => item._id === action.payload.data._id
        ),
      };
    case FoodConstants.default.CREATE_FOOD_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        datas: [action.payload.data, ...state.datas],
      };
    case FoodConstants.default.UPDATE_FOOD_SUCCESS:
      return {
        ...initState,
        datas: state.datas.map((item: any) =>
          item._id === action.payload.data._id ? action.payload.data : item
        ),
      };
    case FoodConstants.default.DELETE_FOOD_SUCCESS:
      return {
        ...initState,
        datas: state.datas.filter(
          (item: any) => item._id !== action.payload.data._id
        ),
      };

    default:
      return state;
  }
}
