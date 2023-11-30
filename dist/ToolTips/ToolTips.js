"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _core = require("@material-ui/core");
var _Help = _interopRequireDefault(require("@material-ui/icons/Help"));
require("./ToolTips.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ToolTips = props => {
  // const [status, setStatus] = useState(false);
  return (
    /*#__PURE__*/
    // <div className="tooltips">
    //   <div className="groupInfo" id={props.target}>
    //     <HelpIcon className="icon" />
    //   </div>
    //   <Tooltip placement="top" isOpen={status} target={props.target} toggle={() => setStatus(!status)}>
    //     {props.description}
    //   </Tooltip>
    // </div>
    _react.default.createElement(_core.Tooltip, {
      title: props.description,
      placement: "top"
    }, /*#__PURE__*/_react.default.createElement(_core.IconButton, null, /*#__PURE__*/_react.default.createElement(_Help.default, null)))
  );
};
var _default = exports.default = ToolTips;