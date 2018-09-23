'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderPanel = function (_wepy$component) {
  _inherits(SliderPanel, _wepy$component);

  function SliderPanel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SliderPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SliderPanel.__proto__ || Object.getPrototypeOf(SliderPanel)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      display: {
        default: 'true',
        twoWay: true
      },
      backgroundColor: {
        default: '#F8F8F8'
      },
      minHeight: {
        default: 0
      },
      btn: {
        default: 'false'
      }
    }, _this.data = {}, _this.methods = {
      close: function close() {
        this.display = 'false';
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SliderPanel, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return SliderPanel;
}(_wepy2.default.component);

exports.default = SliderPanel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlcl9wYW5lbC5qcyJdLCJuYW1lcyI6WyJTbGlkZXJQYW5lbCIsInByb3BzIiwiZGlzcGxheSIsImRlZmF1bHQiLCJ0d29XYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiLCJidG4iLCJkYXRhIiwibWV0aG9kcyIsImNsb3NlIiwiZXZlbnRzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLEssR0FBUTtBQUNOQyxlQUFTO0FBQ1BDLGlCQUFTLE1BREY7QUFFUEMsZ0JBQVE7QUFGRCxPQURIO0FBS05DLHVCQUFpQjtBQUNmRixpQkFBUztBQURNLE9BTFg7QUFRTkcsaUJBQVc7QUFDVEgsaUJBQVM7QUFEQSxPQVJMO0FBV05JLFdBQUs7QUFDSEosaUJBQVM7QUFETjtBQVhDLEssUUFlUkssSSxHQUFPLEUsUUFFUEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0E7QUFDTixhQUFLUixPQUFMLEdBQWUsT0FBZjtBQUNEO0FBSE8sSyxRQUtWUyxNLEdBQVMsRTs7Ozs7NkJBQ0EsQ0FDUjs7OztFQXpCc0MsZUFBS0MsUzs7a0JBQXpCWixXIiwiZmlsZSI6InNsaWRlcl9wYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJQYW5lbCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIGRpc3BsYXk6IHtcbiAgICAgICAgZGVmYXVsdDogJ3RydWUnLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICAgICAgZGVmYXVsdDogJyNGOEY4RjgnXG4gICAgICB9LFxuICAgICAgbWluSGVpZ2h0OiB7XG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgIH0sXG4gICAgICBidG46IHtcbiAgICAgICAgZGVmYXVsdDogJ2ZhbHNlJ1xuICAgICAgfVxuICAgIH07XG4gICAgZGF0YSA9IHtcbiAgICB9O1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gJ2ZhbHNlJztcbiAgICAgIH1cbiAgICB9O1xuICAgIGV2ZW50cyA9IHt9O1xuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==