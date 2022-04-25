import { useSelector, shallowEqual } from "react-redux";
import { useRef } from "react";
import Chart from "chart.js";
import Loading from "../../../components/Loading";

function BarChart(props: any) {
  const statistics: any = useSelector(
    (state: any) => state.statisticsReducer,
    shallowEqual
  );

  const chartRef = useRef<Chart | null>(null);

  const canvasCallback = (canvas: HTMLCanvasElement | null) => {
    const months = statistics?.months?.map((month: any) => month.month);
    const sums = statistics?.months?.map((month: any) => month.sum);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: months,
          datasets: [
            {
              label: "Thu",
              data: sums,
              borderColor: "rgba(0, 194, 146, 0.9)",
              borderWidth: 0,
              backgroundColor: "rgba(0, 194, 146, 0.5)",
            },
            {
              label: "Chi",
              data: sums,
              borderColor: "rgba(0,0,0,0.09)",
              borderWidth: 0,
              backgroundColor: "rgba(0,0,0,0.07)",
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    }
  };

  if (statistics.isLoading) return <Loading />;

  return (
    <div className="self-center w-1/2">
      <div className="overflow-hidden">
        <canvas ref={canvasCallback}></canvas>
      </div>
    </div>
  );
}

export default BarChart;
