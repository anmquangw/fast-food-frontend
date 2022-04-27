import BaseConstant from "./base.constant";

class FoodTypeConstants extends BaseConstant {
  public readonly FOOD_TYPE_REQUEST: string = this.REQUEST;
  public readonly FOOD_TYPE_FAILURE: string = this.FAILURE;

  public readonly GET_FOOD_TYPES_SUCCESS: string =
    this.success("GET_FOOD_TYPES");
  public readonly GET_FOOD_TYPE_SUCCESS: string = this.success("GET_FOOD_TYPE");
  public readonly CREATE_FOOD_TYPE_SUCCESS: string =
    this.success("CREATE_FOOD_TYPE");
  public readonly UPDATE_FOOD_TYPE_SUCCESS: string =
    this.success("UPDATE_FOOD_TYPE");
  public readonly DELETE_FOOD_TYPE_SUCCESS: string =
    this.success("DELETE_FOOD_TYPE");
}

export default new FoodTypeConstants("FOOD_TYPE");
