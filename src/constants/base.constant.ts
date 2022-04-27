abstract class BaseConstant {
  // static readonly API_URL: string = "http://localhost:8080/api";
  // static readonly API_VERSION: string = "v1";
  // static readonly API_URL_V1: string =
  //   BaseConstant.API_URL + "/" + BaseConstant.API_VERSION;
  protected REQUEST = "REQUEST";
  protected FAILURE = "FAILURE";
  protected SUCCESS = "SUCCESS";

  constructor(constant: string) {
    this.REQUEST = constant + "_" + this.REQUEST;
    this.FAILURE = constant + "_" + this.FAILURE;
    this.SUCCESS = constant + "_" + this.SUCCESS;
  }

  public success(action: string): string {
    return action + "_" + this.SUCCESS;
  }
}

export default BaseConstant;
