import { useSelector, shallowEqual } from "react-redux";
import Loading from "../../../components/Loading";

function Chart() {
  const statisticsDetail: any = useSelector(
    (state: any) => state.statisticsDetailReducer,
    shallowEqual
  );
  function convertCurrency(price: number) {
    return price?.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }
  if (statisticsDetail.isLoading) return <Loading />;

  return (
    <>
      <div className="progress-box progress-1">
        <h4 className="por-title">Doanh thu</h4>
        <div className="por-txt">
          {convertCurrency(statisticsDetail?.data[0]?.ordersSum[0]?.sum)}
        </div>
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
