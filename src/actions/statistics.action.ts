import BaseAction from "../base/action";
import { Statistics as StatisticsConstants } from "../constants";

class Statistics extends BaseAction {
  private readonly path = "api/statistic";

  public getList = () => (dispatch: any) => {
    dispatch({
      type: StatisticsConstants.default.STATISTIC_REQUEST,
    });

    this.axios
      .get(`${this.path}`)
      .then((result) => {
        dispatch({
          type: StatisticsConstants.default.GET_STATISTICS_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: StatisticsConstants.default.STATISTIC_FAILURE,
          payload: error,
        });
      });
  };

  public getDetail = () => (dispatch: any) => {
    dispatch({
      type: StatisticsConstants.default.STATISTIC_REQUEST,
    });

    this.axios
      .get(`${this.path}/detail`)
      .then((result) => {
        dispatch({
          type: StatisticsConstants.default.GET_STATISTIC_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: StatisticsConstants.default.STATISTIC_FAILURE,
          payload: error,
        });
      });
  };
}

export default new Statistics();
