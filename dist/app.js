'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _constant = require('./utils/constant.js');

var _api = require('./api/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/home', 'pages/home_detail', 'pages/create_list', 'pages/create_channel_first', 'pages/create_channel_second', 'pages/list', 'pages/org_detail', 'pages/problems', 'pages/classify', 'pages/shop_cart', 'pages/info', 'pages/search', 'pages/test', 'pages/sign_in', 'pages/exchange_goods', 'pages/wholesale', 'pages/replenishment_goods', 'pages/register', 'pages/order', 'pages/reorder', 'pages/pay_success', 'pages/points', 'pages/points_more', 'pages/points_rule', 'pages/collection', 'pages/messages', 'pages/setting', 'pages/goods_detail', 'pages/comfire_order', 'pages/address', 'pages/order_detail', 'pages/filter', 'pages/logistics', 'pages/comment', 'pages/comment_add'],
      window: {
        backgroundTextStyle: 'dark',
        navigationBarBackgroundColor: '#F8F8F8',
        navigationBarTitleText: '独鹿朋友',
        navigationBarTextStyle: 'black',
        enablePullDownRefresh: false,
        backgroundColor: '#F8F8F8'

      },
      "tabBar": {
        "color": "#999999",
        "selectedColor": "#66cccc",
        "backgroundColor": "#ffffff",
        "borderStyle": "black",
        "list": [{
          "pagePath": "pages/home",
          "iconPath": "images/icon_social_slack.png",
          "selectedIconPath": "images/icon_slack_hl.png",
          "text": "清单"
        }, {
          "pagePath": "pages/create_list",
          "text": "创建",
          "iconPath": "images/add.png",
          "selectedIconPath": "images/add_select.png"
        }, {
          "pagePath": "pages/info",
          "iconPath": "images/icon_per.png",
          "selectedIconPath": "images/icon_per_hl.png",
          "text": "我的"
        }]
      }
    };
    _this.globalData = {
      userInfo: null,
      appid: 'wx6b121941b200ea50',
      secret: '36a76b0682bd2c3f1541fd012fac66f5'
    };

    _this.use('requestfix');
    _this.use('promisify');

    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch() {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJiYWNrZ3JvdW5kQ29sb3IiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJhcHBpZCIsInNlY3JldCIsInVzZSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7O0FBc0ZFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUFoRmRBLE1BZ0ZjLEdBaEZMO0FBQ1BDLGFBQU8sQ0FDTCxZQURLLEVBRUwsbUJBRkssRUFHTCxtQkFISyxFQUlMLDRCQUpLLEVBS0wsNkJBTEssRUFNTCxZQU5LLEVBT0wsa0JBUEssRUFXTCxnQkFYSyxFQVlMLGdCQVpLLEVBYUwsaUJBYkssRUFjTCxZQWRLLEVBZUwsY0FmSyxFQWdCTCxZQWhCSyxFQWlCTCxlQWpCSyxFQWtCTCxzQkFsQkssRUFtQkwsaUJBbkJLLEVBb0JMLDJCQXBCSyxFQXFCTCxnQkFyQkssRUFzQkwsYUF0QkssRUF1QkwsZUF2QkssRUF3QkwsbUJBeEJLLEVBeUJMLGNBekJLLEVBMEJMLG1CQTFCSyxFQTJCTCxtQkEzQkssRUE0Qkwsa0JBNUJLLEVBNkJMLGdCQTdCSyxFQThCTCxlQTlCSyxFQStCTCxvQkEvQkssRUFnQ0wscUJBaENLLEVBaUNMLGVBakNLLEVBa0NMLG9CQWxDSyxFQW1DTCxjQW5DSyxFQW9DTCxpQkFwQ0ssRUFxQ0wsZUFyQ0ssRUFzQ0wsbUJBdENLLENBREE7QUF5Q1BDLGNBQVE7QUFDTkMsNkJBQXFCLE1BRGY7QUFFTkMsc0NBQThCLFNBRnhCO0FBR05DLGdDQUF3QixNQUhsQjtBQUlOQyxnQ0FBd0IsT0FKbEI7QUFLTkMsK0JBQXVCLEtBTGpCO0FBTU5DLHlCQUFpQjs7QUFOWCxPQXpDRDtBQWtEUCxnQkFBVTtBQUNSLGlCQUFTLFNBREQ7QUFFUix5QkFBaUIsU0FGVDtBQUdSLDJCQUFtQixTQUhYO0FBSVIsdUJBQWUsT0FKUDtBQUtSLGdCQUFRLENBQUM7QUFDUCxzQkFBWSxZQURMO0FBRVAsc0JBQVksOEJBRkw7QUFHUCw4QkFBb0IsMEJBSGI7QUFJUCxrQkFBUTtBQUpELFNBQUQsRUFLTDtBQUNELHNCQUFZLG1CQURYO0FBRUQsa0JBQVEsSUFGUDtBQUdELHNCQUFZLGdCQUhYO0FBSUQsOEJBQW9CO0FBSm5CLFNBTEssRUFVTDtBQUNELHNCQUFZLFlBRFg7QUFFQSxzQkFBWSxxQkFGWjtBQUdBLDhCQUFvQix3QkFIcEI7QUFJRCxrQkFBUTtBQUpQLFNBVks7QUFMQTtBQWxESCxLQWdGSztBQUFBLFVBTmRDLFVBTWMsR0FORDtBQUNYQyxnQkFBVSxJQURDO0FBRVhDLGFBQU8sb0JBRkk7QUFHWEMsY0FBUTtBQUhHLEtBTUM7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDs7QUFIWTtBQUtiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXRGMEIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuaW1wb3J0IHtcbiAgVVNFUl9TUEVDSUNBTF9JTkZPLFxuICBVU0VSX0lORk8sXG4gIFNZU1RFTV9JTkZPLFxuICBBRERSRVNTX0lELFxuICBTRUxfQ0xBU1NfQ09ERVxufSBmcm9tIFwiLi91dGlscy9jb25zdGFudFwiO1xuaW1wb3J0IHtcbiAgd3hKc0NvZGUyU2Vzc2lvbixcbiAgdXNlcjJzZXNzaW9uXG59IGZyb20gJy4vYXBpL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9ob21lJyxcbiAgICAgICdwYWdlcy9ob21lX2RldGFpbCcsXG4gICAgICAncGFnZXMvY3JlYXRlX2xpc3QnLFxuICAgICAgJ3BhZ2VzL2NyZWF0ZV9jaGFubmVsX2ZpcnN0JyxcbiAgICAgICdwYWdlcy9jcmVhdGVfY2hhbm5lbF9zZWNvbmQnLFxuICAgICAgJ3BhZ2VzL2xpc3QnLFxuICAgICAgJ3BhZ2VzL29yZ19kZXRhaWwnLFxuXG5cblxuICAgICAgJ3BhZ2VzL3Byb2JsZW1zJyxcbiAgICAgICdwYWdlcy9jbGFzc2lmeScsXG4gICAgICAncGFnZXMvc2hvcF9jYXJ0JyxcbiAgICAgICdwYWdlcy9pbmZvJyxcbiAgICAgICdwYWdlcy9zZWFyY2gnLFxuICAgICAgJ3BhZ2VzL3Rlc3QnLFxuICAgICAgJ3BhZ2VzL3NpZ25faW4nLFxuICAgICAgJ3BhZ2VzL2V4Y2hhbmdlX2dvb2RzJyxcbiAgICAgICdwYWdlcy93aG9sZXNhbGUnLFxuICAgICAgJ3BhZ2VzL3JlcGxlbmlzaG1lbnRfZ29vZHMnLFxuICAgICAgJ3BhZ2VzL3JlZ2lzdGVyJyxcbiAgICAgICdwYWdlcy9vcmRlcicsXG4gICAgICAncGFnZXMvcmVvcmRlcicsXG4gICAgICAncGFnZXMvcGF5X3N1Y2Nlc3MnLFxuICAgICAgJ3BhZ2VzL3BvaW50cycsXG4gICAgICAncGFnZXMvcG9pbnRzX21vcmUnLFxuICAgICAgJ3BhZ2VzL3BvaW50c19ydWxlJyxcbiAgICAgICdwYWdlcy9jb2xsZWN0aW9uJyxcbiAgICAgICdwYWdlcy9tZXNzYWdlcycsXG4gICAgICAncGFnZXMvc2V0dGluZycsXG4gICAgICAncGFnZXMvZ29vZHNfZGV0YWlsJyxcbiAgICAgICdwYWdlcy9jb21maXJlX29yZGVyJyxcbiAgICAgICdwYWdlcy9hZGRyZXNzJyxcbiAgICAgICdwYWdlcy9vcmRlcl9kZXRhaWwnLFxuICAgICAgJ3BhZ2VzL2ZpbHRlcicsXG4gICAgICAncGFnZXMvbG9naXN0aWNzJyxcbiAgICAgICdwYWdlcy9jb21tZW50JyxcbiAgICAgICdwYWdlcy9jb21tZW50X2FkZCdcbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGOEY4RjgnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eLrOm5v+aci+WPiycsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiBmYWxzZSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGOEY4RjgnXG5cbiAgICB9LFxuICAgIFwidGFiQmFyXCI6IHtcbiAgICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCIsXG4gICAgICBcInNlbGVjdGVkQ29sb3JcIjogXCIjNjZjY2NjXCIsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICAgIFwiYm9yZGVyU3R5bGVcIjogXCJibGFja1wiLFxuICAgICAgXCJsaXN0XCI6IFt7XG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9ob21lXCIsXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvaWNvbl9zb2NpYWxfc2xhY2sucG5nXCIsXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9pY29uX3NsYWNrX2hsLnBuZ1wiLFxuICAgICAgICBcInRleHRcIjogXCLmuIXljZVcIlxuICAgICAgfSwge1xuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvY3JlYXRlX2xpc3RcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwi5Yib5bu6XCIsXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvYWRkLnBuZ1wiLFxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZXMvYWRkX3NlbGVjdC5wbmdcIlxuICAgICAgfSwge1xuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvaW5mb1wiLFxuICAgICAgICAgXCJpY29uUGF0aFwiOiBcImltYWdlcy9pY29uX3Blci5wbmdcIixcbiAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9pY29uX3Blcl9obC5wbmdcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwi5oiR55qEXCJcbiAgICAgIH1dXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbCxcbiAgICBhcHBpZDogJ3d4NmIxMjE5NDFiMjAwZWE1MCcsXG4gICAgc2VjcmV0OiAnMzZhNzZiMDY4MmJkMmMzZjE1NDFmZDAxMmZhYzY2ZjUnLFxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5Jyk7XG5cbiAgfVxuXG4gIGFzeW5jIG9uTGF1bmNoKCkge1xuICB9XG59XG5cbiJdfQ==