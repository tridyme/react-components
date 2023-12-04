"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _styles = require("@material-ui/core/styles");
var _core = require("@material-ui/core");
var _ToolTips = _interopRequireDefault(require("../ToolTips"));
require("./InputElem.css");
var _reactNumberFormat = require("react-number-format");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: '25ch'
  },
  input: {
    color: 'blue'
    // backgroundColor: 'lightblue'
  },
  inputAdornment: {
    paddingRight: '1em',
    color: 'black'
  }
}));
const InputElem = _ref => {
  let {
    data,
    onChange,
    props,
    style
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_core.FormControl, {
    className: (0, _clsx.default)(classes.margin, classes.withoutLabel, classes.textField)
    // variant="outlined"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.label
  }, data.description), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, typeof data.value === "number" ? /*#__PURE__*/_react.default.createElement(_reactNumberFormat.NumericFormat, {
    type: "text",
    style: {
      width: '100%',
      color: props.disabled ? 'black' : '#0082DE'
    },
    onChange: onChange,
    value: data.value,
    disabled: props.disabled
  }) : /*#__PURE__*/_react.default.createElement(_core.Input, {
    style: {
      border: 0,
      color: "#0082DE",
      textAlign: 'center'
    },
    type: "text",
    onChange: onChange,
    value: data.value,
    disableUnderline: true
  }), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    style: {
      marginLeft: '1rem'
    }
  }, data.unit), !props.disableInputAdornment && /*#__PURE__*/_react.default.createElement(_core.InputAdornment, {
    position: "start",
    className: classes.inputAdornment
  }, data.text, /*#__PURE__*/_react.default.createElement(_ToolTips.default, {
    description: data.description,
    target: data.text,
    color: style.toolTipsColor
  })))));
};
InputElem.propTypes = {
  data: _propTypes.default.object.isRequired,
  onChange: _propTypes.default.func
};
InputElem.defaultProps = {
  onChange: undefined
};
var _default = exports.default = InputElem;