import BaseAction from "../base/action";
import { Order as OrderConstants } from "../constants";

class Order extends BaseAction {
  private readonly path = "api/order";

  public getList = () => (dispatch: any) => {
    dispatch({
      type: OrderConstants.default.ORDER_REQUEST,
    });

    this.axios
      .get(`${this.path}`)
      .then((result: any) => {
        dispatch({
          type: OrderConstants.default.GET_ORDERS_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: OrderConstants.default.ORDER_FAILURE,
          payload: error,
        });
      });
  };

  public getListWithUser = () => (dispatch: any) => {
    dispatch({
      type: OrderConstants.default.ORDER_REQUEST,
    });

    this.axios
      .get(`${this.path}/user`)
      .then((result) => {
        dispatch({
          type: OrderConstants.default.GET_ORDERS_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: OrderConstants.default.ORDER_FAILURE,
          payload: error,
        });
      });
  };

  public getDetail = (id: string) => (dispatch: any) => {
    dispatch({
      type: OrderConstants.default.ORDER_REQUEST,
    });

    this.axios
      .get(`${this.path}/${id}`)
      .then((result) => {
        dispatch({
          type: OrderConstants.default.GET_ORDER_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: OrderConstants.default.ORDER_FAILURE,
          payload: error,
        });
      });
  };

  public postCreate = (sale: any) => (dispatch: any) => {
    dispatch({
      type: OrderConstants.default.ORDER_REQUEST,
    });

    this.axios
      .post(`${this.path}`, sale)
      .then((result) => {
        dispatch({
          type: OrderConstants.default.CREATE_ORDER_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: OrderConstants.default.ORDER_FAILURE,
          payload: error,
        });
      });
  };

  public putUpdate = (id: string, order: any) => (dispatch: any) => {
    dispatch({
      type: OrderConstants.default.ORDER_REQUEST,
    });

    order = {
      status: order.status,
      statusShip: order.statusShip,
    };
    this.axios
      .put(`${this.path}/${id}`, order)
      .then((result) => {
        dispatch({
          type: OrderConstants.default.UPDATE_ORDER_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: OrderConstants.default.ORDER_FAILURE,
          payload: error,
        });
      });
  };

  public deleteRemove = (id: string) => (dispatch: any) => {
    dispatch({
      type: OrderConstants.default.ORDER_REQUEST,
    });

    this.axios
      .delete(`${this.path}/${id}`)
      .then((result) => {
        dispatch({
          type: OrderConstants.default.DELETE_ORDER_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log({ error });

        dispatch({
          type: OrderConstants.default.ORDER_FAILURE,
          payload: error,
        });
      });
  };
}

export default new Order();
