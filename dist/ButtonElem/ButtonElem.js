"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonElem;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonElem(_ref) {
  var label = _ref.label,
      backgroundColor = _ref.backgroundColor,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    onClick: onClick,
    style: backgroundColor && {
      backgroundColor: backgroundColor
    }
  }, label);
}

ButtonElem.propTypes = {
  backgroundColor: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};
ButtonElem.defaultProps = {
  backgroundColor: null,
  onClick: undefined
};