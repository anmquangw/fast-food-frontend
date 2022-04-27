import BaseConstant from "./base.constant";

class AuthConstants extends BaseConstant {
  public readonly AUTH_REQUEST: string = this.REQUEST;
  public readonly AUTH_FAILURE: string = this.FAILURE;

  public readonly SIGNIN_SUCCESS: string = this.success("SIGNIN");
  public readonly SIGNOUT_SUCCESS: string = this.success("SIGNOUT");
}

export default new AuthConstants("AUTH");
