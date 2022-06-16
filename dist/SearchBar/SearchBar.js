"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _RotateLeft = _interopRequireDefault(require("@material-ui/icons/RotateLeft"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    search: {
      height: "3em",
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "100%",
      // marginBotton: "2em",
      "&:disabled": {
        cursor: "not-allowed"
      }
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      border: "none",
      color: "black" // "&:hover": {
      //   backgroundColor: "#E6464D",
      //   color: "white",
      // },
      // "&:disabled": {
      //   border: "none",
      // },

    }
  };
});

var SearchBar = function SearchBar(_ref) {
  var keyword = _ref.keyword,
      _onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      className = _ref.className,
      onClickOne = _ref.onClickOne,
      onClickTwo = _ref.onClickTwo,
      disabled = _ref.disabled,
      input = _ref.input;
  var classes = useStyles();

  var onKeyDown = function onKeyDown(e) {
    if (e.key === "Enter") {
      if (e.target.value.length === 0) {
        e.preventDefault();
      } else {
        e.preventDefault();
        onClickOne();
      }
    }
  };

  var onClickOneCheck = function onClickOneCheck() {
    // console.log("input ==>", input);
    if (input.length > 0) {
      onClickOne();
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
      onChange: function onChange(e) {
        return _onChange(e.target.value);
      },
      onKeyDown: onKeyDown
    }), /*#__PURE__*/_react.default.createElement(_core.ButtonGroup, {
      "aria-label": "search button group"
    }, /*#__PURE__*/_react.default.createElement(_core.Button, {
      className: classes.iconButton,
      disabled: disabled,
      onClick: onClickOneCheck
    }, /*#__PURE__*/_react.default.createElement(_Search.default, null)), /*#__PURE__*/_react.default.createElement(_core.Button, {
      className: classes.iconButton,
      disabled: disabled,
      onClick: onClickTwo
    }, /*#__PURE__*/_react.default.createElement(_RotateLeft.default, null))))
  );
};

exports.SearchBar = SearchBar;