import BaseAction from "../base/action";
import { Statistics as StatisticsConstants } from "../constants";

class Statistics extends BaseAction {
  private readonly path = "api/statistic";

  public getList = () => (dispatch: any) => {
    dispatch({
      type: StatisticsConstants.GET_ALL_STATISTICS_REQUEST,
    });

    this.axios
      .get(`${this.path}`)
      .then((result) => {
        dispatch({
          type: StatisticsConstants.GET_ALL_STATISTICS_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: StatisticsConstants.GET_ALL_STATISTICS_FAILURE,
          payload: error,
        });
      });
  };

  public getDetail = () => (dispatch: any) => {
    dispatch({
      type: StatisticsConstants.GET_STATISTICS_REQUEST,
    });

    this.axios
      .get(`${this.path}/detail`)
      .then((result) => {
        dispatch({
          type: StatisticsConstants.GET_STATISTICS_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: StatisticsConstants.GET_STATISTICS_FAILURE,
          payload: error,
        });
      });
  };
}

export default new Statistics();
