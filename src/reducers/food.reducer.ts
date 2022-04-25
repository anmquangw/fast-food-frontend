import { Food as FoodConstants } from "../constants";
import { initState } from "./initState.reducers";

export default function FoodTypeReducer(state = initState, action: any) {
  switch (action.type) {
    // List
    case FoodConstants.GET_ALL_FOODS_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case FoodConstants.GET_ALL_FOODS_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: action.payload.data,
      };
    case FoodConstants.GET_ALL_FOODS_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Detail
    case FoodConstants.GET_FOOD_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case FoodConstants.GET_FOOD_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: [action.payload.data, ...state.data],
      };
    case FoodConstants.GET_FOOD_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Create
    case FoodConstants.CREATE_FOOD_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case FoodConstants.CREATE_FOOD_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: [action.payload.data, ...state.data],
      };
    case FoodConstants.CREATE_FOOD_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Update
    case FoodConstants.UPDATE_FOOD_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case FoodConstants.UPDATE_FOOD_SUCCESS:
      return {
        ...initState,
        errorMessage: "",
        data: state.data.map((item: any) =>
          item.id === action.payload.data.id ? action.payload.data : item
        ),
      };
    case FoodConstants.UPDATE_FOOD_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Delete
    case FoodConstants.DELETE_FOOD_REQUEST:
      return {
        ...initState,
        isLoading: true,
        data: state.data,
      };
    case FoodConstants.DELETE_FOOD_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: state.data.filter(
          (item: any) => item._id !== action.payload.data._id
        ),
      };
    case FoodConstants.DELETE_FOOD_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
