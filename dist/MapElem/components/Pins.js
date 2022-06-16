"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactMapGl = require("react-map-gl");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ICON = "M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z";
var SIZE = 20; // Important for perf: the markers never change, avoid rerender when the map viewport changes

var Pins = function Pins(props) {
  var data = props.data,
      _onClick = props.onClick;
  return data.map(function (site, index) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, site.longitude && site.latitude && /*#__PURE__*/React.createElement(_reactMapGl.Marker, {
      key: "marker-".concat(index),
      longitude: site.longitude,
      latitude: site.latitude
    }, /*#__PURE__*/React.createElement("svg", {
      height: SIZE,
      viewBox: "0 0 24 24",
      style: {
        cursor: "pointer",
        fill: site.alert ? "red" : "green",
        stroke: "none",
        transform: "translate(".concat(-SIZE / 2, "px,").concat(-SIZE, "px)")
      },
      onClick: function onClick() {
        return _onClick(site);
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: ICON
    }))));
  });
};

var _default = /*#__PURE__*/React.memo(Pins);

exports.default = _default;