"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _styles = require("@material-ui/core/styles");
var _core = require("@material-ui/core");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useStyles = (0, _styles.makeStyles)(theme => ({
  card: {
    // minWidth: 175,
    textDecoration: 'none'
    // margin: theme.spacing(1),
  },

  link: {
    textDecoration: 'none'
  },
  // bullet: {
  //   display: 'inline-block',
  //   margin: '0 2px',
  //   transform: 'scale(0.8)',
  // },
  title: {
    fontSize: 23
    // color: 'blue'
  },

  pos: {
    marginBottom: 12
  },
  badge: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));
const CardElem = _ref => {
  let {
    title,
    subtitle,
    children
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Card, {
    className: classes.card,
    elevation: 3
  }, /*#__PURE__*/_react.default.createElement(_core.CardHeader
  // action={
  // 	<IconButton
  // 		aria-label="settings"
  // 		onClick={() => {
  // 			// deleteRoom(room._id)
  // 		}}
  // 	>
  // 		<CloseIcon />
  // 	</IconButton>
  // }
  , {
    title: /*#__PURE__*/_react.default.createElement("div", {
      className: classes.title
    }, title),
    subheader: subtitle
  }), /*#__PURE__*/_react.default.createElement(_core.CardContent, null, children), /*#__PURE__*/_react.default.createElement(_core.CardActions, null));
};
var _default = exports.default = CardElem;