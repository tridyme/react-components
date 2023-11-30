"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
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

var SearchBarElem = function SearchBarElem(_ref) {
  var input = _ref.input,
      _onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      onSearch = _ref.onSearch,
      onReset = _ref.onReset,
      disabled = _ref.disabled;
  var classes = useStyles();

  var onKeyDown = function onKeyDown(e) {
    if (e.key === "Enter") {
      if (e.target.value.length === 0) {
        e.preventDefault();
      } else {
        e.preventDefault();
        onSearch();
      }
    }
  };

  var onSearchCheck = function onSearchCheck() {
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
      onChange: function onChange(e) {
        return _onChange(e.target.value);
      },
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

var _default = SearchBarElem;
exports.default = _default;