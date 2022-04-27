import { useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";
import { LockAccountActions } from "../../../actions";

function List() {
  const users: IUsers = useSelector(
    (state: any) => state.userReducer,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(LockAccountActions.default.getList());
  }, [dispatch]);

  function handleDelete(id: string) {
    dispatch(LockAccountActions.default.deleteRemove(id));
  }

  if (users.isLoading) return <Loading />;

  return (
    <>
      <table className="table ">
        <thead>
          <tr>
            <th className="serial">#</th>
            <th className="avatar">Ảnh</th>
            <th>họ</th>
            <th>tên</th>
            <th>sđt</th>
            <th>email</th>
            <th>giới tính</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.datas.map((item: any, index: number) => (
            <tr key={index}>
              <td className="serial">{index + 1}.</td>
              <td className="avatar">
                <div className="round-img">
                  <Link to={""}>
                    <img src={item.avatar} alt="" />
                  </Link>
                </div>
              </td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.sex ? <>Nam</> : <>Nữ</>}</td>
              <td
                className="btn"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={(e) => handleDelete(item._id)}
                >
                  <i className="menu-icon fa fa-unlock"></i>
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
