(function ($) {
  "use strict";
  //Sales chart
  var ctx = document.getElementById("sales-chart");
  ctx.height = 150;

  const yearRange = [];
  const nowYear = new Date().getFullYear();

  for (let i = nowYear; i >= nowYear - 10; i--) yearRange.push(i);

  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: yearRange,
      type: "line",
      defaultFontFamily: "Montserrat",
      datasets: [
        {
          label: "Doanh thu",
          data: [
            100000000, 30000000, 15000000, 110000000, 50000000, 63000000,
            52000000, 40000000, 30000000, 80000000, 10000000,
          ],
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
          data: [
            90000000, 50000000, 40000000, 80000000, 35000000, 99000000,
            80000000, 60000000, 50000000, 40000000, 10000000,
          ],
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

  //bar chart
  var ctx = document.getElementById("barChart");
  //    ctx.height = 200;
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      datasets: [
        {
          label: "Thu",
          data: [
            65000000, 59000000, 80000000, 81000000, 56000000, 81000000,
            55000000, 100000000, 65000000, 65000000, 59000000, 80000000,
          ],
          borderColor: "rgba(0, 194, 146, 0.9)",
          borderWidth: "0",
          backgroundColor: "rgba(0, 194, 146, 0.5)",
        },
        {
          label: "Chi",
          data: [
            28000000, 48000000, 40000000, 19000000, 86000000, 27000000,
            76000000, 28000000, 40000000, 86000000, 19000000, 48000000,
          ],
          borderColor: "rgba(0,0,0,0.09)",
          borderWidth: "0",
          backgroundColor: "rgba(0,0,0,0.07)",
        },
      ],
    },
    options: {
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
})(jQuery);
