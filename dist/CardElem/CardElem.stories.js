"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _CardElem = _interopRequireDefault(require("./CardElem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = {
  title: 'TriDyme/CardElem',
  component: _CardElem.default,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
const Template = args => /*#__PURE__*/_react.default.createElement(_CardElem.default, args);
const Default = exports.Default = Template.bind({});
Default.args = {
  data: {
    title: 'Title',
    subtitle: 'Subtitle',
    children: /*#__PURE__*/_react.default.createElement("h3", null, "Content")
  }
};