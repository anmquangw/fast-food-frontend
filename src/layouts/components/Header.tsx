import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Dispatch } from "redux";
import { Link, useHistory } from "react-router-dom";
import authAction from "../../actions/auth.action";
import logoPng from "../../images/logo.png";
import logo2Png from "../../images/logo2.png";
import adminJpg from "../../images/admin.jpg";
import path from "../../config/base.path";

function Header(): any {
  const auth: string = useSelector(
    (state: any) => state.authReducer,
    shallowEqual
  );
  const dispatch: Dispatch<any> = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (auth) {
      return;
    }
  }, [auth]);

  function handleSignOut(e: any) {
    e.preventDefault();

    if (auth) {
      dispatch(authAction.signout());
    }
    history.push(`${path.signin.path}`);
    window.location.reload();
  }

  return (
    <header id="header" className="header">
      <div className="top-left">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <img src={logoPng} alt="Logo" />
          </Link>
          <Link className="navbar-brand hidden" to="./">
            <img src={logo2Png} alt="Logo" />
          </Link>
          <Link id="menuToggle" className="menutoggle" to="#">
            <i className="fa fa-bars"></i>
          </Link>
        </div>
      </div>

      <div className="top-right">
        <div className="header-menu">
          <div className="user-area dropdown float-right">
            <Link
              to="#"
              className="dropdown-toggle active"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="user-avatar rounded-circle"
                src={adminJpg}
                alt="User Avatar"
              />
            </Link>

            <div className="user-menu dropdown-menu">
              <Link className="nav-link" to="#">
                <i className="fa fa- user"></i>Thông tin
              </Link>
              <Link className="nav-link" to="#">
                <i className="fa fa -cog"></i>Cài đặt
              </Link>
              <button
                type="button"
                className="btn nav-link"
                onClick={handleSignOut}
                style={{ background: "none", border: "none" }}
              >
                <i className="fa fa-power -off"></i>Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
