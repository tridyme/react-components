"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputElem = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _ToolTips = require("../ToolTips/ToolTips");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './InputElem.css';
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    margin: {
      margin: theme.spacing(1)
    },
    // withoutLabel: {
    //   marginTop: theme.spacing(3),
    // },
    // textField: {
    //   width: '25ch',
    // },
    input: {
      color: "blue" // backgroundColor: 'lightblue'

    },
    inputAdornment: {
      // paddingRight: '1em',
      color: "black"
    }
  };
});

var InputElem = function InputElem(_ref) {
  var text = _ref.text,
      description = _ref.description,
      value = _ref.value,
      unit = _ref.unit,
      onChange = _ref.onChange;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_core.FormControl, {
    className: (0, _clsx.default)(classes.margin, classes.withoutLabel, classes.textField) // variant="outlined"

  }, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
    htmlFor: "outlined-adornment-amount"
  }, description), /*#__PURE__*/_react.default.createElement(_core.Input, {
    className: onChange && classes.input,
    value: value,
    startAdornment: text && /*#__PURE__*/_react.default.createElement(_core.InputAdornment, {
      position: "start",
      className: classes.inputAdornment
    }, text, text && description && /*#__PURE__*/_react.default.createElement(_ToolTips.ToolTips, {
      description: description,
      target: text
    })),
    endAdornment: /*#__PURE__*/_react.default.createElement(_core.InputAdornment, {
      position: "end"
    }, unit),
    onChange: onChange
  })));
};

exports.InputElem = InputElem;