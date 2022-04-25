import React from "react";
import IPage from "../../interfaces/page";
import { RouteComponentProps, withRouter } from "react-router-dom";

import Breakcrumb from "../../components/Breakcrumb";
import path from "../../config/base.path";
import List from "./components/List";

const OrderPage: React.FunctionComponent<
  IPage & RouteComponentProps<any>
> = () => {
  return (
    <>
      <Breakcrumb
        title={path.order.name}
        paths={[
          {
            ...path.dashBoard,
          },
          {
            ...path.order,
          },
        ]}
      />

      <div className="content">
        <div className="animated fadeIn">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
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

export default withRouter(OrderPage);
