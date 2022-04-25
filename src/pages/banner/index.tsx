import React from "react";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import IPage from "../../interfaces/page";
import Breakcrumb from "../../components/Breakcrumb";
import path from "../../config/base.path";

import List from "./components/List";

const BannerPage: React.FunctionComponent<
  IPage & RouteComponentProps<any>
> = () => {
  return (
    <>
      <Breakcrumb
        title={path.banner.name}
        paths={[{ ...path.dashBoard }, { ...path.banner }]}
      />

      <div className="content">
        <div className="animated fadeIn">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <Link
                    className="btn btn-primary"
                    id="add"
                    to={path.bannerCreate.path}
                  >
                    <i
                      className="menu-icon fa fa-plus-circle"
                      style={{ marginRight: "5px" }}
                    ></i>
                    Thêm
                  </Link>
                </div>

                <div className="table-stats order-table ov-h">
                  <List />
                </div>
                {/* <!-- /.table-stats --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- .animated --> */}
      </div>
    </>
  );
};

export default withRouter(BannerPage);
