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
    }, _this.data = {}, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(createChannelFirst, [{
    key: 'onLoad',

    // 登录时加载项
    value: function onLoad() {}
  }]);

  return createChannelFirst;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(createChannelFirst , 'pages/problems'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2JsZW1zLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNoYW5uZWxGaXJzdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGlzY292ZXIiLCJib3R0b21Mb2FkTW9yZSIsInBsYWNlaG9sZGVyIiwiYm9tYnNjcmVlbiIsInRhYiIsIm9yZGVySXRlbSIsImRhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQU9xQkEsa0I7Ozs7Ozs7Ozs7Ozs7OzhNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQyxrQ0FEVztBQUVYQyw4Q0FGVztBQUdYQyx3Q0FIVztBQUlYQyx1Q0FKVztBQUtYQyx3QkFMVztBQU1YQztBQU5XLEssUUFRYkMsSSxHQUFPLEUsUUFRUEMsUSxHQUFXLEUsUUFDWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTLEU7Ozs7OztBQVJSOzZCQUNRLENBRVI7Ozs7RUFsQjZDLGVBQUtDLEk7O2tCQUFoQ2Qsa0IiLCJmaWxlIjoicHJvYmxlbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpJztcbmltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwJ1xuaW1wb3J0IFRhYiBmcm9tICcuLi9jb21wb25lbnRzL3RhYidcbmltcG9ydCBEaXNjb3ZlciBmcm9tICcuLi9jb21wb25lbnRzL2Rpc2NvdmVyJ1xuaW1wb3J0IEJvbWJzY3JlZW4gZnJvbSAnLi4vY29tcG9uZW50cy9ib21iX3NjcmVlbidcbmltcG9ydCBPcmRlckl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9vcmRlcl9pdGVtJ1xuaW1wb3J0IEJvdHRvbUxvYWRNb3JlIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9ib3R0b21Mb2FkTW9yZVwiXG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL3BsYWNlaG9sZGVyXCJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcbmltcG9ydCB7XG4gIFNZU1RFTV9JTkZPLFxuICBVU0VSX1NQRUNJQ0FMX0lORk8sXG4gIFVTRVJfSU5GTyxcbiAgVVNFUl9DT0RFXG59IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY3JlYXRlQ2hhbm5lbEZpcnN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfni6zpub/kuqTlj4snLFxuICB9XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgZGlzY292ZXI6IERpc2NvdmVyLFxuICAgIGJvdHRvbUxvYWRNb3JlOiBCb3R0b21Mb2FkTW9yZSxcbiAgICBwbGFjZWhvbGRlcjogUGxhY2Vob2xkZXIsXG4gICAgYm9tYnNjcmVlbjogQm9tYnNjcmVlbixcbiAgICB0YWI6IFRhYixcbiAgICBvcmRlckl0ZW06IE9yZGVySXRlbSxcbiAgfVxuICBkYXRhID0ge1xuXG4gIH1cbiAgIC8vIOeZu+W9leaXtuWKoOi9vemhuVxuICBvbkxvYWQoKSB7XG5cbiAgfVxuXG4gIGNvbXB1dGVkID0ge31cbiAgbWV0aG9kcyA9IHtcbiAgfVxuICBldmVudHMgPSB7XG5cbiAgICAgXG4gIH1cblxuXG59XG5cblxuIl19