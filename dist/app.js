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
      pages: ['pages/create', 'pages/home', 'pages/home_detail', 'pages/list', 'pages/org_detail', 'pages/info', 'pages/create_confirm', 'pages/share'],
      window: {
        backgroundTextStyle: 'dark',
        navigationBarBackgroundColor: '#F8F8F8',
        navigationBarTitleText: '每图',
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
          "iconPath": "images/list.png",
          "selectedIconPath": "images/list_select.png"
          // "text": "列表"
        }, {
          "pagePath": "pages/create",
          // "text": "创建",
          "iconPath": "images/add.png",
          "selectedIconPath": "images/add_select.png"
        }, {
          "pagePath": "pages/info",
          "iconPath": "images/icon_per.png",
          "selectedIconPath": "images/icon_per_hl.png"
          // "text": "我"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJiYWNrZ3JvdW5kQ29sb3IiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJhcHBpZCIsInNlY3JldCIsInVzZSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7O0FBeURFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUFuRGRBLE1BbURjLEdBbkRMO0FBQ1BDLGFBQU8sQ0FDTCxjQURLLEVBRUwsWUFGSyxFQUdMLG1CQUhLLEVBSUwsWUFKSyxFQUtMLGtCQUxLLEVBTUwsWUFOSyxFQU9MLHNCQVBLLEVBUUwsYUFSSyxDQURBO0FBWVBDLGNBQVE7QUFDTkMsNkJBQXFCLE1BRGY7QUFFTkMsc0NBQThCLFNBRnhCO0FBR05DLGdDQUF3QixJQUhsQjtBQUlOQyxnQ0FBd0IsT0FKbEI7QUFLTkMsK0JBQXVCLEtBTGpCO0FBTU5DLHlCQUFpQjs7QUFOWCxPQVpEO0FBcUJQLGdCQUFVO0FBQ1IsaUJBQVMsU0FERDtBQUVSLHlCQUFpQixTQUZUO0FBR1IsMkJBQW1CLFNBSFg7QUFJUix1QkFBZSxPQUpQO0FBS1IsZ0JBQVEsQ0FBQztBQUNQLHNCQUFZLFlBREw7QUFFUCxzQkFBWSxpQkFGTDtBQUdQLDhCQUFvQjtBQUNwQjtBQUpPLFNBQUQsRUFLTDtBQUNELHNCQUFZLGNBRFg7QUFFSDtBQUNFLHNCQUFZLGdCQUhYO0FBSUQsOEJBQW9CO0FBSm5CLFNBTEssRUFVTDtBQUNELHNCQUFZLFlBRFg7QUFFQSxzQkFBWSxxQkFGWjtBQUdBLDhCQUFvQjtBQUN0QjtBQUpFLFNBVks7QUFMQTtBQXJCSCxLQW1ESztBQUFBLFVBTmRDLFVBTWMsR0FORDtBQUNYQyxnQkFBVSxJQURDO0FBRVhDLGFBQU8sb0JBRkk7QUFHWEMsY0FBUTtBQUhHLEtBTUM7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDs7QUFIWTtBQUtiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXpEMEIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuaW1wb3J0IHtcbiAgVVNFUl9TUEVDSUNBTF9JTkZPLFxuICBVU0VSX0lORk8sXG4gIFNZU1RFTV9JTkZPLFxuICBBRERSRVNTX0lELFxuICBTRUxfQ0xBU1NfQ09ERVxufSBmcm9tIFwiLi91dGlscy9jb25zdGFudFwiO1xuaW1wb3J0IHtcbiAgd3hKc0NvZGUyU2Vzc2lvbixcbiAgdXNlcjJzZXNzaW9uXG59IGZyb20gJy4vYXBpL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9jcmVhdGUnLFxuICAgICAgJ3BhZ2VzL2hvbWUnLFxuICAgICAgJ3BhZ2VzL2hvbWVfZGV0YWlsJyxcbiAgICAgICdwYWdlcy9saXN0JyxcbiAgICAgICdwYWdlcy9vcmdfZGV0YWlsJyxcbiAgICAgICdwYWdlcy9pbmZvJyxcbiAgICAgICdwYWdlcy9jcmVhdGVfY29uZmlybScsXG4gICAgICAncGFnZXMvc2hhcmUnXG5cbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGOEY4RjgnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+avj+WbvicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiBmYWxzZSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGOEY4RjgnXG5cbiAgICB9LFxuICAgIFwidGFiQmFyXCI6IHtcbiAgICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCIsXG4gICAgICBcInNlbGVjdGVkQ29sb3JcIjogXCIjNjZjY2NjXCIsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICAgIFwiYm9yZGVyU3R5bGVcIjogXCJibGFja1wiLFxuICAgICAgXCJsaXN0XCI6IFt7XG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9ob21lXCIsXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvbGlzdC5wbmdcIixcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiaW1hZ2VzL2xpc3Rfc2VsZWN0LnBuZ1wiLFxuICAgICAgICAvLyBcInRleHRcIjogXCLliJfooahcIlxuICAgICAgfSwge1xuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvY3JlYXRlXCIsXG4gICAgICAvLyBcInRleHRcIjogXCLliJvlu7pcIixcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcImltYWdlcy9hZGQucG5nXCIsXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9hZGRfc2VsZWN0LnBuZ1wiXG4gICAgICB9LCB7XG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9pbmZvXCIsXG4gICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL2ljb25fcGVyLnBuZ1wiLFxuICAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiaW1hZ2VzL2ljb25fcGVyX2hsLnBuZ1wiLFxuICAgICAgIC8vIFwidGV4dFwiOiBcIuaIkVwiXG4gICAgICB9XVxuICAgIH1cbiAgfVxuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGwsXG4gICAgYXBwaWQ6ICd3eDZiMTIxOTQxYjIwMGVhNTAnLFxuICAgIHNlY3JldDogJzM2YTc2YjA2ODJiZDJjM2YxNTQxZmQwMTJmYWM2NmY1JyxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpO1xuXG4gIH1cblxuICBhc3luYyBvbkxhdW5jaCgpIHtcbiAgfVxufVxuXG4iXX0=