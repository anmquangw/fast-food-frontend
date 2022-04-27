import BaseConstant from "./base.constant";

class OrderConstants extends BaseConstant {
  public readonly ORDER_REQUEST: string = this.REQUEST;
  public readonly ORDER_FAILURE: string = this.FAILURE;

  public readonly GET_ORDERS_SUCCESS: string = this.success("GET_ORDERS");
  public readonly GET_ORDER_SUCCESS: string = this.success("GET_ORDER");
  public readonly CREATE_ORDER_SUCCESS: string = this.success("CREATE_ORDER");
  public readonly UPDATE_ORDER_SUCCESS: string = this.success("UPDATE_ORDER");
  public readonly DELETE_ORDER_SUCCESS: string = this.success("DELETE_ORDER");
}

export default new OrderConstants("ORDER");
