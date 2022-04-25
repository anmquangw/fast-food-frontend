import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import IPage from "../../interfaces/page";
import { StatisticsActions } from "../../actions";

import Breakcrumb from "../../components/Breakcrumb";
import { RouteComponentProps, withRouter } from "react-router-dom";
import path from "../../config/base.path";

import CardChart from "./components/CardChart";
import BarChart from "./components/BarChart";
import SalesChart from "./components/SalesChart";

const StatisticsPage: React.FunctionComponent<
  IPage & RouteComponentProps<any>
> = () => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(StatisticsActions.default.getList());
  }, [dispatch]);

  return (
    <>
      <Breakcrumb
        title={path.statistics.name}
        paths={[{ ...path.dashBoard }, { ...path.statistics }]}
      />

      <div className="content">
        <div className="animated fadeIn">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="mb-3">Thống kê theo ngày</h4>
                  <CardChart />
                </div>
              </div>
              {/* <!-- /# card --> */}
            </div>
            {/* <!-- /# column --> */}
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="mb-3">Doanh thu theo tháng </h4>
                  <BarChart />
                </div>
              </div>
            </div>
            {/* <!-- /# column --> */}
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="mb-3">Doanh thu theo năm</h4>
                  <SalesChart />
                </div>
              </div>
            </div>
            {/* <!-- /# column --> */}
          </div>
        </div>
        {/* <!-- .animated --> */}
      </div>
    </>
  );
};

export default withRouter(StatisticsPage);
