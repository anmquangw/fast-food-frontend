import NavLinkCustom from "../../components/NavLinkCustom";
import path from "../../config/base.path";

function SlideBar(): any {
  return (
    <>
      <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
          <div id="main-menu" className="main-menu collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLinkCustom to={path.dashBoard.path} exact={true}>
                  <i className="menu-icon fa fa-laptop"></i>Dashboard thống kê
                </NavLinkCustom>
              </li>
              {/* <!-- /.menu-title --> */}
              <li className="menu-title">Đơn đặt hàng</li>
              {/* <!--  --> */}
              <li>
                <NavLinkCustom to={path.order.path}>
                  <i className="menu-icon fa fa-plane"></i>Đơn đặt hàng
                </NavLinkCustom>
              </li>
              {/* <!--  --> */}
              <li>
                <NavLinkCustom to={path.sales.path}>
                  <i className="menu-icon fa fa-gift"></i>Mã Khuyến mãi
                </NavLinkCustom>
              </li>
              {/* <!--  --> */}
              <li>
                <NavLinkCustom to={path.statistics.path}>
                  <i className="menu-icon fa fa-bar-chart"></i>Thống kê hoach
                  toán
                </NavLinkCustom>
              </li>
              {/* <!-- /.menu-title --> */}
              <li className="menu-title">Thực đơn</li>
              {/* <!--  --> */}
              <li>
                <NavLinkCustom to={path.food.path}>
                  <i className="menu-icon fa fa-table"></i>Món ăn
                </NavLinkCustom>
              </li>
              {/* <!--  --> */}
              <li>
                <NavLinkCustom to={path.foodType.path}>
                  <i className="menu-icon fa fa-cogs"></i>Loại món
                </NavLinkCustom>
              </li>
              {/* <!-- /.menu-title --> */}
              <li className="menu-title">Người dùng</li>
              {/* <!--  --> */}
              <li>
                <NavLinkCustom to={path.customer.path}>
                  <i className="menu-icon fa fa-users"></i>Khách hàng
                </NavLinkCustom>
              </li>
              {/* <!--  --> */}
              <li>
                <NavLinkCustom to={path.admin.path}>
                  <i className="menu-icon fa fa-user"></i>Quản trị
                </NavLinkCustom>
              </li>
              {/* <!--  --> */}
              <li>
                <NavLinkCustom to={path.lockAccount.path}>
                  <i className="menu-icon ti-user"></i>Tài khoản bị khóa
                </NavLinkCustom>
              </li>
              {/* <!-- /.menu-title --> */}
              <li className="menu-title">Quảng cáo</li>
              {/* <!--  --> */}
              <li>
                <NavLinkCustom to={path.banner.path}>
                  <i className="menu-icon fa fa-glass"></i>Banner
                </NavLinkCustom>
              </li>
            </ul>
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </nav>
      </aside>
    </>
  );
}
export default SlideBar;
