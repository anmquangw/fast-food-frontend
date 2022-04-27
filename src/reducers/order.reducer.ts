import { Order as OrderConstants } from "../constants";
import { initState } from "./initState.reducers";

export default function ORDERREDUCER(state = initState, action: any) {
  switch (action.type) {
    case OrderConstants.default.ORDER_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case OrderConstants.default.ORDER_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    case OrderConstants.default.GET_ORDERS_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        datas: action.payload.data,
      };
    case OrderConstants.default.GET_ORDER_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: action.payload.data,
        datas: state.datas,
      };
    case OrderConstants.default.UPDATE_ORDER_SUCCESS:
      return {
        ...initState,
        errorMessage: "",
        data: action.payload.data,
      };
    case OrderConstants.default.DELETE_ORDER_SUCCESS:
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
