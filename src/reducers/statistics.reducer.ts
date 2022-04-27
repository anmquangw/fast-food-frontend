import { Statistics as StatisticsConstants } from "../constants";
import { initState } from "./initState.reducers";

export default function StatisticsReducer(state: any = initState, action: any) {
  switch (action.type) {
    case StatisticsConstants.default.STATISTIC_REQUEST:
      return {
        ...initState,
        isLoading: true,
      };
    case StatisticsConstants.default.STATISTIC_FAILURE:
      return {
        ...initState,
        isError: true,
        errorMessage: action.payload,
      };

    case StatisticsConstants.default.GET_STATISTICS_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        datas: action.payload.data,
        data: state.data,
        days: action.payload.days,
        months: action.payload.months,
        years: action.payload.years,
        times: action.payload.times,
      };
    case StatisticsConstants.default.GET_STATISTIC_SUCCESS:
      return {
        ...initState,
        message: action.payload.message,
        datas: state.datas,
        data: action.payload.data,
        days: state.days,
        months: state.months,
        years: state.years,
        times: state.times,
      };

    default:
      return state;
  }
}
