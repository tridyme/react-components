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

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
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
  };
});

var SelectElem = function SelectElem(_ref) {
  var label = _ref.label,
      value = _ref.value,
      name = _ref.name,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      list = _ref.list,
      children = _ref.children;
  var classes = useStyles();
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
    IconComponent: function IconComponent() {
      return /*#__PURE__*/_react.default.createElement(_ExpandMore.default, {
        color: "primary"
      });
    }
  }, list === null || list === void 0 ? void 0 : list.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
      key: index,
      value: item.id
    }, "".concat(item.name));
  }), children));
};

var _default = SelectElem;
exports.default = _default;