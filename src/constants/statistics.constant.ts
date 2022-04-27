import BaseConstant from "./base.constant";

class StatisticConstants extends BaseConstant {
  public readonly STATISTIC_REQUEST: string = this.REQUEST;
  public readonly STATISTIC_FAILURE: string = this.FAILURE;

  public readonly GET_STATISTICS_SUCCESS: string =
    this.success("GET_STATISTICS");
  public readonly GET_STATISTIC_SUCCESS: string = this.success("GET_STATISTIC");
}

export default new StatisticConstants("STATISTIC");
