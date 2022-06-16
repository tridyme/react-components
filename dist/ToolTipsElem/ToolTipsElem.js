"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolTipsElem = void 0;

var _core = require("@material-ui/core");

var ToolTipsElem = function ToolTipsElem(_ref) {
  var title = _ref.title,
      placement = _ref.placement,
      disabled = _ref.disabled,
      className = _ref.className,
      onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(_core.Tooltip, {
    arrow: true,
    title: title,
    placement: placement
  }, /*#__PURE__*/React.createElement(_core.Fab, {
    size: "small",
    className: className,
    onClick: onClick,
    disabled: disabled
  }, children));
};

exports.ToolTipsElem = ToolTipsElem;