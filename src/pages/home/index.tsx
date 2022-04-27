import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import IPage from "../../interfaces/page";
import List from "./components/List";
import Chart from "./components/Chart";
import Pie from "./components/Pie";
import Bar from "./components/Bar";
import Widgets from "./components/Widgets";
import { OrderActions, StatisticsActions } from "../../actions";

const HomePage: React.FunctionComponent<IPage> = (props) => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(OrderActions.default.getList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(StatisticsActions.default.getList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(StatisticsActions.default.getDetail());
  }, [dispatch]);

  return (
    <>
      <div className="content">
        {/* <!-- Animated --> */}
        <div className="animated fadeIn">
          {/* <!-- Widgets  --> */}
          <Widgets />
          {/* <!-- /Widgets --> */}
          {/* <!--  Traffic  --> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="box-title">Lợi nhuận </h4>
                </div>
                <div className="row">
                  <div className="col-lg-9">
                    <div className="card-body">
                      {/* <!-- <canvas id="TrafficChart"></canvas>   --> */}
                      <Chart />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="card-body">
                      <Bar />
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                </div>
                {/* <!-- /.row --> */}
                <div className="card-body"></div>
              </div>
            </div>
            {/* <!-- /# column --> */}
          </div>
          {/* <!--  /Traffic --> */}
          <div className="clearfix"></div>
          {/* <!-- Orders --> */}
          <div className="orders">
            <div className="row">
              <div className="col-xl-8">
                <div className="card">
                  <div className="card-body">
                    <h4 className="box-title">Trạng thái đơn </h4>
                  </div>
                  <div className="card-body--">
                    <div className="table-stats order-table ov-h">
                      <List />
                    </div>
                    {/* <!-- /.table-stats --> */}
                  </div>
                </div>
                {/* <!-- /.card --> */}
              </div>
              {/* <!-- /.col-lg-8 --> */}

              <div className="col-xl-4">
                <div className="row">
                  <div className="col-lg-6 col-xl-12">
                    <div className="card br-0">
                      <Pie />
                    </div>
                    {/* <!-- /.card --> */}
                  </div>
                </div>
              </div>
              {/* <!-- /.col-md-4 --> */}
            </div>
          </div>
          {/* <!-- /.orders --> */}
        </div>
        {/* <!-- .animated --> */}
      </div>
    </>
  );
};

export default HomePage;
