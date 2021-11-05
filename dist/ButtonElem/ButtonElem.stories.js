"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ButtonElem = _interopRequireDefault(require("./ButtonElem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'TriDyme/Button',
  component: _ButtonElem.default,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_ButtonElem.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: 'Analysis'
};