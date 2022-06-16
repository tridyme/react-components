"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThreeDElem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactThreeFiber = require("react-three-fiber");

var _Controls = require("./Components/Controls");

var _Box = require("./Components/Elements/Box/Box");

var _Node = require("./Components/Elements/Node/Node");

var _Line = require("./Components/Elements/Line/Line");

var _Model = require("./Components/Elements/Model/Model");

var _Arrow = require("./Components/Elements/Arrow/Arrow");

var _GLTFLoader = require("three/examples/jsm/loaders/GLTFLoader");

var _webIfcViewer = require("web-ifc-viewer");

var _IFCLoader = require("web-ifc-three/IFCLoader");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var listnodes = [{
  name: "A",
  X: 0,
  Y: 0,
  Z: 0
}, {
  name: "B",
  X: 3,
  Y: 3,
  Z: 0
}, {
  name: "C",
  X: -3,
  Y: 3,
  Z: 0
}];

var ThreeDElem = function ThreeDElem(_ref) {
  var props = _ref.props,
      Children = _ref.Children;

  var _useState = (0, _react.useState)(listnodes),
      _useState2 = _slicedToArray(_useState, 2),
      listNodes = _useState2[0],
      setListNodes = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loaded: false,
    loading_ifc: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      state = _useState4[0],
      setState = _useState4[1];

  (0, _react.useEffect)(function () {// const container = document.getElementById('viewer-container');
    // const viewer = new IfcViewerAPI({ container });
    // const url = "https://raw.githubusercontent.com/IFCjs/test-ifc-files/main/Revit/TESTED_Simple_project_01.ifc";
    // window.addEventListener('DOMContentLoaded', (event) => {
    // 	ifcLoader.load(url, (geometry) => scene.add(geometry));
    // });
    // viewer.addAxes()
    // viewer.addGrid()
    // viewer.setWasmPath('../../');
  }, []);
  return /*#__PURE__*/_react.default.createElement(_reactThreeFiber.Canvas // orthographic
  , {
    style: {
      height: "100%",
      minHeight: "500px"
    },
    id: "viewer-container"
  }, /*#__PURE__*/_react.default.createElement("ambientLight", null), /*#__PURE__*/_react.default.createElement("pointLight", {
    position: [10, 10, 10]
  }), /*#__PURE__*/_react.default.createElement("axesHelper", null), /*#__PURE__*/_react.default.createElement("gridHelper", {
    size: 100,
    divisions: 100
  }), listNodes.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_Node.Node, {
      position: [item.X, item.Y, item.Z],
      key: index
    });
  }), Children, /*#__PURE__*/_react.default.createElement(_Controls.Controls, null));
};

exports.ThreeDElem = ThreeDElem;