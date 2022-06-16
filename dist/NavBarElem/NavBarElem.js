"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBarElem = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _clsx3 = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NavBarElem = function NavBarElem(_ref) {
  var title = _ref.title,
      classes = _ref.classes,
      handleDrawerOpen = _ref.handleDrawerOpen,
      open = _ref.open;
  // const classes = useStyles();
  // const { REACT_APP_LOGO, REACT_APP_COMPANY } = process.env;
  return /*#__PURE__*/_react.default.createElement(_core.AppBar, {
    position: "fixed",
    className: (0, _clsx3.default)(classes.appBar, _defineProperty({}, classes.appBarShift, open))
  }, /*#__PURE__*/_react.default.createElement(_core.Toolbar, null, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerOpen,
    edge: "start",
    className: (0, _clsx3.default)(classes.menuButton, _defineProperty({}, classes.hide, open))
  }, /*#__PURE__*/_react.default.createElement(_Menu.default, null)), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "h6",
    noWrap: true
  }, title), process.env.REACT_APP_COMPANY === "VBMC" && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "absolute",
      right: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://boxboisbim.mydatbim.com/mydatbimCom/mentions-legales",
    style: {
      color: "inherit",
      margin: "0 20px"
    },
    target: "_blank"
  }, "Mentions l\xE9gales"), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.datbim.com/template/contact/377864",
    style: {
      color: "inherit",
      margin: "0 20px"
    },
    target: "_blank"
  }, "Contact"))));
};

exports.NavBarElem = NavBarElem;