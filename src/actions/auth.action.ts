import BaseAction from "../base/action";
import { Auth as AuthConstants } from "../constants";

class Auth extends BaseAction {
  private readonly path = "api/user";

  public signin = (data: any) => (dispatch: any) => {
    this.axios
      .post(`${this.path}/admin/signin`, { ...data })
      .then((result) => {
        dispatch({
          type: AuthConstants.SET_TOKEN,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  public signout = () => (dispatch: any) => {
    dispatch({
      type: AuthConstants.REMOVE_TOKEN,
    });
  };
}

export default new Auth();
