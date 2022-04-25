import { useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import path from "../../../config/base.path";
import Loading from "../../../components/Loading";
import { OrderActions } from "../../../actions";

function List() {
  const orders: IOrders = useSelector(
    (state: any) => state.orderReducer,
    shallowEqual
  );
  const status = [
    {
      id: "0",
      name: "Thanh toán khi nhận",
      type: "badge-warning",
    },
    {
      id: "1",
      name: "Thanh toán qua momo",
      type: "badge-danger",
    },
  ];
  const statusShip = [
    {
      id: "0",
      name: "Đang xác nhận",
      type: "badge-info",
    },
    {
      id: "1",
      name: "Đang chuẩn bị đồ ăn",
      type: "badge-warning",
    },
    {
      id: "2",
      name: "Đang giao hàng",
      type: "badge-secondary",
    },
    {
      id: "3",
      name: "Đã hoàn thành",
      type: "badge-success",
    },
    {
      id: "4",
      name: "Đã hủy",
      type: "badge-danger",
    },
  ];
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(OrderActions.default.getList());
  }, [dispatch]);

  function findStatus(statu: any) {
    const find: any = status?.find((item: any) => item.id === statu);
    return (
      <span className={`badge ${find?.type}`}>{find ? find.name : ""}</span>
    );
  }

  function findStatusShip(statu: any) {
    const find: any = statusShip?.find((item: any) => item.id === statu);
    return (
      <span className={`badge ${find?.type}`}>{find ? find.name : ""}</span>
    );
  }

  function convertDate(date: string, slash: string = "/") {
    const dateConvert = new Date(date);
    return `${`0${dateConvert.getDate()}`.slice(-2)}${slash}${`0${
      dateConvert.getMonth() + 1
    }`.slice(-2)}${slash}${dateConvert.getFullYear()}`;
  }

  function convertCurrency(price: number) {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }

  if (orders.isLoading) return <Loading />;

  return (
    <>
      <table className="table ">
        <thead>
          <tr>
            <th>#</th>
            <th>Tổng</th>
            <th>Địa chỉ nhận</th>
            <th>Người nhận</th>
            <th>Trạng thái đơn</th>
            <th>Thanh toán</th>
            <th>Ghi chú</th>
            <th>Ngày tạo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.data.map((item: any, index: number) => (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td>{convertCurrency(item.sum)}</td>
              <td>{item.address}</td>
              <td>{item.name}</td>
              <td>{findStatusShip(item.statusShip)}</td>
              <td>{findStatus(item.status)}</td>
              <td>{item.note}</td>
              <td>{convertDate(item.createdAt, "-")}</td>
              <td
                className="btn"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Link
                  className="btn btn-primary"
                  to={`${path.order.path}/${item._id}`}
                >
                  <i className="menu-icon fa fa-pencil"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
