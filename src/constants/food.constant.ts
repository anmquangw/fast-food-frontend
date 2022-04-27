import BaseConstant from "./base.constant";

class FoodConstants extends BaseConstant {
  public readonly FOOD_REQUEST: string = this.REQUEST;
  public readonly FOOD_FAILURE: string = this.FAILURE;

  public readonly GET_FOODS_SUCCESS: string = this.success("GET_FOODS");
  public readonly GET_FOOD_SUCCESS: string = this.success("GET_FOOD");
  public readonly CREATE_FOOD_SUCCESS: string = this.success("CREATE_FOOD");
  public readonly UPDATE_FOOD_SUCCESS: string = this.success("UPDATE_FOOD");
  public readonly DELETE_FOOD_SUCCESS: string = this.success("DELETE_FOOD");
}

export default new FoodConstants("FOOD");
