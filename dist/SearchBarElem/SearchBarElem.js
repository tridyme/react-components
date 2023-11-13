"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("@material-ui/core/styles");
var _core = require("@material-ui/core");
var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));
var _RotateLeft = _interopRequireDefault(require("@material-ui/icons/RotateLeft"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const useStyles = (0, _styles.makeStyles)(theme => ({
  search: {
    height: "3em",
    // padding: "4px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    // marginBotton: "2em",
    "&:disabled": {
      cursor: "not-allowed"
    }
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  iconButton: {
    border: "none",
    color: "black"
    // "&:hover": {
    //   backgroundColor: "#E6464D",
    //   color: "white",
    // },
    // "&:disabled": {
    //   border: "none",
    // },
  }
}));

const SearchBarElem = _ref => {
  let {
    input,
    onChange,
    placeholder,
    onSearch,
    onReset,
    disabled
  } = _ref;
  const classes = useStyles();
  const onKeyDown = e => {
    if (e.key === "Enter") {
      if (e.target.value.length === 0) {
        e.preventDefault();
      } else {
        e.preventDefault();
        onSearch();
      }
    }
  };
  const onSearchCheck = () => {
    if (input.length > 0) {
      onSearch();
    }
  };
  return (
    /*#__PURE__*/
    // <Input
    //     value={keyword}
    //     placeholder={placeholder}
    //     onChange={(e) => onChange(e.target.value)}
    //     className={className}
    // />
    _react.default.createElement(_core.Paper, {
      component: "form",
      className: classes.search
    }, /*#__PURE__*/_react.default.createElement(_core.InputBase, {
      disabled: disabled,
      value: input,
      className: classes.input,
      placeholder: placeholder,
      inputProps: {
        "aria-label": "search google maps"
      },
      onChange: e => onChange(e.target.value),
      onKeyDown: onKeyDown
    }), /*#__PURE__*/_react.default.createElement(_core.ButtonGroup, {
      "aria-label": "search button group"
    }, /*#__PURE__*/_react.default.createElement(_core.Button, {
      className: classes.iconButton,
      disabled: disabled,
      onClick: onSearchCheck
    }, /*#__PURE__*/_react.default.createElement(_Search.default, null)), /*#__PURE__*/_react.default.createElement(_core.Button, {
      className: classes.iconButton,
      disabled: disabled,
      onClick: onReset
    }, /*#__PURE__*/_react.default.createElement(_RotateLeft.default, null))))
  );
};
var _default = exports.default = SearchBarElem;