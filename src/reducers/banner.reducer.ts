import { Banner as BannerConstants } from "../constants";
import { initState } from "./initState.reducers";

export default function BannerReducer(state = initState, action: any) {
  switch (action.type) {
    case BannerConstants.default.BANNER_REQUEST:
      return {
        ...initState,
        datas: state.datas,
        data: state.data,
        isLoading: true,
      };
    case BannerConstants.default.BANNER_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    case BannerConstants.default.GET_BANNERS_SUCCESS:
      return {
        ...initState,
        message: action?.payload?.message,
        datas: action.payload.data,
      };
    case BannerConstants.default.GET_BANNER_SUCCESS:
      return {
        ...initState,
        message: action?.payload?.message,
        datas: state.datas,
        data: action.payload.data,
      };
    case BannerConstants.default.CREATE_BANNER_SUCCESS:
      return {
        ...initState,
        message: action?.payload?.message,
        datas: [action.payload.data, ...state.datas],
        data: action.payload.data,
      };
    case BannerConstants.default.UPDATE_BANNER_SUCCESS:
      return {
        ...initState,
        datas: state.datas.map((item: any) =>
          item._id === action.payload.data._id ? action.payload.data : item
        ),
      };
    case BannerConstants.default.DELETE_BANNER_SUCCESS:
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
