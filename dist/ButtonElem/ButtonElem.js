"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonElem;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@material-ui/core");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ButtonElem(_ref) {
  let {
    label,
    onClick,
    ...style
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_core.Button, _extends({
    onClick: onClick
  }, style), label);
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