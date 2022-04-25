import BaseAction from "../base/action";
import { Sale as SaleConstants } from "../constants";

class Sale extends BaseAction {
  private readonly path = "api/sales";

  public getList = () => (dispatch: any) => {
    dispatch({
      type: SaleConstants.GET_ALL_SALES_REQUEST,
    });

    this.axios
      .get(`${this.path}`)
      .then((result) => {
        dispatch({
          type: SaleConstants.GET_ALL_SALES_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: SaleConstants.GET_ALL_SALES_FAILURE,
          payload: error,
        });
      });
  };

  public getDetail = (id: string) => (dispatch: any) => {
    dispatch({
      type: SaleConstants.GET_SALE_REQUEST,
    });

    this.axios
      .get(`${this.path}/${id}`)
      .then((result) => {
        dispatch({
          type: SaleConstants.GET_SALE_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: SaleConstants.GET_SALE_FAILURE,
          payload: error,
        });
      });
  };

  public postCreate = (sale: any) => (dispatch: any) => {
    dispatch({
      type: SaleConstants.CREATE_SALE_REQUEST,
    });

    this.axios
      .post(`${this.path}`, sale)
      .then((result) => {
        dispatch({
          type: SaleConstants.CREATE_SALE_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: SaleConstants.CREATE_SALE_FAILURE,
          payload: error,
        });
      });
  };

  public putUpdate = (id: string, sale: IBaseSale) => (dispatch: any) => {
    dispatch({
      type: SaleConstants.CREATE_SALE_REQUEST,
    });

    sale = {
      code: sale.code,
      description: sale.description,
      img: sale.img,
      quantity: sale.quantity,
    };

    this.axios
      .put(`${this.path}/${id}`, sale)
      .then((result) => {
        dispatch({
          type: SaleConstants.CREATE_SALE_SUCCESS,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: SaleConstants.CREATE_SALE_FAILURE,
          payload: error,
        });
      });
  };

  public deleteRemove = (id: string) => (dispatch: any) => {
    dispatch({
      type: SaleConstants.DELETE_SALE_REQUEST,
    });

    this.axios
      .delete(`${this.path}/${id}`)
      .then((result) => {
        dispatch({
          type: SaleConstants.DELETE_SALE_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: SaleConstants.DELETE_SALE_FAILURE,
          payload: error,
        });
      });
  };
}

export default new Sale();
