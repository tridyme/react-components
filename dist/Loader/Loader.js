"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  });
};

exports.Loader = Loader;