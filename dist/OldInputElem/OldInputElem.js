"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OldInputElem = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _ToolTips = require("../ToolTips/ToolTips");

require("./InputElem.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    margin: {
      margin: theme.spacing(1)
    },
    withoutLabel: {
      marginTop: theme.spacing(3)
    },
    textField: {
      width: "25ch"
    },
    input: {
      color: "blue" // backgroundColor: 'lightblue'

    },
    inputAdornment: {
      paddingRight: "1em",
      color: "black"
    }
  };
});

var OldInputElem = function OldInputElem(_ref) {
  var data = _ref.data,
      updateValue = _ref.updateValue;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_core.FormControl, {
    className: (0, _clsx.default)(classes.margin, classes.withoutLabel, classes.textField) // variant="outlined"

  }, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
    htmlFor: "outlined-adornment-amount"
  }, data.description), /*#__PURE__*/_react.default.createElement(_core.Input, {
    className: classes.input,
    value: data.value,
    startAdornment: /*#__PURE__*/_react.default.createElement(_core.InputAdornment, {
      position: "start",
      className: classes.inputAdornment
    }, data.text, /*#__PURE__*/_react.default.createElement(_ToolTips.ToolTips, {
      description: data.description,
      target: data.text
    })),
    endAdornment: /*#__PURE__*/_react.default.createElement(_core.InputAdornment, {
      position: "end"
    }, data.unit),
    onChange: function onChange(e) {
      var val = Number(e.target.value);
      updateValue("inputs", data.name, val);
    }
  })));
};

exports.OldInputElem = OldInputElem;