"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _SearchBarElem = _interopRequireDefault(require("./SearchBarElem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = {
  title: 'TriDyme/SearchBarElem',
  component: _SearchBarElem.default,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
const Template = args => /*#__PURE__*/_react.default.createElement(_SearchBarElem.default, args);
const Default = exports.Default = Template.bind({});
Default.args = {
  data: {
    input: '',
    placeholder: "Example of search element",
    disabled: false
  }
};