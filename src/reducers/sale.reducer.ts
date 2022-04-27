import { Sale as SaleConstants } from "../constants";
import { initState } from "./initState.reducers";

export default function SaleReducer(state = initState, action: any) {
  switch (action.type) {
    case SaleConstants.default.SALE_REQUEST:
      return {
        ...initState,
        datas: state.datas,
        data: state.data,
        isLoading: true,
      };
    case SaleConstants.default.SALE_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    case SaleConstants.default.GET_SALES_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        datas: action.payload.data,
      };
    case SaleConstants.default.GET_SALE_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: action.payload.data,
      };
    case SaleConstants.default.CREATE_SALE_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        datas: [action.payload.data, ...state.datas],
      };
    case SaleConstants.default.UPDATE_SALE_SUCCESS:
      return {
        ...initState,
        errorMessage: "",
        datas: state.datas.map((item: any) =>
          item._id === action.payload.data._id ? action.payload.data : item
        ),
      };
    case SaleConstants.default.DELETE_SALE_SUCCESS:
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
