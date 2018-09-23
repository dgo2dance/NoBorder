'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _tab = require('./../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

var _discover = require('./../components/discover.js');

var _discover2 = _interopRequireDefault(_discover);

var _bomb_screen = require('./../components/bomb_screen.js');

var _bomb_screen2 = _interopRequireDefault(_bomb_screen);

var _order_item = require('./../components/order_item.js');

var _order_item2 = _interopRequireDefault(_order_item);

var _bottomLoadMore = require('./../components/common/bottomLoadMore.js');

var _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore);

var _placeholder = require('./../components/common/placeholder.js');

var _placeholder2 = _interopRequireDefault(_placeholder);

require('./../npm/wepy-async-function/index.js');

var _constant = require('./../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createChannelFirst = function (_wepy$page) {
  _inherits(createChannelFirst, _wepy$page);

  function createChannelFirst() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, createChannelFirst);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = createChannelFirst.__proto__ || Object.getPrototypeOf(createChannelFirst)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '独鹿交友'
    }, _this.components = {
      discover: _discover2.default,
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default,
      bombscreen: _bomb_screen2.default,
      tab: _tab2.default,
      orderItem: _order_item2.default
    }, _this.data = {}, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(createChannelFirst, [{
    key: 'onLoad',

    // 登录时加载项
    value: function onLoad() {}
  }]);

  return createChannelFirst;
}(_wepy2.default.page);

exports.default = createChannelFirst;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2JsZW0uanMiXSwibmFtZXMiOlsiY3JlYXRlQ2hhbm5lbEZpcnN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkaXNjb3ZlciIsImJvdHRvbUxvYWRNb3JlIiwicGxhY2Vob2xkZXIiLCJib21ic2NyZWVuIiwidGFiIiwib3JkZXJJdGVtIiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBT3FCQSxrQjs7Ozs7Ozs7Ozs7Ozs7OE1BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDLGtDQURXO0FBRVhDLDhDQUZXO0FBR1hDLHdDQUhXO0FBSVhDLHVDQUpXO0FBS1hDLHdCQUxXO0FBTVhDO0FBTlcsSyxRQVFiQyxJLEdBQU8sRSxRQVFQQyxRLEdBQVcsRSxRQUNYQyxPLEdBQVUsRSxRQUVWQyxNLEdBQVMsRTs7Ozs7O0FBUlI7NkJBQ1EsQ0FFUjs7OztFQWxCNkMsZUFBS0MsSTs7a0JBQWhDZCxrQiIsImZpbGUiOiJwcm9ibGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcCdcbmltcG9ydCBUYWIgZnJvbSAnLi4vY29tcG9uZW50cy90YWInXG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9kaXNjb3ZlcidcbmltcG9ydCBCb21ic2NyZWVuIGZyb20gJy4uL2NvbXBvbmVudHMvYm9tYl9zY3JlZW4nXG5pbXBvcnQgT3JkZXJJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvb3JkZXJfaXRlbSdcbmltcG9ydCBCb3R0b21Mb2FkTW9yZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vYm90dG9tTG9hZE1vcmVcIlxuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9wbGFjZWhvbGRlclwiXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5pbXBvcnQge1xuICBTWVNURU1fSU5GTyxcbiAgVVNFUl9TUEVDSUNBTF9JTkZPLFxuICBVU0VSX0lORk8sXG4gIFVTRVJfQ09ERVxufSBmcm9tICcuLi91dGlscy9jb25zdGFudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNyZWF0ZUNoYW5uZWxGaXJzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn54us6bm/5Lqk5Y+LJyxcbiAgfVxuICBjb21wb25lbnRzID0ge1xuICAgIGRpc2NvdmVyOiBEaXNjb3ZlcixcbiAgICBib3R0b21Mb2FkTW9yZTogQm90dG9tTG9hZE1vcmUsXG4gICAgcGxhY2Vob2xkZXI6IFBsYWNlaG9sZGVyLFxuICAgIGJvbWJzY3JlZW46IEJvbWJzY3JlZW4sXG4gICAgdGFiOiBUYWIsXG4gICAgb3JkZXJJdGVtOiBPcmRlckl0ZW0sXG4gIH1cbiAgZGF0YSA9IHtcblxuICB9XG4gICAvLyDnmbvlvZXml7bliqDovb3poblcbiAgb25Mb2FkKCkge1xuXG4gIH1cblxuICBjb21wdXRlZCA9IHt9XG4gIG1ldGhvZHMgPSB7XG4gIH1cbiAgZXZlbnRzID0ge1xuXG4gICAgIFxuICB9XG5cblxufVxuXG5cbiJdfQ==