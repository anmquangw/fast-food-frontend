import { Link } from "react-router-dom";

function Footer(): any {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-inner bg-white">
          <div className="row">
            <div className="col-sm-6">Copyright &copy; 2022 Fast Food</div>
            <div className="col-sm-6 text-right">
              Designed by <Link to="#">ANM</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
