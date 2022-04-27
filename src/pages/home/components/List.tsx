import { useSelector, shallowEqual } from "react-redux";
import Loading from "../../../components/Loading";

function List() {
  const orders: IOrders = useSelector(
    (state: any) => state.orderReducer,
    shallowEqual
  );

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

  function findStatusShip(statu: any) {
    const find: any = statusShip?.find((item: any) => item.id === statu);
    return (
      <span className={`badge ${find?.type}`}>{find ? find.name : ""}</span>
    );
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
            <th className="serial">#</th>
            <th>Khách hàng</th>
            <th>Tổng</th>
            <th>Trạng thái đơn</th>
          </tr>
        </thead>
        <tbody>
          {orders.datas.map((item: any, index: number) => (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td>{item.name}</td>
              <td>{convertCurrency(item.sum)}</td>
              <td>{findStatusShip(item.statusShip)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
