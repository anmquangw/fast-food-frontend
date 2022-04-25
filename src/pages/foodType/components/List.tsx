import { useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import path from "../../../config/base.path";
import Loading from "../../../components/Loading";
import { FoodTypeActions } from "../../../actions";

function List() {
  const foodTypes: IFoodTypes = useSelector(
    (state: any) => state.foodTypeReducer,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(FoodTypeActions.default.getList());
  }, [dispatch]);

  function handleDelete(id: string) {
    dispatch(FoodTypeActions.default.deleteRemove(id));
  }

  if (foodTypes.isLoading) return <Loading />;

  return (
    <>
      <table className="table ">
        <thead>
          <tr>
            <th className="serial">#</th>
            <th className="avatar">Ảnh</th>
            <th>Tên loại</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {foodTypes.data.map((item: any, index: number) => (
            <tr key={index}>
              <td className="serial">{index + 1}.</td>
              <td className="avatar">
                <div className="round-img">
                  <Link to={""}>
                    <img src={item.img} alt="" />
                  </Link>
                </div>
              </td>
              <td>{item.name}</td>
              <td
                className="btn"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Link
                  className="btn btn-primary"
                  to={`${path.foodTypeCreate.path}/${item._id}`}
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
