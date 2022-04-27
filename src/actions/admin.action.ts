import { User as UserAction } from "./user.action";
import { User as UserConstants } from "../constants";

class Admin extends UserAction {
  public getList = () => (dispatch: any) => {
    dispatch({
      type: UserConstants.default.USER_REQUEST,
    });

    this.axios
      .get(`${this.path}/role/0`)
      .then((result) => {
        dispatch({
          type: UserConstants.default.GET_USERS_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });
        dispatch({
          type: UserConstants.default.USER_FAILURE,
          payload: error,
        });
      });
  };
}

export default new Admin();
