import { useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import path from "../../../config/base.path";
import Loading from "../../../components/Loading";
import { SaleActions } from "../../../actions";

function List() {
  const sales: ISales = useSelector(
    (state: any) => state.saleReducer,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(SaleActions.default.getList());
  }, [dispatch]);

  function handleDelete(id: string) {
    dispatch(SaleActions.default.deleteRemove(id));
  }

  if (sales.isLoading) return <Loading />;

  return (
    <>
      <table className="table ">
        <thead>
          <tr>
            <th>#</th>
            <th>Mô tả</th>
            <th>Số lượng</th>
            <th>Số tiền giảm</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sales.data.map((item: any, index: number) => (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td>{item.code}</td>
              <td>{item.quantity}</td>
              <td>{item.description}</td>
              <td
                className="btn"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Link
                  className="btn btn-primary"
                  to={`${path.saleCreate.path}/${item._id}`}
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
