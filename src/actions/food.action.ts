import BaseAction from "../base/action";
import { Food as FoodConstants } from "../constants";

class Food extends BaseAction {
  private readonly path = "api/food";

  public getList = () => (dispatch: any) => {
    dispatch({
      type: FoodConstants.default.FOOD_REQUEST,
    });

    this.axios
      .get(`${this.path}`)
      .then((result) => {
        dispatch({
          type: FoodConstants.default.GET_FOODS_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: FoodConstants.default.FOOD_FAILURE,
          payload: error,
        });
      });
  };

  public getDetail = (id: string) => (dispatch: any) => {
    dispatch({
      type: FoodConstants.default.FOOD_REQUEST,
    });

    this.axios
      .get(`${this.path}/${id}`)
      .then((result) => {
        dispatch({
          type: FoodConstants.default.GET_FOOD_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: FoodConstants.default.FOOD_FAILURE,
          payload: error,
        });
      });
  };

  public postCreate = (food: any) => (dispatch: any) => {
    dispatch({
      type: FoodConstants.default.FOOD_REQUEST,
    });
    this.axios
      .post(`${this.path}`, food)
      .then((result) => {
        dispatch({
          type: FoodConstants.default.CREATE_FOOD_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: FoodConstants.default.FOOD_FAILURE,
          payload: error,
        });
      });
  };

  public putUpdate = (id: string, food: any) => (dispatch: any) => {
    delete food._id;
    dispatch({
      type: FoodConstants.default.FOOD_REQUEST,
    });

    this.axios
      .put(`${this.path}/${id}`, food)
      .then((result) => {
        dispatch({
          type: FoodConstants.default.UPDATE_FOOD_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: FoodConstants.default.FOOD_FAILURE,
          payload: error,
        });
      });
  };

  public deleteRemove = (id: string) => (dispatch: any) => {
    dispatch({
      type: FoodConstants.default.FOOD_REQUEST,
    });

    this.axios
      .delete(`${this.path}/${id}`)
      .then((result) => {
        dispatch({
          type: FoodConstants.default.DELETE_FOOD_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: FoodConstants.default.FOOD_FAILURE,
          payload: error,
        });
      });
  };
}

export default new Food();
