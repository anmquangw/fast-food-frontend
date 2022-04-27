import { useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import path from "../../../config/base.path";
import Loading from "../../../components/Loading";
import { BannerActions } from "../../../actions";

function List() {
  const banners: any = useSelector(
    (state: any) => state.bannerReducer,
    shallowEqual
  );
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    if (banners.datas.length === 0) dispatch(BannerActions.default.getList());
  }, [dispatch, banners.datas]);

  const handleDelete = (id: string) => {
    dispatch(BannerActions.default.deleteRemove(id));
  };

  if (banners.isLoading) return <Loading />;

  return (
    <>
      <table className="table ">
        <thead>
          <tr>
            <th className="serial">#</th>
            <th className="avatar">Ảnh</th>
            <th>Tên banner</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {banners.datas.map((item: any, index: number) => (
            <tr key={index}>
              <td className="serial">{index + 1}.</td>
              <td className="avatar">
                <div className="round-img">
                  <Link to={""}>
                    <img src={item.image} alt="" />
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
                  to={`${path.bannerCreate.path}/${item._id}`}
                >
                  <i className="menu-icon fa fa-pencil"></i>
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={(e) => handleDelete(item._id)}
                  disabled={banners.isLoading}
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
