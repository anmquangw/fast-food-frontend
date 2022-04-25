import { Statistics as StatisticsConstants } from "../constants";
import { initState } from "./initState.reducers";

export default function StatisticsReducer(state = initState, action: any) {
  switch (action.type) {
    // List
    case StatisticsConstants.GET_ALL_STATISTICS_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case StatisticsConstants.GET_ALL_STATISTICS_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: action.payload.data,
        days: action.payload.days,
        months: action.payload.months,
        years: action.payload.years,
        times: action.payload.times,
      };
    case StatisticsConstants.GET_ALL_STATISTICS_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
}

export function StatisticsDetailReducer(state = initState, action: any) {
  switch (action.type) {
    // List
    case StatisticsConstants.GET_STATISTICS_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case StatisticsConstants.GET_STATISTICS_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        data: [action.payload.data],
      };
    case StatisticsConstants.GET_STATISTICS_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
}
