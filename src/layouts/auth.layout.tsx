import { useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "./components/Header";
import SlideBar from "./components/SlideBar";
import Footer from "./components/Footer";
import path from "../config/base.path";

function AuthLayout(props: any): any {
  const auth: string = useSelector(
    (state: any) => state.authReducer,
    shallowEqual
  );
  const history = useHistory();

  useEffect(() => {
    if (!auth) history.push(`${path.signin.path}`);
  }, [auth, history]);
  return (
    <>
      {/* <!-- Left Panel --> */}
      <SlideBar />
      {/* <!-- /#left-panel --> */}

      {/* <!-- Right Panel --> */}
      <div id="right-panel" className="right-panel">
        {/* <!-- Header--> */}
        <Header />
        {/* <!-- /#header --> */}
        {/* <!-- Content --> */}
        {props.children}
        {/* <!-- /.content --> */}
        <div className="clearfix"></div>
        {/* <!-- Footer --> */}
        <Footer />
        {/* <!-- /.site-footer --> */}
      </div>
      {/* <!-- /#right-panel --> */}
    </>
  );
}
export default AuthLayout;
