import React, { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import {
  RouteComponentProps,
  withRouter,
  useParams,
  useHistory,
} from "react-router-dom";
import IPage from "../../interfaces/page";
import Breakcrumb from "../../components/Breakcrumb";
import path from "../../config/base.path";
import { CustomerActions } from "../../actions";

const CustommerPage: React.FunctionComponent<
  IPage & RouteComponentProps<any>
> = () => {
  const { id }: IPage = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form, setForm] = useState<IBaseUser>({
    role: "",
  });
  const users: IUsers = useSelector(
    (state: any) => state.userReducer,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setIsLoading(users.isLoading);
  }, [users.isLoading]);

  useEffect(() => {
    setForm({
      role: "1",
    });
  }, []);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleClick() {
    const render = Promise.all([
      dispatch(CustomerActions.default.putUpdate(id, form)),
    ]);

    render.then(() => {
      setTimeout(() => {
        history.push(`${path.customer.path}`);
      }, 2500);
    });
  }

  return (
    <>
      <Breakcrumb
        title={path.customerSetting.name}
        paths={[
          { ...path.dashBoard },
          { ...path.food },
          { ...path.customerSetting },
        ]}
      />

      <div className="content">
        <div className="animated fadeIn">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <strong>{!id ? "Thêm" : "Sửa"}</strong>
                </div>
                <div className="card-body card-block">
                  <div className="form-group">
                    <label htmlFor="role" className="form-control-label">
                      Nhóm quyền
                    </label>
                    <select
                      name="role"
                      id="role"
                      disabled={users.isLoading}
                      className="form-control"
                      value={form?.role}
                      onChange={handleChange}
                    >
                      <option value={""}>Lựa chọn danh mục</option>
                      <option value={"0"}>Quản trị viên</option>
                      <option value={"1"}>Khách hàng</option>
                      <option value={"2"}>Khóa</option>
                    </select>
                  </div>

                  <div className="form-actions form-group">
                    <button
                      type="submit"
                      className="btn btn-success btn-sm"
                      disabled={isLoading}
                      onClick={handleClick}
                    >
                      {!id ? "Thêm" : "Sửa"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- .animated --> */}
      </div>
      {/* <!-- .content --> */}
    </>
  );
};

export default withRouter(CustommerPage);
