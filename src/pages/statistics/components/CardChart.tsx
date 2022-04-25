import { useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import Loading from "../../../components/Loading";

function SalesChart(props: any) {
  const statistics: any = useSelector(
    (state: any) => state.statisticsReducer,
    shallowEqual
  );

  useEffect(() => {
    if (!statistics.isLoading) {
      const days = statistics?.days?.map((day: any) => day.day);
      const sums = statistics?.days?.map((day: any) => day.sum);
      (function ($: any) {
        const chart1 = $("#chart1");
        if (chart1) {
          var SufeeAdmin = {
            line2Flot: function () {
              // first chart
              var dataFromDate = [];
              var data = sums;
              // var nowDate = new Date().getDate();

              for (let i = 0; i < data?.length; i++)
                dataFromDate.push([new Date(days[i]), data[i]]);

              $.plot(
                chart1,
                [
                  {
                    label: "chart1",
                    color: "#007BFF",
                    data: dataFromDate,
                  },
                  {
                    label: "chart2",
                    color: "#000000",
                    data: dataFromDate,
                  },
                ],
                {
                  series: {
                    lines: {
                      show: true,
                    },
                    points: {
                      show: true,
                    },
                  },
                  xaxis: {
                    mode: "time",
                    timeformat: "%d/%m",
                    minTickSize: [1, "day"],
                  },
                  grid: {
                    hoverable: true,
                    color: "#fff",
                    borderWidth: 0,
                    backgroundColor: "transparent",
                  },
                  legend: {
                    show: false,
                  },

                  tooltip: {
                    show: true,
                    content: "y: %y",
                    color: "#000",
                  },
                }
              );
            },
          };

          $(document).ready(function () {
            SufeeAdmin.line2Flot();
          });
        }
      })(jQuery);
    }
  }, [statistics.days, statistics.isLoading]);

  if (statistics.isLoading) return <Loading />;

  return (
    <div className="flot-container">
      <div id="chart1" style={{ width: "100%", height: "275px" }}></div>;
    </div>
  );
}

export default SalesChart;
