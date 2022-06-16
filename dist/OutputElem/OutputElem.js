"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OutputElem = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _ToolTips = _interopRequireDefault(require("../ToolTips/ToolTips"));

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

var OutputElem = function OutputElem(_ref) {
  var data = _ref.data,
      inputsData = _ref.inputsData,
      calculationFunctions = _ref.calculationFunctions,
      updateValue = _ref.updateValue;
  var classes = useStyles();
  var outputValue = calculationFunctions(inputsData);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_core.FormControl, {
    className: (0, _clsx.default)(classes.margin, classes.withoutLabel, classes.textField) // variant="outlined"

  }, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
    htmlFor: "outlined-adornment-amount"
  }, data.description), /*#__PURE__*/_react.default.createElement(_core.Input, {
    className: classes.input,
    name: data.name,
    placeholder: data.name,
    value: outputValue,
    startAdornment: /*#__PURE__*/_react.default.createElement(_core.InputAdornment, {
      position: "start",
      className: classes.inputAdornment
    }, data.text, /*#__PURE__*/_react.default.createElement(_ToolTips.default, {
      description: data.description,
      target: data.text
    })),
    endAdornment: /*#__PURE__*/_react.default.createElement(_core.InputAdornment, {
      position: "end"
    }, data.unit)
  })));
}; // const OutputElem1 = ({
//   data,
//   inputsData,
//   calculationFunctions,
//   updateValue
// }) => {
//   const outputValue = calculationFunctions(inputsData);
//   return (
//     <InputGroup className="outputElem">
//       <InputGroupAddon className="groupAddon" addonType="prepend">
//         <InputGroupText className="groupText">{data.text}</InputGroupText>
//       </InputGroupAddon>
//       <InputGroupAddon className="groupAddon" addonType="prepend">
//         <ToolTips
//           description={data.description}
//           target={data.text}
//         />
//       </InputGroupAddon>
//       <Input
//         className="inputValue"
//         type="number"
//         name={data.name}
//         placeholder={data.name}
//         value={outputValue}
//       />
//       <InputGroupAddon addonType="append">
//         <Input
//           className="inputUnit"
//           type="text"
//           value={data.unit}
//           disabled
//         />
//       </InputGroupAddon>
//     </InputGroup>
//   );
// };


exports.OutputElem = OutputElem;