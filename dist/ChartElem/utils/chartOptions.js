"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var chartOptions = function chartOptions(data) {
  var findMinMax = function findMinMax(arr, field) {
    var min = 0;
    var max = 0;

    if (typeof arr !== 'undefined' && arr.length > 1) {
      min = Number(arr[0][field]);
      max = Number(arr[0][field]);

      for (var i = 0; i < arr.length; i += 1) {
        var v = Number(arr[i][field]);
        min = v < min ? v : min;
        max = v > max ? v : max;
      }
    }

    return [min, max];
  };

  var Xminmax = findMinMax(data.value, 'x');
  var Yminmax = findMinMax(data.value, 'y');
  var Xmin = Xminmax[0];
  var Xmax = Xminmax[1];
  var Ymin = Yminmax[0];
  var Ymax = Yminmax[1];
  var DeltaX = Xmax - Xmin;
  var DeltaY = Ymax - Ymin;
  var DeltaMax = Math.max(DeltaX, DeltaY);
  Xmax = Xmin + DeltaMax;
  Ymax = Ymin + DeltaMax;
  return {
    showLines: true,
    animation: false,
    legend: {
      display: true
    },
    tooltips: {
      callbacks: {
        label: function label(t) {
          var numx = t.xLabel.toFixed(3);
          var numy = t.yLabel.toFixed(3);
          var label = "X: ".concat(numx, " Y : ").concat(numy);
          return label;
        }
      }
    },
    elements: {
      point: {
        radius: 1
      }
    },
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom',
        ticks: {
          min: Xmin,
          max: Xmax // stepSize: DeltaMax

        },
        scaleLabel: {
          display: true,
          labelString: "".concat(data.axisName.x, "(").concat(data.unit.x, ")")
        }
      }],
      yAxes: [{
        type: 'linear',
        position: 'bottom',
        ticks: {
          min: Ymin,
          max: Ymax // stepSize: DeltaMax

        },
        scaleLabel: {
          display: true,
          labelString: "".concat(data.axisName.y, "(").concat(data.unit.y, ")")
        }
      }]
    }
  };
};

var _default = chartOptions;
exports.default = _default;