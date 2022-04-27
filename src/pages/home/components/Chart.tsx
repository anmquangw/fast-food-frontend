import { useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Loading from "../../../components/Loading";
import { OrderActions } from "../../../actions";
import Chartist from "chartist";
import $ from "jquery";

function Chart() {
  const statistics: any = useSelector(
    (state: any) => state.statisticsReducer,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    $(document).ready(function ($: any): any {
      // Traffic Chart using chartist
      if ($("#traffic-chart").length) {
        const months = statistics?.months?.map((month: any) => month.month);
        const sums: Array<any> = statistics?.months?.map(
          (month: any) => month.sum
        );
        const sumsR: Array<any> = sums.reduce(
          (init, item) => [item, ...init],
          []
        );

        var chart = new Chartist.Line(
          "#traffic-chart",
          {
            labels: months,
            series: [sumsR, sums],
          },
          {
            low: 0,
            showArea: true,
            showLine: false,
            showPoint: false,
            fullWidth: false,
            axisX: {
              showGrid: true,
            },
          }
        );

        chart.on("draw", function (data: any): any {
          if (data.type === "line" || data.type === "area") {
            data.element.animate({
              d: {
                begin: 2000 * data.index,
                dur: 2000,
                from: data.path
                  .clone()
                  .scale(1, 0)
                  .translate(0, data.chartRect.height())
                  .stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint,
              },
            });
          }
        });
      }
    });

    return () => {};
  }, [statistics]);

  useEffect(() => {
    dispatch(OrderActions.default.getList());
  }, [dispatch]);

  if (statistics.isLoading) return <Loading />;

  return (
    <>
      <div id="traffic-chart" className="traffic-chart"></div>
    </>
  );
}

export default Chart;
