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
      pages: ['pages/create', 'pages/home', 'pages/home_detail', 'pages/list', 'pages/org_detail', 'pages/info', 'pages/create_confirm'],
      window: {
        backgroundTextStyle: 'dark',
        navigationBarBackgroundColor: '#F8F8F8',
        navigationBarTitleText: '无界',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJiYWNrZ3JvdW5kQ29sb3IiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJhcHBpZCIsInNlY3JldCIsInVzZSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7O0FBd0RFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUFsRGRBLE1Ba0RjLEdBbERMO0FBQ1BDLGFBQU8sQ0FDTCxjQURLLEVBRUwsWUFGSyxFQUdMLG1CQUhLLEVBSUwsWUFKSyxFQUtMLGtCQUxLLEVBTUwsWUFOSyxFQU9MLHNCQVBLLENBREE7QUFXUEMsY0FBUTtBQUNOQyw2QkFBcUIsTUFEZjtBQUVOQyxzQ0FBOEIsU0FGeEI7QUFHTkMsZ0NBQXdCLElBSGxCO0FBSU5DLGdDQUF3QixPQUpsQjtBQUtOQywrQkFBdUIsS0FMakI7QUFNTkMseUJBQWlCOztBQU5YLE9BWEQ7QUFvQlAsZ0JBQVU7QUFDUixpQkFBUyxTQUREO0FBRVIseUJBQWlCLFNBRlQ7QUFHUiwyQkFBbUIsU0FIWDtBQUlSLHVCQUFlLE9BSlA7QUFLUixnQkFBUSxDQUFDO0FBQ1Asc0JBQVksWUFETDtBQUVQLHNCQUFZLGlCQUZMO0FBR1AsOEJBQW9CO0FBQ3BCO0FBSk8sU0FBRCxFQUtMO0FBQ0Qsc0JBQVksY0FEWDtBQUVIO0FBQ0Usc0JBQVksZ0JBSFg7QUFJRCw4QkFBb0I7QUFKbkIsU0FMSyxFQVVMO0FBQ0Qsc0JBQVksWUFEWDtBQUVBLHNCQUFZLHFCQUZaO0FBR0EsOEJBQW9CO0FBQ3RCO0FBSkUsU0FWSztBQUxBO0FBcEJILEtBa0RLO0FBQUEsVUFOZEMsVUFNYyxHQU5EO0FBQ1hDLGdCQUFVLElBREM7QUFFWEMsYUFBTyxvQkFGSTtBQUdYQyxjQUFRO0FBSEcsS0FNQzs7QUFFWixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUOztBQUhZO0FBS2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeEQwQixlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5pbXBvcnQge1xuICBVU0VSX1NQRUNJQ0FMX0lORk8sXG4gIFVTRVJfSU5GTyxcbiAgU1lTVEVNX0lORk8sXG4gIEFERFJFU1NfSUQsXG4gIFNFTF9DTEFTU19DT0RFXG59IGZyb20gXCIuL3V0aWxzL2NvbnN0YW50XCI7XG5pbXBvcnQge1xuICB3eEpzQ29kZTJTZXNzaW9uLFxuICB1c2VyMnNlc3Npb25cbn0gZnJvbSAnLi9hcGkvYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL2NyZWF0ZScsXG4gICAgICAncGFnZXMvaG9tZScsXG4gICAgICAncGFnZXMvaG9tZV9kZXRhaWwnLFxuICAgICAgJ3BhZ2VzL2xpc3QnLFxuICAgICAgJ3BhZ2VzL29yZ19kZXRhaWwnLFxuICAgICAgJ3BhZ2VzL2luZm8nLFxuICAgICAgJ3BhZ2VzL2NyZWF0ZV9jb25maXJtJ1xuXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjRjhGOEY4JyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfml6DnlYwnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogZmFsc2UsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjhGOEY4J1xuXG4gICAgfSxcbiAgICBcInRhYkJhclwiOiB7XG4gICAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiLFxuICAgICAgXCJzZWxlY3RlZENvbG9yXCI6IFwiIzY2Y2NjY1wiLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgICBcImJvcmRlclN0eWxlXCI6IFwiYmxhY2tcIixcbiAgICAgIFwibGlzdFwiOiBbe1xuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvaG9tZVwiLFxuICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL2xpc3QucG5nXCIsXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9saXN0X3NlbGVjdC5wbmdcIixcbiAgICAgICAgLy8gXCJ0ZXh0XCI6IFwi5YiX6KGoXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2NyZWF0ZVwiLFxuICAgICAgLy8gXCJ0ZXh0XCI6IFwi5Yib5bu6XCIsXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvYWRkLnBuZ1wiLFxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZXMvYWRkX3NlbGVjdC5wbmdcIlxuICAgICAgfSwge1xuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvaW5mb1wiLFxuICAgICAgICAgXCJpY29uUGF0aFwiOiBcImltYWdlcy9pY29uX3Blci5wbmdcIixcbiAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9pY29uX3Blcl9obC5wbmdcIixcbiAgICAgICAvLyBcInRleHRcIjogXCLmiJFcIlxuICAgICAgfV1cbiAgICB9XG4gIH1cblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsLFxuICAgIGFwcGlkOiAnd3g2YjEyMTk0MWIyMDBlYTUwJyxcbiAgICBzZWNyZXQ6ICczNmE3NmIwNjgyYmQyYzNmMTU0MWZkMDEyZmFjNjZmNScsXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKTtcblxuICB9XG5cbiAgYXN5bmMgb25MYXVuY2goKSB7XG4gIH1cbn1cblxuIl19