"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonElem;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@material-ui/core");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ButtonElem(_ref) {
  let {
    label,
    style,
    onClick
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_core.Button, {
    variant: "contained",
    onClick: onClick,
    style: style
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