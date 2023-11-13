"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("@material-ui/core/styles");
var _core = require("@material-ui/core");
var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing(1)
  },
  input: {
    backgroundColor: theme.palette.secondary.main === "#000000" ? "#ffffff" : theme.palette.secondary.main
  },
  inputDisabled: {
    color: "#000000",
    backgroundColor: "transparent"
  },
  inputAdornment: {
    color: 'black'
  },
  label: {
    fontWeight: "bold",
    width: "100%"
  }
}));
const SelectElem = _ref => {
  let {
    label,
    value,
    name,
    placeholder,
    disabled,
    onChange,
    list,
    children
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.FormControl, {
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.label
  }, label), /*#__PURE__*/_react.default.createElement(_core.Select, {
    className: disabled ? classes.inputDisable : classes.input,
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    placeholder: placeholder,
    name: name,
    value: value,
    onChange: onChange,
    disableUnderline: true,
    IconComponent: () => /*#__PURE__*/_react.default.createElement(_ExpandMore.default, {
      color: "primary"
    })
  }, list === null || list === void 0 ? void 0 : list.map((item, index) => /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
    key: index,
    value: item.id
  }, "".concat(item.name))), children));
};
var _default = exports.default = SelectElem;