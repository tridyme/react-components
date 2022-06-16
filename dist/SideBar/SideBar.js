"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _reactstrap = require("reactstrap");

require("./SideBar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SideBar = function SideBar(_ref) {
  var isOpenSideBar = _ref.isOpenSideBar,
      itemSideBar = _ref.itemSideBar;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: isOpenSideBar ? "sidebar-open" : "sidebar-close"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Nav, {
    id: "sidebar-wrapper"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "sidebar-nav nav-pills nav-stacked",
    id: "menu"
  }, itemSideBar.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_reactstrap.NavItem, {
      key: item.title
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: item.path,
      id: "sidebarItem"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: item.img,
      alt: item.title
    }), item.title));
  }))));
};

exports.SideBar = SideBar;
SideBar.propTypes = {
  isOpenSideBar: _propTypes.default.bool.isRequired,
  itemSideBar: _propTypes.default.arrayOf(_propTypes.default.object).isRequired
};