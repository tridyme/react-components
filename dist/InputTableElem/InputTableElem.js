"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Input = _interopRequireDefault(require("@material-ui/core/Input"));
var _reactNumberFormat = require("react-number-format");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const InputTableElem = _ref => {
  let {
    headers,
    keys,
    data,
    ui,
    onChange,
    disabled,
    style
  } = _ref;
  // const [columns, setColumns] = useState(["nom", "valeur", "unitées", "description"]);
  const [rows, setRows] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    setRows(ui);
  }, []);
  const columnsWidth = style === null || style === void 0 ? void 0 : style.columnsWidth;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("table", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", {
    key: 0
  }, headers.map((header, index) => /*#__PURE__*/_react.default.createElement("td", {
    key: index,
    style: {
      textAlign: 'center',
      fontWeight: 'bold',
      width: columnsWidth === null || columnsWidth === void 0 ? void 0 : columnsWidth[index]
    }
  }, header)))), /*#__PURE__*/_react.default.createElement("tbody", null, rows.map((row, index) => /*#__PURE__*/_react.default.createElement("tr", {
    key: index * 4,
    style: {
      borderTop: "solid 0px #E8E8E8",
      borderBottom: "solid 0px #E8E8E8"
    }
  }, keys.map((key, keyIndex) => /*#__PURE__*/_react.default.createElement("td", {
    key: keyIndex,
    style: {
      textAlign: 'center'
    }
  }, keyIndex === 1 ? typeof data[row]['value'] === "number" ? /*#__PURE__*/_react.default.createElement(_reactNumberFormat.NumericFormat, {
    style: {
      border: disabled ? 1 : 0,
      color: disabled ? 'black' : data[row]['color'] || 'blue',
      textAlign: 'center'
    },
    type: "text",
    onChange: onChange(data[row]['id']),
    value: data[row]['value'],
    disabled: disabled
  }) : /*#__PURE__*/_react.default.createElement(_Input.default, {
    style: {
      border: 0,
      color: "blue",
      textAlign: 'center'
    },
    type: "text",
    onChange: onChange(data[row]['id']),
    value: data[row]['value'],
    disableUnderline: true
  }) : data["".concat(row)]["".concat(key)]['value'] ? data["".concat(row)]["".concat(key)]['value'] : "".concat(data["".concat(row)]["".concat(key)]))))))));
};
var _default = exports.default = InputTableElem;