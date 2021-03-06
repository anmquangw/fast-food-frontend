import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Dispatch } from "redux";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import IPage from "../interfaces/page";
import authAction from "../actions/auth.action";
import Loading from "../components/Loading";

const SigninPage: React.FunctionComponent<
  IPage & RouteComponentProps<any>
> = () => {
  const auth: any = useSelector(
    (state: any) => state.authReducer,
    shallowEqual
  );
  const dispatch: Dispatch<any> = useDispatch();

  const [form, setForm] = useState({
    phone: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    dispatch(authAction.signin(form));
  }
console.log(auth.isAuthenticated);
  return (
    <>
      {auth.isLoading && <Loading />}
      {auth.isError && (
        <div className="text-center text-danger">{auth.errorMessage}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Số điện thoại</label>
          <input
            name="phone"
            type="tel"
            className="form-control"
            placeholder="Số điện thoại"
            onChange={handleChange}
            autoComplete="off"
            disabled={auth.isLoading}
          />
        </div>
        <div className="form-group">
          <label>Mật khẩu</label>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Mật khẩu"
            onChange={handleChange}
            autoComplete="off"
            disabled={auth.isLoading}
          />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /> Ghi nhớ đăng nhập
          </label>
          <label className="pull-right">
            <Link to={"#"}>Quên mật khẩu?</Link>
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-success btn-flat m-b-30 m-t-30"
          disabled={auth.isLoading}
        >
          Đăng nhập
        </button>
      </form>
    </>
  );
};

export default withRouter(SigninPage);
