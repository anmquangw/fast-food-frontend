import { FoodType as FoodTypeConstants } from "../constants";
import { initState } from "./initState.reducers";

export default function FoodTypeReducer(state = initState, action: any) {
  switch (action.type) {
    case FoodTypeConstants.default.FOOD_TYPE_REQUEST:
      return {
        ...initState,
        datas: state.datas,
        data: state.data,
        isLoading: true,
      };
    case FoodTypeConstants.default.FOOD_TYPE_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action?.payload?.data?.error,
      };

    case FoodTypeConstants.default.GET_FOOD_TYPES_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        datas: action.payload.data,
      };
    case FoodTypeConstants.default.GET_FOOD_TYPE_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        datas: state.datas,
        data: action.payload.data,
      };
    case FoodTypeConstants.default.CREATE_FOOD_TYPE_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        datas: [...state.datas, action.payload.data],
        data: action.payload.data,
      };
    case FoodTypeConstants.default.UPDATE_FOOD_TYPE_SUCCESS:
      return {
        ...initState,
        datas: state.datas.map((item: any) =>
          item._id === action.payload.data._id ? action.payload.data : item
        ),
      };
    case FoodTypeConstants.default.DELETE_FOOD_TYPE_SUCCESS:
      return {
        ...initState,
        message: action?.payload?.message,
        datas: state.datas.filter(
          (item: any) => item._id !== action.payload.data._id
        ),
      };

    default:
      return state;
  }
}
