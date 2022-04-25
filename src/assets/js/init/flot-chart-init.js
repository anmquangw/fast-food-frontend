(function ($) {
  "use strict"; // Start of use strict

  var SufeeAdmin = {
    line2Flot: function () {
      // first chart
      var chart1Options = {
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
        },
        legend: {
          show: false,
        },
        grid: {
          color: "#fff",
          hoverable: true,
          borderWidth: 0,
          backgroundColor: "transparent",
        },
        tooltip: {
          show: true,
          content: "y: %y",
          color: "#000",
        },
      };
      var dataFromDate = [];
      var data = [
        640000000, 634000000, 636080000, 630740000, 603880000, 630680000,
        630680000, 629980000, 629980000, 629980000, 629980000, 629980000,
      ];
      var nowDate = new Date().getDate();

      for (let i = 0; i < data.length; i++)
        dataFromDate.push([Date.parse(`2022-04-${nowDate - i}`), data[i]]);

      var chart1Data = {
        label: "chart1",
        color: "#007BFF",
        data: dataFromDate,
      };
      $.plot($("#chart1"), [chart1Data], chart1Options);
    },
  };

  $(document).ready(function () {
    SufeeAdmin.line2Flot();
  });
})(jQuery);
