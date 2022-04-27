import BaseAction from "../base/action";
import { Sale as SaleConstants } from "../constants";

class Sale extends BaseAction {
  private readonly path = "api/sales";

  public getList = () => (dispatch: any) => {
    dispatch({
      type: SaleConstants.default.SALE_REQUEST,
    });

    this.axios
      .get(`${this.path}`)
      .then((result) => {
        dispatch({
          type: SaleConstants.default.GET_SALES_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: SaleConstants.default.SALE_FAILURE,
          payload: error,
        });
      });
  };

  public getDetail = (id: string) => (dispatch: any) => {
    dispatch({
      type: SaleConstants.default.SALE_REQUEST,
    });

    this.axios
      .get(`${this.path}/${id}`)
      .then((result) => {
        dispatch({
          type: SaleConstants.default.GET_SALE_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: SaleConstants.default.SALE_FAILURE,
          payload: error,
        });
      });
  };

  public postCreate = (sale: any) => (dispatch: any) => {
    dispatch({
      type: SaleConstants.default.SALE_REQUEST,
    });

    this.axios
      .post(`${this.path}`, sale)
      .then((result) => {
        dispatch({
          type: SaleConstants.default.CREATE_SALE_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: SaleConstants.default.SALE_FAILURE,
          payload: error,
        });
      });
  };

  public putUpdate = (id: string, sale: any) => (dispatch: any) => {
    delete sale._id;
    dispatch({
      type: SaleConstants.default.SALE_REQUEST,
    });

    this.axios
      .put(`${this.path}/${id}`, sale)
      .then((result) => {
        dispatch({
          type: SaleConstants.default.UPDATE_SALE_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: SaleConstants.default.SALE_FAILURE,
          payload: error,
        });
      });
  };

  public deleteRemove = (id: string) => (dispatch: any) => {
    dispatch({
      type: SaleConstants.default.SALE_REQUEST,
    });

    this.axios
      .delete(`${this.path}/${id}`)
      .then((result) => {
        dispatch({
          type: SaleConstants.default.DELETE_SALE_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: SaleConstants.default.SALE_FAILURE,
          payload: error,
        });
      });
  };
}

export default new Sale();
