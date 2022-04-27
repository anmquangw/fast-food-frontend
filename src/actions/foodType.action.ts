import BaseAction from "../base/action";
import { FoodType as FoodTypeConstants } from "../constants";

class FoodType extends BaseAction {
  private readonly path = "api/foodType";

  public getList = () => (dispatch: any) => {
    dispatch({
      type: FoodTypeConstants.default.FOOD_TYPE_REQUEST,
    });

    this.axios
      .get(`${this.path}`)
      .then((result) => {
        dispatch({
          type: FoodTypeConstants.default.GET_FOOD_TYPES_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: FoodTypeConstants.default.FOOD_TYPE_FAILURE,
          payload: error,
        });
      });
  };

  public getDetail = (id: string) => (dispatch: any) => {
    dispatch({
      type: FoodTypeConstants.default.FOOD_TYPE_REQUEST,
    });

    this.axios
      .get(`${this.path}/${id}`)
      .then((result) => {
        dispatch({
          type: FoodTypeConstants.default.GET_FOOD_TYPE_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: FoodTypeConstants.default.FOOD_TYPE_FAILURE,
          payload: error,
        });
      });
  };

  public postCreate = (foodType: any) => (dispatch: any) => {
    dispatch({
      type: FoodTypeConstants.default.FOOD_TYPE_REQUEST,
    });
    this.axios
      .post(`${this.path}`, foodType)
      .then((result) => {
        dispatch({
          type: FoodTypeConstants.default.CREATE_FOOD_TYPE_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: FoodTypeConstants.default.FOOD_TYPE_FAILURE,
          payload: error,
        });
      });
  };

  public putUpdate =
    (id: string, foodType: IBaseFoodType) => (dispatch: any) => {
      dispatch({
        type: FoodTypeConstants.default.FOOD_TYPE_REQUEST,
      });

      foodType = {
        name: foodType.name,
        img: foodType.img,
      };

      this.axios
        .put(`${this.path}/${id}`, foodType)
        .then((result) => {
          dispatch({
            type: FoodTypeConstants.default.UPDATE_FOOD_TYPE_SUCCESS,
            payload: result.data,
          });
        })
        .catch((error) => {
          console.log({ error });

          dispatch({
            type: FoodTypeConstants.default.FOOD_TYPE_FAILURE,
            payload: error,
          });
        });
    };

  public deleteRemove = (id: string) => (dispatch: any) => {
    dispatch({
      type: FoodTypeConstants.default.FOOD_TYPE_REQUEST,
    });

    this.axios
      .delete(`${this.path}/${id}`)
      .then((result) => {
        dispatch({
          type: FoodTypeConstants.default.DELETE_FOOD_TYPE_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: FoodTypeConstants.default.FOOD_TYPE_FAILURE,
          payload: error,
        });
      });
  };
}

export default new FoodType();
