import BaseConstant from "./base.constant";

class SaleConstants extends BaseConstant {
  public readonly SALE_REQUEST: string = this.REQUEST;
  public readonly SALE_FAILURE: string = this.FAILURE;

  public readonly GET_SALES_SUCCESS: string = this.success("GET_SALES");
  public readonly GET_SALE_SUCCESS: string = this.success("GET_SALE");
  public readonly CREATE_SALE_SUCCESS: string = this.success("CREATE_SALE");
  public readonly UPDATE_SALE_SUCCESS: string = this.success("UPDATE_SALE");
  public readonly DELETE_SALE_SUCCESS: string = this.success("DELETE_SALE");
}

export default new SaleConstants("SALE");
