"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layout = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var _NavBar = require("../NavBar/NavBar");

require("./Layout.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 12
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_NavBar.NavBar, null)), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Container, {
    fluid: false,
    className: "views-container"
  }, children)));
};

exports.Layout = Layout;