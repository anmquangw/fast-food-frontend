import { useSelector, shallowEqual } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";

function List(props: any) {
  const orders: IOrders = useSelector(
    (state: any) => state.orderReducer,
    shallowEqual
  );

  function convertCurrency(price: number) {
    return price?.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }

  if (orders.isLoading || !props.datas) return <Loading />;

  return (
    <>
      <table className="table ">
        <thead>
          <tr>
            <th>#</th>
            <th>Ảnh</th>
            <th>Tên</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Tổng</th>
          </tr>
        </thead>
        <tbody>
          {props?.datas?.map((item: any, index: number) => (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td className="avatar">
                <div className="round-img">
                  <Link to={""}>
                    <img src={item.img1} alt="" />
                  </Link>
                </div>
              </td>
              <td>{item.name}</td>
              <td>{convertCurrency(item.price)}</td>
              <td>X {item.quantity}</td>
              <td>{convertCurrency(item.price * item.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
