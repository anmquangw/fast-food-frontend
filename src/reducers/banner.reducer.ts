import { Banner as BannerConstants } from "../constants";
import { initState } from "./initState.reducers";

export default function BannerReducer(state = initState, action: any) {
  switch (action.type) {
    // List
    case BannerConstants.GET_ALL_BANNERS_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case BannerConstants.GET_ALL_BANNERS_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: action.payload.data,
      };
    case BannerConstants.GET_ALL_BANNERS_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Detail
    case BannerConstants.GET_BANNER_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case BannerConstants.GET_BANNER_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: [action.payload.data],
      };
    case BannerConstants.GET_BANNER_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Create
    case BannerConstants.CREATE_BANNER_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case BannerConstants.CREATE_BANNER_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: [action.payload.data, ...state.data],
      };
    case BannerConstants.CREATE_BANNER_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Update
    case BannerConstants.UPDATE_BANNER_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case BannerConstants.UPDATE_BANNER_SUCCESS:
      return {
        ...initState,
        errorMessage: "",
        data: state.data.map((item: any) =>
          item.id === action.payload.data.id ? action.payload.data : item
        ),
      };
    case BannerConstants.UPDATE_BANNER_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    // Delete
    case BannerConstants.DELETE_BANNER_REQUEST:
      return {
        ...initState,
        isLoading: true,
        data: state.data,
      };
    case BannerConstants.DELETE_BANNER_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: state.data.filter(
          (item: any) => item._id !== action.payload.data._id
        ),
      };
    case BannerConstants.DELETE_BANNER_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
