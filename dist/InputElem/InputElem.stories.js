"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _icons = require("@material-ui/icons");
var _react = _interopRequireDefault(require("react"));
var _InputElem = _interopRequireDefault(require("./InputElem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = {
  title: 'TriDyme/InputElem',
  component: _InputElem.default,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
const Template = args => /*#__PURE__*/_react.default.createElement(_InputElem.default, args);
const Default = exports.Default = Template.bind({});
Default.args = {
  data: {
    text: "b",
    value: 3,
    description: "largeur de la section",
    unit: "m"
  }
};