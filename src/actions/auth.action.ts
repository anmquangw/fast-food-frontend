import BaseAction from "../base/action";
import { Auth as AuthConstants } from "../constants";

class Auth extends BaseAction {
  private readonly path = "api/user";

  public signin = (data: any) => (dispatch: any) => {
    dispatch({
      type: AuthConstants.default.AUTH_REQUEST,
    });

    this.axios
      .post(`${this.path}/admin/signin`, { ...data })
      .then((result) => {
        dispatch({
          type: AuthConstants.default.SIGNIN_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error: any) => {
        dispatch({
          type: AuthConstants.default.AUTH_FAILURE,
          payload: error.response,
        });
        console.log({ error });
      });
  };

  public signout = () => (dispatch: any) => {
    dispatch({
      type: AuthConstants.default.SIGNOUT_SUCCESS,
    });
  };
}

export default new Auth();
