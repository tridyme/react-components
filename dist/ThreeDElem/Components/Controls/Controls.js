"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Controls = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactThreeFiber = require("react-three-fiber");

var _OrbitControls = require("./OrbitControls");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _reactThreeFiber.extend)({
  OrbitControls: _OrbitControls.OrbitControls
});

var Controls = function Controls() {
  var controlsRef = (0, _react.useRef)();

  var _useThree = (0, _reactThreeFiber.useThree)(),
      camera = _useThree.camera,
      gl = _useThree.gl;

  (0, _reactThreeFiber.useFrame)(function () {
    return controlsRef.current && controlsRef.current.update();
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("orbitControls", {
    ref: controlsRef,
    args: [camera, gl.domElement],
    enableRotate: true,
    enablePan: true,
    maxDistance: 100,
    minDistance: 0,
    maxAzimuthAngle: Math.PI / 4,
    maxPolarAngle: Math.PI,
    minAzimuthAngle: -Math.PI / 4,
    minPolarAngle: 0
    /*minPolarAngle={Math.PI / 6}
    maxPolarAngle={Math.PI / 2}*/

  }));
};

exports.Controls = Controls;