"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _icons = require("@material-ui/icons");
var _react = _interopRequireDefault(require("react"));
var _SelectElem = _interopRequireDefault(require("./SelectElem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = {
  title: 'TriDyme/SelectElem',
  component: _SelectElem.default,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
const Template = args => /*#__PURE__*/_react.default.createElement(_SelectElem.default, args);
const Default = exports.Default = Template.bind({});
Default.args = {
  data: {
    label: "Appuis",
    value: "Encastre",
    list: [{
      id: "Encastre",
      name: "Encastrement"
    }, {
      id: "Libre",
      name: "Libre"
    }, {
      id: "Appuie",
      name: "Rotule"
    }]
  }
};