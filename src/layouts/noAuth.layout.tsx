import { useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import logo2Png from "../images/logo2.png";
import path from "../config/base.path";

function NoAuthLayout(props: any): any {
  const auth: string = useSelector(
    (state: any) => state.authReducer,
    shallowEqual
  );
  const history = useHistory();

  useEffect(() => {
    if (!!auth) history.push(`${path.dashBoard.path}`);
  }, [auth, history]);

  return (
    <>
      <div className="bg-dark">
        <div className="sufee-login d-flex align-content-center flex-wrap">
          <div className="container">
            <div className="login-content">
              <div className="login-logo">
                <a href="index.html">
                  <img
                    className="align-content"
                    src={logo2Png}
                    alt=""
                    style={{ height: "38vh" }}
                  />
                </a>
              </div>
              <div className="login-form">
                <div className="text-center">
                  <Link to={path.signin.path}>Đăng nhập ngay</Link>
                </div>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NoAuthLayout;
