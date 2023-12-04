"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _styles = require("@material-ui/core/styles");
var _core = require("@material-ui/core");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const useStyles = (0, _styles.makeStyles)(theme => ({
  select: {
    // margin: theme.spacing(1),
    maxWidth: 350,
    border: '0px'
  }
}));
const CheckBoxElem = _ref => {
  let {
    label,
    onClick,
    checked
  } = _ref;
  //const classes = useStyles();

  const classes = {};
  return /*#__PURE__*/_react.default.createElement(_core.FormControlLabel, {
    label: label,
    labelPlacement: "end",
    control: /*#__PURE__*/_react.default.createElement(Checkbox, {
      size: "small",
      color: "primary"
    }),
    onClick: onClick,
    checked: checked
  });
};
var _default = exports.default = CheckBoxElem;