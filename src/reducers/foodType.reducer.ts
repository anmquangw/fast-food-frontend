import { FoodType as FoodTypeConstants } from "../constants";
import { initState } from "./initState.reducers";

export default function FoodTypeReducer(state = initState, action: any) {
  switch (action.type) {
    // List
    case FoodTypeConstants.GET_ALL_FOOD_TYPES_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case FoodTypeConstants.GET_ALL_FOOD_TYPES_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: action.payload.data,
      };
    case FoodTypeConstants.GET_ALL_FOOD_TYPES_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Detail
    case FoodTypeConstants.GET_FOOD_TYPE_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case FoodTypeConstants.GET_FOOD_TYPE_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: [action.payload.data, ...state.data],
      };
    case FoodTypeConstants.GET_FOOD_TYPE_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Create
    case FoodTypeConstants.CREATE_FOOD_TYPE_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case FoodTypeConstants.CREATE_FOOD_TYPE_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: [action.payload.data, ...state.data],
      };
    case FoodTypeConstants.CREATE_FOOD_TYPE_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Update
    case FoodTypeConstants.UPDATE_FOOD_TYPE_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case FoodTypeConstants.UPDATE_FOOD_TYPE_SUCCESS:
      return {
        ...initState,
        errorMessage: "",
        data: state.data.map((item: any) =>
          item.id === action.payload.data.id ? action.payload.data : item
        ),
      };
    case FoodTypeConstants.UPDATE_FOOD_TYPE_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Delete
    case FoodTypeConstants.DELETE_FOOD_TYPE_REQUEST:
      return {
        ...initState,
        isLoading: true,
        data: state.data,
      };
    case FoodTypeConstants.DELETE_FOOD_TYPE_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: state.data.filter(
          (item: any) => item._id !== action.payload.data._id
        ),
      };
    case FoodTypeConstants.DELETE_FOOD_TYPE_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
