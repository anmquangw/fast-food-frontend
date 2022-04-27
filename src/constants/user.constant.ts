import BaseConstant from "./base.constant";

class UserConstants extends BaseConstant {
  public readonly USER_REQUEST: string = this.REQUEST;
  public readonly USER_FAILURE: string = this.FAILURE;

  public readonly GET_USERS_SUCCESS: string = this.success("GET_USERS");
  public readonly GET_USER_SUCCESS: string = this.success("GET_USER");
  public readonly CREATE_USER_SUCCESS: string = this.success("CREATE_USER");
  public readonly UPDATE_USER_SUCCESS: string = this.success("UPDATE_USER");
  public readonly DELETE_USER_SUCCESS: string = this.success("DELETE_USER");
}

export default new UserConstants("USER");
