import { Order as OrderConstants } from "../constants";
import { initState } from "./initState.reducers";

export default function ORDERREDUCER(state = initState, action: any) {
  switch (action.type) {
    // List
    case OrderConstants.GET_ALL_ORDERS_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case OrderConstants.GET_ALL_ORDERS_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: action.payload.data,
      };
    case OrderConstants.GET_ALL_ORDERS_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Detail
    case OrderConstants.GET_ORDER_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case OrderConstants.GET_ORDER_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: [action.payload.data, ...state.data],
      };
    case OrderConstants.GET_ORDER_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Update
    case OrderConstants.UPDATE_ORDER_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case OrderConstants.UPDATE_ORDER_SUCCESS:
      return {
        ...initState,
        errorMessage: "",
        data: [action.payload.data, ...state.data],
      };
    case OrderConstants.UPDATE_ORDER_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Delete
    case OrderConstants.DELETE_ORDER_REQUEST:
      return {
        ...initState,
        isLoading: true,
        data: state.data,
      };
    case OrderConstants.DELETE_ORDER_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: state.data.filter(
          (item: any) => item._id !== action.payload.data._id
        ),
      };
    case OrderConstants.DELETE_ORDER_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
