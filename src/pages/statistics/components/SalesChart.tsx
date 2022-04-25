import { useSelector, shallowEqual } from "react-redux";
import { useRef } from "react";
import Chart from "chart.js";
import Loading from "../../../components/Loading";

function SalesChart(props: any) {
  const statistics: any = useSelector(
    (state: any) => state.statisticsReducer,
    shallowEqual
  );
  const chartRef = useRef<Chart | null>(null);

  const canvasCallback = (canvas: HTMLCanvasElement | null) => {
    const years = statistics?.years?.map((year: any) => year.year);
    const sums = statistics?.years?.map((year: any) => year.sum);
    if (!canvas) return;
    // const yearRange = [];
    // const nowYear = new Date().getFullYear();
    // for (let i = nowYear; i >= nowYear - 10; i--) yearRange.push(i);

    const ctx = canvas.getContext("2d");
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: years,
          datasets: [
            {
              label: "Doanh thu",
              data: sums,
              backgroundColor: "transparent",
              borderColor: "rgba(40,167,69,0.75)",
              borderWidth: 3,
              pointStyle: "circle",
              pointRadius: 5,
              pointBorderColor: "transparent",
              pointBackgroundColor: "rgba(40,167,69,0.75)",
            },
            {
              label: "Chi phí",
              data: sums,
              backgroundColor: "transparent",
              borderColor: "rgba(220,53,69,0.75)",
              borderWidth: 3,
              pointStyle: "circle",
              pointRadius: 5,
              pointBorderColor: "transparent",
              pointBackgroundColor: "rgba(220,53,69,0.75)",
            },
          ],
        },
        options: {
          responsive: true,
          tooltips: {
            mode: "index",
            titleFontSize: 12,
            titleFontColor: "#000",
            bodyFontColor: "#000",
            backgroundColor: "#fff",
            titleFontFamily: "Montserrat",
            bodyFontFamily: "Montserrat",
            cornerRadius: 3,
            intersect: false,
          },
          legend: {
            display: false,
            labels: {
              usePointStyle: true,
              fontFamily: "Montserrat",
            },
          },
          scales: {
            xAxes: [
              {
                display: true,
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
                scaleLabel: {
                  display: false,
                  labelString: "Month",
                },
              },
            ],
            yAxes: [
              {
                display: true,
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
                scaleLabel: {
                  display: true,
                  labelString: "Value",
                },
              },
            ],
          },
          title: {
            display: false,
            text: "Normal Legend",
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

export default SalesChart;
