import { useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import path from "../../../config/base.path";
import Loading from "../../../components/Loading";
import { FoodActions } from "../../../actions";

function List() {
  const foods: any = useSelector(
    (state: any) => state.foodReducer,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    if (foods.datas.length === 0)
      dispatch(FoodActions.default.getList());
  }, [dispatch, foods.datas]);

  function handleDelete(id: string) {
    dispatch(FoodActions.default.deleteRemove(id));
  }
  function convertCurrency(price: number) {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }
  if (foods.isLoading) return <Loading />;

  return (
    <>
      <table className="table ">
        <thead>
          <tr>
            <th className="serial">#</th>
            <th className="avatar">Ảnh</th>
            <th>Món</th>
            <th>Giá tiền</th>
            <th>Số lượng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {foods.datas.map((item: any, index: number) => (
            <tr key={index}>
              <td className="serial">{index + 1}.</td>
              <td className="avatar">
                <div className="round-img">
                  <Link to={""}>
                    <img src={item.img1} alt="" />
                  </Link>
                </div>
              </td>
              <td>{item.name}</td>
              <td>{convertCurrency(item.price)}</td>
              <td>{item.quantity}</td>
              <td
                className="btn"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Link
                  className="btn btn-primary"
                  to={`${path.foodCreate.path}/${item._id}`}
                >
                  <i className="menu-icon fa fa-pencil"></i>
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={(e) => handleDelete(item._id)}
                >
                  <i className="menu-icon fa fa-trash-o"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
