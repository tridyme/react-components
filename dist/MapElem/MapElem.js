"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapElem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactMapGl = _interopRequireWildcard(require("react-map-gl"));

var _core = require("@material-ui/core");

var _Pins = _interopRequireDefault(require("./components/Pins"));

require("mapbox-gl/dist/mapbox-gl.css");

var _mapboxGl2 = _interopRequireDefault(require("mapbox-gl/dist/mapbox-gl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable import/no-webpack-loader-syntax, import/no-unresolved, @typescript-eslint/no-var-requires */
_mapboxGl2.default.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
/* eslint-enable import/no-webpack-loader-syntax, import/no-unresolved, @typescript-eslint/no-var-requires*/
// // eslint-disable-next-line import/no-webpack-loader-syntax
// mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
// import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';
// mapboxgl.workerClass = MapboxWorker;

var TOKEN = "pk.eyJ1IjoidHJpYXp1ciIsImEiOiJja25qN3VucjkzdmY5MnFwOTh0N2x3azU0In0.qSCTe3UaV9YwBYddKOFPWA";
var geolocateStyle = {
  top: 0,
  left: 0,
  padding: "10px"
};
var fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: "10px"
};
var navStyle = {
  top: 72,
  left: 0,
  padding: "10px"
};
var scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: "10px"
};

var MapElem = function MapElem(_ref) {
  var title = _ref.title,
      places = _ref.places,
      height = _ref.height;

  var _useState = (0, _react.useState)({
    width: 400,
    height: height || 600,
    latitude: places.length !== 1 ? 47.088528 : places[0].latitude,
    longitude: places.length !== 1 ? 2.375996 : places[0].longitude,
    zoom: places.length !== 1 ? 4 : 15
  }),
      _useState2 = _slicedToArray(_useState, 2),
      viewport = _useState2[0],
      setViewport = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      popupInfo = _useState4[0],
      setPopupInfo = _useState4[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, null, title), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_reactMapGl.default, _extends({}, viewport, {
    width: "100%",
    height: "".concat(height || 600, "px"),
    mapStyle: "mapbox://styles/triazur/ck4oeg8gg0v4q1co4pyhsqjlr",
    onViewportChange: setViewport,
    mapboxAccessToken: TOKEN
  }), /*#__PURE__*/_react.default.createElement(_Pins.default, {
    data: places,
    onClick: setPopupInfo
  }), popupInfo && /*#__PURE__*/_react.default.createElement(_reactMapGl.Popup, {
    tipSize: 5,
    anchor: "top",
    longitude: popupInfo.longitude,
    latitude: popupInfo.latitude,
    closeOnClick: false,
    onClose: setPopupInfo
  }, /*#__PURE__*/_react.default.createElement("p", null), /*#__PURE__*/_react.default.createElement("p", null, popupInfo.type), /*#__PURE__*/_react.default.createElement("p", null, popupInfo.description)), /*#__PURE__*/_react.default.createElement(_reactMapGl.GeolocateControl, {
    style: geolocateStyle
  }), /*#__PURE__*/_react.default.createElement(_reactMapGl.FullscreenControl, {
    style: fullscreenControlStyle
  }), /*#__PURE__*/_react.default.createElement(_reactMapGl.NavigationControl, {
    style: navStyle
  }), /*#__PURE__*/_react.default.createElement(_reactMapGl.ScaleControl, {
    style: scaleControlStyle
  })))));
};

exports.MapElem = MapElem;