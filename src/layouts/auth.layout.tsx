import Header from "./components/Header";
import SlideBar from "./components/SlideBar";
import Footer from "./components/Footer";

function AuthLayout(props: any): any {
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
