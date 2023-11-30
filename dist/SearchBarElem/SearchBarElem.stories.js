"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SearchBarElem = _interopRequireDefault(require("./SearchBarElem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'TriDyme/SearchBarElem',
  component: _SearchBarElem.default,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_SearchBarElem.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  data: {
    input: '',
    placeholder: "Example of search element",
    disabled: false
  }
};