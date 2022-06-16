"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolTipsElem = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToolTipsElem = function ToolTipsElem(_ref) {
  var title = _ref.title,
      placement = _ref.placement,
      className = _ref.className,
      onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    arrow: true,
    title: title,
    placement: placement
  }, /*#__PURE__*/_react.default.createElement(_core.Fab, {
    size: "small",
    className: className,
    onClick: onClick
  }, children));
};

exports.ToolTipsElem = ToolTipsElem;