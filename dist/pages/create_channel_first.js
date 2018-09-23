'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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
    }, _this.data = {}, _this.computed = {}, _this.methods = {
      createChannelNofee: function createChannelNofee() {
        _wepy2.default.navigateTo({
          url: "/pages/create_channel_second?fee=nofee"
        });
      },
      createChannelfee: function createChannelfee() {
        _wepy2.default.navigateTo({
          url: "/pages/create_channel_second?fee=fee"
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(createChannelFirst, [{
    key: 'onLoad',

    // 登录时加载项
    value: function onLoad() {}
  }]);

  return createChannelFirst;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(createChannelFirst , 'pages/create_channel_first'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZV9jaGFubmVsX2ZpcnN0LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNoYW5uZWxGaXJzdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGlzY292ZXIiLCJib3R0b21Mb2FkTW9yZSIsInBsYWNlaG9sZGVyIiwiYm9tYnNjcmVlbiIsInRhYiIsIm9yZGVySXRlbSIsImRhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJjcmVhdGVDaGFubmVsTm9mZWUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY3JlYXRlQ2hhbm5lbGZlZSIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBT3FCQSxrQjs7Ozs7Ozs7Ozs7Ozs7OE1BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDLGtDQURXO0FBRVhDLDhDQUZXO0FBR1hDLHdDQUhXO0FBSVhDLHVDQUpXO0FBS1hDLHdCQUxXO0FBTVhDO0FBTlcsSyxRQVFiQyxJLEdBQU8sRSxRQVFSQyxRLEdBQVcsRSxRQUlWQyxPLEdBQVU7QUFDUkMsd0JBRFEsZ0NBQ2E7QUFDbkIsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxzQkFOUSw4QkFNVztBQUNqQix1QkFBS0YsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQVZPLEssUUFhVkUsTSxHQUFTLEU7Ozs7OztBQXRCUjs2QkFDUSxDQUVSOzs7O0VBbEI2QyxlQUFLQyxJOztrQkFBaENsQixrQiIsImZpbGUiOiJjcmVhdGVfY2hhbm5lbF9maXJzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2FwaS9hcGknO1xuaW1wb3J0IHRpcCBmcm9tICcuLi91dGlscy90aXAnXG5pbXBvcnQgVGFiIGZyb20gJy4uL2NvbXBvbmVudHMvdGFiJ1xuaW1wb3J0IERpc2NvdmVyIGZyb20gJy4uL2NvbXBvbmVudHMvZGlzY292ZXInXG5pbXBvcnQgQm9tYnNjcmVlbiBmcm9tICcuLi9jb21wb25lbnRzL2JvbWJfc2NyZWVuJ1xuaW1wb3J0IE9yZGVySXRlbSBmcm9tICcuLi9jb21wb25lbnRzL29yZGVyX2l0ZW0nXG5pbXBvcnQgQm90dG9tTG9hZE1vcmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL2JvdHRvbUxvYWRNb3JlXCJcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vcGxhY2Vob2xkZXJcIlxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuaW1wb3J0IHtcbiAgU1lTVEVNX0lORk8sXG4gIFVTRVJfU1BFQ0lDQUxfSU5GTyxcbiAgVVNFUl9JTkZPLFxuICBVU0VSX0NPREVcbn0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjcmVhdGVDaGFubmVsRmlyc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eLrOm5v+S6pOWPiycsXG4gIH1cbiAgY29tcG9uZW50cyA9IHtcbiAgICBkaXNjb3ZlcjogRGlzY292ZXIsXG4gICAgYm90dG9tTG9hZE1vcmU6IEJvdHRvbUxvYWRNb3JlLFxuICAgIHBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlcixcbiAgICBib21ic2NyZWVuOiBCb21ic2NyZWVuLFxuICAgIHRhYjogVGFiLFxuICAgIG9yZGVySXRlbTogT3JkZXJJdGVtLFxuICB9XG4gIGRhdGEgPSB7XG5cbiAgfVxuICAgLy8g55m75b2V5pe25Yqg6L296aG5XG4gIG9uTG9hZCgpIHtcblxuICB9XG5cbiBjb21wdXRlZCA9IHtcblxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgXHQgY3JlYXRlQ2hhbm5lbE5vZmVlKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBcIi9wYWdlcy9jcmVhdGVfY2hhbm5lbF9zZWNvbmQ/ZmVlPW5vZmVlXCJcbiAgICAgIH0pXG4gICAgfSxcbiAgXHQgY3JlYXRlQ2hhbm5lbGZlZSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogXCIvcGFnZXMvY3JlYXRlX2NoYW5uZWxfc2Vjb25kP2ZlZT1mZWVcIlxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBldmVudHMgPSB7XG5cbiAgfVxuXG5cbn1cblxuXG4iXX0=