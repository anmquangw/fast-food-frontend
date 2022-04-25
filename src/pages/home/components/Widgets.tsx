import { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { StatisticsActions } from "../../../actions";
import Loading from "../../../components/Loading";

function Widgets() {
  const [ordersSum, setOrdersSum] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);

  const dispatch: Dispatch<any> = useDispatch();
  const statisticsDetail: any = useSelector(
    (state: any) => state.statisticsDetailReducer,
    shallowEqual
  );

  function convertCurrency(price: number) {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }

  useEffect(() => {
    dispatch(StatisticsActions.default.getDetail());
  }, [dispatch]);

  useEffect(() => {
    if (statisticsDetail.data[0]) {
      setOrdersSum(statisticsDetail?.data[0]?.ordersSum[0]?.sum);
      setOrdersCount(statisticsDetail?.data[0]?.ordersCount);
      setCustomersCount(statisticsDetail?.data[0]?.customersCount);
    }
  }, [statisticsDetail]);

  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="stat-widget-five">
                <div className="stat-icon dib flat-color-1">
                  <i className="pe-7s-cash"></i>
                </div>
                <div className="stat-content">
                  <div className="text-left dib">
                    <div className="stat-text">
                      {statisticsDetail.isLoading ? (
                        <Loading />
                      ) : (
                        <span className="count">
                          {convertCurrency(ordersSum)}
                        </span>
                      )}
                    </div>
                    <div className="stat-heading">Doanh thu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="stat-widget-five">
                <div className="stat-icon dib flat-color-2">
                  <i className="pe-7s-cart"></i>
                </div>
                <div className="stat-content">
                  <div className="text-left dib">
                    <div className="stat-text">
                      {statisticsDetail.isLoading ? (
                        <Loading />
                      ) : (
                        <>
                          <span className="count">{ordersCount}</span>
                        </>
                      )}
                    </div>
                    <div className="stat-heading">Đơn đã giao</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="stat-widget-five">
                <div className="stat-icon dib flat-color-4">
                  <i className="pe-7s-users"></i>
                </div>
                <div className="stat-content">
                  <div className="text-left dib">
                    <div className="stat-text">
                      {statisticsDetail.isLoading ? (
                        <Loading />
                      ) : (
                        <>
                          <span className="count">{customersCount}</span>
                        </>
                      )}
                    </div>
                    <div className="stat-heading">Người đã đặt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Widgets;
