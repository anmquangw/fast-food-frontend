import BaseAction from "../base/action";
import { Banner as BannerConstants } from "../constants";

class Banner extends BaseAction {
  private readonly path = "api/banner";

  public getList = () => (dispatch: any) => {
    dispatch({
      type: BannerConstants.GET_ALL_BANNERS_REQUEST,
    });

    this.axios
      .get(`${this.path}`)
      .then((result) => {
        dispatch({
          type: BannerConstants.GET_ALL_BANNERS_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: BannerConstants.GET_ALL_BANNERS_FAILURE,
          payload: error,
        });
      });
  };

  public getDetail = (id: string) => (dispatch: any) => {
    dispatch({
      type: BannerConstants.GET_BANNER_REQUEST,
    });

    this.axios
      .get(`${this.path}/${id}`)
      .then((result) => {
        dispatch({
          type: BannerConstants.GET_BANNER_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: BannerConstants.GET_BANNER_FAILURE,
          payload: error,
        });
      });
  };

  public postCreate = (banner: any) => (dispatch: any) => {
    dispatch({
      type: BannerConstants.CREATE_BANNER_REQUEST,
    });
    this.axios
      .post(`${this.path}`, banner)
      .then((result) => {
        dispatch({
          type: BannerConstants.CREATE_BANNER_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: BannerConstants.CREATE_BANNER_FAILURE,
          payload: error,
        });
      });
  };

  public putUpdate = (id: string, banner: IBaseBanner) => (dispatch: any) => {
    dispatch({
      type: BannerConstants.CREATE_BANNER_REQUEST,
    });

    banner = {
      name: banner.name,
      image: banner.image,
    };

    this.axios
      .put(`${this.path}/${id}`, banner)
      .then((result) => {
        dispatch({
          type: BannerConstants.CREATE_BANNER_SUCCESS,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: BannerConstants.CREATE_BANNER_FAILURE,
          payload: error,
        });
      });
  };

  public deleteRemove = (id: string) => (dispatch: any) => {
    dispatch({
      type: BannerConstants.DELETE_BANNER_REQUEST,
    });

    this.axios
      .delete(`${this.path}/${id}`)
      .then((result) => {
        dispatch({
          type: BannerConstants.DELETE_BANNER_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: BannerConstants.DELETE_BANNER_FAILURE,
          payload: error,
        });
      });
  };
}

export default new Banner();
