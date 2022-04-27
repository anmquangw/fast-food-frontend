import { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import Loading from "../../../components/Loading";

function Chart() {
  const [ordersSum, setOrdersSum] = useState(0);
  const statistics: any = useSelector(
    (state: any) => state.statisticsReducer,
    shallowEqual
  );

  useEffect(() => {
    if (Object.keys(statistics.data).length > 0) {
      setOrdersSum(statistics?.data?.ordersSum[0]?.sum);
    }
  }, [statistics]);

  function convertCurrency(price: number) {
    return price?.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }

  if (statistics.isLoading) return <Loading />;

  return (
    <>
      <div className="progress-box progress-1">
        <h4 className="por-title">Doanh thu</h4>
        <div className="por-txt">{convertCurrency(ordersSum)}</div>
        <div className="progress mb-2" style={{ height: "5px" }}>
          <div
            className="progress-bar bg-flat-color-1"
            role="progressbar"
            style={{ width: "40%" }}
            // aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
          ></div>
        </div>
      </div>
    </>
  );
}

export default Chart;
