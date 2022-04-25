import { Sale as SaleConstants } from "../constants";
import { initState } from "./initState.reducers";

export default function SaleReducer(state = initState, action: any) {
  switch (action.type) {
    // List
    case SaleConstants.GET_ALL_SALES_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case SaleConstants.GET_ALL_SALES_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: action.payload.data,
      };
    case SaleConstants.GET_ALL_SALES_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Detail
    case SaleConstants.GET_SALE_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case SaleConstants.GET_SALE_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: [action.payload.data],
      };
    case SaleConstants.GET_SALE_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Create
    case SaleConstants.CREATE_SALE_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case SaleConstants.CREATE_SALE_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: [action.payload.data, ...state.data],
      };
    case SaleConstants.CREATE_SALE_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Update
    case SaleConstants.UPDATE_SALE_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case SaleConstants.UPDATE_SALE_SUCCESS:
      return {
        ...initState,
        errorMessage: "",
        data: state.data.map((item: any) =>
          item.id === action.payload.data.id ? action.payload.data : item
        ),
      };
    case SaleConstants.UPDATE_SALE_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Delete
    case SaleConstants.DELETE_SALE_REQUEST:
      return {
        ...initState,
        isLoading: true,
        data: state.data,
      };
    case SaleConstants.DELETE_SALE_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: state.data.filter(
          (item: any) => item._id !== action.payload.data._id
        ),
      };
    case SaleConstants.DELETE_SALE_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
