"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Primary = void 0;
var _react = _interopRequireDefault(require("react"));
var _ButtonElem = _interopRequireDefault(require("./ButtonElem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = {
  component: _ButtonElem.default
};
const Primary = exports.Primary = {
  args: {
    label: 'Save',
    size: 'medium',
    variant: 'contained',
    disabled: false,
    color: "white",
    backgroundColor: "#007bff"
  }
};