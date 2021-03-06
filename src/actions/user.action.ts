import BaseAction from "../base/action";
import { User as UserConstants } from "../constants";

export class User extends BaseAction {
  protected readonly path = "api/user";

  public getDetail = (id: string) => (dispatch: any) => {
    dispatch({
      type: UserConstants.default.USER_REQUEST,
    });

    this.axios
      .get(`${this.path}/${id}`)
      .then((result) => {
        dispatch({
          type: UserConstants.default.GET_USER_SUCCESS,
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

  public putUpdate = (id: string, user: IBaseUser) => (dispatch: any) => {
    dispatch({
      type: UserConstants.default.USER_REQUEST,
    });

    user = {
      role: user.role,
    };

    this.axios
      .put(`${this.path}/status/${id}`, user)
      .then((result) => {
        dispatch({
          type: UserConstants.default.DELETE_USER_SUCCESS,
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

  public deleteRemove = (id: string) => (dispatch: any) => {
    dispatch({
      type: UserConstants.default.USER_REQUEST,
    });

    this.axios
      .delete(`${this.path}/${id}`)
      .then((result) => {
        dispatch({
          type: UserConstants.default.DELETE_USER_SUCCESS,
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

export default new User();
