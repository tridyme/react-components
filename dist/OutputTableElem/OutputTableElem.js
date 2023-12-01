"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Table = _interopRequireDefault(require("@material-ui/core/Table"));
var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));
var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));
var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));
var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));
var _TableContainer = _interopRequireDefault(require("@material-ui/core/TableContainer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const mockData = {
  x: {
    text: 'x',
    unit: {
      text: 'm'
    },
    value: [0, 1, 2]
  },
  y: {
    text: 'y',
    unit: {
      text: 'm'
    },
    value: [0, 1, 2]
  },
  DepZ: {
    text: 'DepZ',
    unit: {
      text: 'mm'
    },
    value: [10, 10, 10]
  }
};
const OutputTableElem = _ref => {
  let {
    data,
    title
  } = _ref;
  const headers = Object.keys(data);
  const values = Object.values(data);
  const maxLength = Math.max(...Object.values(data).map(item => item.value.length));
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: '2rem'
    }
  }, " ", title), /*#__PURE__*/_react.default.createElement(_Table.default, {
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_TableHead.default, null, /*#__PURE__*/_react.default.createElement(_TableRow.default, null, headers.map((header, index) => /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    style: {
      textAlign: 'center',
      borderBottom: 'none',
      fontWeight: 'bold'
    }
  }, " ", values[index].text))), /*#__PURE__*/_react.default.createElement(_TableRow.default, null, headers.map((header, index) => /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    style: {
      textAlign: 'center',
      borderTop: 'none',
      padding: '1px',
      fontWeight: 'bold'
    }
  }, " ", "".concat(values[index].unit.text))))), /*#__PURE__*/_react.default.createElement(_TableBody.default, null, [...Array(maxLength)].map((_, rowIndex) => /*#__PURE__*/_react.default.createElement(_TableRow.default, {
    key: rowIndex
  }, headers.map((header, colIndex) => /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    key: colIndex,
    style: {
      textAlign: 'center'
    }
  }, data[header].value[rowIndex])))))));
};
var _default = exports.default = OutputTableElem;