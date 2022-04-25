import BaseAction from "../base/action";
import { Order as OrderConstants } from "../constants";

class Order extends BaseAction {
  private readonly path = "api/order";

  public getList = () => (dispatch: any) => {
    dispatch({
      type: OrderConstants.GET_ALL_ORDERS_REQUEST,
    });

    this.axios
      .get(`${this.path}`)
      .then((result) => {
        dispatch({
          type: OrderConstants.GET_ALL_ORDERS_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: OrderConstants.GET_ALL_ORDERS_FAILURE,
          payload: error,
        });
      });
  };

  public getListWithUser = () => (dispatch: any) => {
    dispatch({
      type: OrderConstants.GET_ALL_ORDERS_REQUEST,
    });

    this.axios
      .get(`${this.path}/user`)
      .then((result) => {
        dispatch({
          type: OrderConstants.GET_ALL_ORDERS_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: OrderConstants.GET_ALL_ORDERS_FAILURE,
          payload: error,
        });
      });
  };

  public getDetail = (id: string) => (dispatch: any) => {
    dispatch({
      type: OrderConstants.GET_ORDER_REQUEST,
    });

    this.axios
      .get(`${this.path}/${id}`)
      .then((result) => {
        dispatch({
          type: OrderConstants.GET_ORDER_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: OrderConstants.GET_ORDER_FAILURE,
          payload: error,
        });
      });
  };

  public postCreate = (sale: any) => (dispatch: any) => {
    dispatch({
      type: OrderConstants.CREATE_ORDER_REQUEST,
    });

    this.axios
      .post(`${this.path}`, sale)
      .then((result) => {
        dispatch({
          type: OrderConstants.CREATE_ORDER_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: OrderConstants.CREATE_ORDER_FAILURE,
          payload: error,
        });
      });
  };

  public putUpdate = (id: string, order: any) => (dispatch: any) => {
    dispatch({
      type: OrderConstants.UPDATE_ORDER_REQUEST,
    });

    order = {
      status: order.status,
      statusShip: order.statusShip,
    };
    this.axios
      .put(`${this.path}/${id}`, order)
      .then((result) => {
        dispatch({
          type: OrderConstants.UPDATE_ORDER_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: OrderConstants.UPDATE_ORDER_FAILURE,
          payload: error,
        });
      });
  };

  public deleteRemove = (id: string) => (dispatch: any) => {
    dispatch({
      type: OrderConstants.DELETE_ORDER_REQUEST,
    });

    this.axios
      .delete(`${this.path}/${id}`)
      .then((result) => {
        dispatch({
          type: OrderConstants.DELETE_ORDER_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: OrderConstants.DELETE_ORDER_FAILURE,
          payload: error,
        });
      });
  };
}

export default new Order();
