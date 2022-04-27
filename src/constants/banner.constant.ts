import BaseConstant from "./base.constant";

class BannerConstants extends BaseConstant {
  public readonly BANNER_REQUEST: string = this.REQUEST;
  public readonly BANNER_FAILURE: string = this.FAILURE;

  public readonly GET_BANNERS_SUCCESS: string = this.success("GET_BANNERS");
  public readonly GET_BANNER_SUCCESS: string = this.success("GET_BANNER");
  public readonly CREATE_BANNER_SUCCESS: string = this.success("CREATE_BANNER");
  public readonly UPDATE_BANNER_SUCCESS: string = this.success("UPDATE_BANNER");
  public readonly DELETE_BANNER_SUCCESS: string = this.success("DELETE_BANNER");
}

export default new BannerConstants("BANNER");
