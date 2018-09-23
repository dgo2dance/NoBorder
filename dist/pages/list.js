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

var _single_item = require('./../components/single_item.js');

var _single_item2 = _interopRequireDefault(_single_item);

var _bottomLoadMore = require('./../components/common/bottomLoadMore.js');

var _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore);

var _placeholder = require('./../components/common/placeholder.js');

var _placeholder2 = _interopRequireDefault(_placeholder);

require('./../npm/wepy-async-function/index.js');

var _constant = require('./../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var list = function (_wepy$page) {
  _inherits(list, _wepy$page);

  function list() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, list);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = list.__proto__ || Object.getPrototypeOf(list)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '独鹿交友'
    }, _this.$repeat = {}, _this.$props = { "bottomLoadMore": { "v-bind:show.sync": "showLoading", "message": "正在加载" }, "placeholder": { "v-bind:show.sync": "is_empty", "message": "暂无发现数据" }, "tab": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:tabList.sync": "tabList", "v-bind:currentTab.sync": "currentTab" }, "singleItem": { "xmlns:v-bind": "", "v-bind:singleList.sync": "singleList" } }, _this.$events = { "tab": { "v-on:currentTab": "getCurrentTab" } }, _this.components = {
      discover: _discover2.default,
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default,
      bombscreen: _bomb_screen2.default,
      tab: _tab2.default,
      singleItem: _single_item2.default
    }, _this.data = {
      orgId: "",
      singleList: [],
      tabList: ["简介", "成员", "讨论"],
      org: {}

      //根据ID获取清单图片  名字等；
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(list, [{
    key: 'getOrg',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, userSpecialInfo, userInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                userInfo = _wepy2.default.getStorageSync(_constant.USER_INFO) || {};
                openId = userSpecialInfo.openid;
                _context.next = 6;
                return _api2.default.getOrgById({
                  query: {
                    openid: openId,
                    id: orgId
                  }
                });

              case 6:
                json = _context.sent;


                console.log("getAdList：" + JSON.stringify(json));

                if (json.data.code == 0) {
                  this.org = json.data.data;
                  this.$apply();
                }

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getOrg() {
        return _ref2.apply(this, arguments);
      }

      return getOrg;
    }()

    // 登录时加载项

  }, {
    key: 'onLoad',
    value: function onLoad(option) {
      var that = this;
      console.log(option.orderNo);
      that.orgId = option.orderNo == undefined ? "" : option.orderNo;
      console.log("orgId---" + that.orgId);

      that.getOrg();
    }
  }]);

  return list;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(list , 'pages/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsibGlzdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJkaXNjb3ZlciIsImJvdHRvbUxvYWRNb3JlIiwicGxhY2Vob2xkZXIiLCJib21ic2NyZWVuIiwidGFiIiwic2luZ2xlSXRlbSIsImRhdGEiLCJvcmdJZCIsInNpbmdsZUxpc3QiLCJ0YWJMaXN0Iiwib3JnIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwidGhhdCIsInVzZXJTcGVjaWFsSW5mbyIsImdldFN0b3JhZ2VTeW5jIiwidXNlckluZm8iLCJvcGVuSWQiLCJvcGVuaWQiLCJnZXRPcmdCeUlkIiwicXVlcnkiLCJpZCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvZGUiLCIkYXBwbHkiLCJvcHRpb24iLCJvcmRlck5vIiwidW5kZWZpbmVkIiwiZ2V0T3JnIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQU9xQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsa0JBQWlCLEVBQUMsb0JBQW1CLGFBQXBCLEVBQWtDLFdBQVUsTUFBNUMsRUFBbEIsRUFBc0UsZUFBYyxFQUFDLG9CQUFtQixVQUFwQixFQUErQixXQUFVLFFBQXpDLEVBQXBGLEVBQXVJLE9BQU0sRUFBQyxjQUFhLEVBQWQsRUFBaUIsZ0JBQWUsRUFBaEMsRUFBbUMsdUJBQXNCLFNBQXpELEVBQW1FLDBCQUF5QixZQUE1RixFQUE3SSxFQUF1UCxjQUFhLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsMEJBQXlCLFlBQTVDLEVBQXBRLEUsUUFDVEMsTyxHQUFVLEVBQUMsT0FBTSxFQUFDLG1CQUFrQixlQUFuQixFQUFQLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLGtDQURVO0FBRVZDLDhDQUZVO0FBR1ZDLHdDQUhVO0FBSVZDLHVDQUpVO0FBS1ZDLHdCQUxVO0FBTVZDO0FBTlUsSyxRQVNaQyxJLEdBQU87QUFDTEMsYUFBTSxFQUREO0FBRUxDLGtCQUFZLEVBRlA7QUFHTEMsZUFBUyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQVksSUFBWixDQUhKO0FBSUxDLFdBQUk7O0FBR047QUFQTyxLLFFBeUNQQyxRLEdBQVcsRSxRQUNYQyxPLEdBQVUsRSxRQUNWQyxNLEdBQVMsRTs7Ozs7Ozs7Ozs7O0FBakNIQyxvQixHQUFPLEk7QUFDUEMsK0IsR0FBa0IsZUFBS0MsY0FBTCxrQ0FBMkMsRTtBQUM3REMsd0IsR0FBVyxlQUFLRCxjQUFMLHlCQUFrQyxFO0FBQzdDRSxzQixHQUFTSCxnQkFBZ0JJLE07O3VCQUNWLGNBQUlDLFVBQUosQ0FBZTtBQUNoQ0MseUJBQU87QUFDTEYsNEJBQU9ELE1BREY7QUFFTEksd0JBQUdmO0FBRkU7QUFEeUIsaUJBQWYsQzs7O0FBQWJnQixvQjs7O0FBT05DLHdCQUFRQyxHQUFSLENBQVksZUFBYUMsS0FBS0MsU0FBTCxDQUFlSixJQUFmLENBQXpCOztBQUVBLG9CQUFJQSxLQUFLakIsSUFBTCxDQUFVc0IsSUFBVixJQUFrQixDQUF0QixFQUF5QjtBQUN2Qix1QkFBS2xCLEdBQUwsR0FBV2EsS0FBS2pCLElBQUwsQ0FBVUEsSUFBckI7QUFDQSx1QkFBS3VCLE1BQUw7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLRjs7OzsyQkFDTUMsTSxFQUFRO0FBQ2IsVUFBSWhCLE9BQU8sSUFBWDtBQUNBVSxjQUFRQyxHQUFSLENBQVlLLE9BQU9DLE9BQW5CO0FBQ0FqQixXQUFLUCxLQUFMLEdBQWF1QixPQUFPQyxPQUFQLElBQWdCQyxTQUFoQixHQUEwQixFQUExQixHQUE2QkYsT0FBT0MsT0FBakQ7QUFDQVAsY0FBUUMsR0FBUixDQUFZLGFBQVdYLEtBQUtQLEtBQTVCOztBQUVBTyxXQUFLbUIsTUFBTDtBQUNEOzs7O0VBeEQrQixlQUFLQyxJOztrQkFBbEJ6QyxJIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpJztcbmltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwJ1xuaW1wb3J0IFRhYiBmcm9tICcuLi9jb21wb25lbnRzL3RhYidcbmltcG9ydCBEaXNjb3ZlciBmcm9tICcuLi9jb21wb25lbnRzL2Rpc2NvdmVyJ1xuaW1wb3J0IEJvbWJzY3JlZW4gZnJvbSAnLi4vY29tcG9uZW50cy9ib21iX3NjcmVlbidcbmltcG9ydCBTaW5nbGVJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvc2luZ2xlX2l0ZW0nXG5pbXBvcnQgQm90dG9tTG9hZE1vcmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL2JvdHRvbUxvYWRNb3JlXCJcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vcGxhY2Vob2xkZXJcIlxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuaW1wb3J0IHtcbiAgU1lTVEVNX0lORk8sXG4gIFVTRVJfU1BFQ0lDQUxfSU5GTyxcbiAgVVNFUl9JTkZPLFxuICBVU0VSX0NPREVcbn0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfni6zpub/kuqTlj4snLFxuICB9XG5cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImJvdHRvbUxvYWRNb3JlXCI6e1widi1iaW5kOnNob3cuc3luY1wiOlwic2hvd0xvYWRpbmdcIixcIm1lc3NhZ2VcIjpcIuato+WcqOWKoOi9vVwifSxcInBsYWNlaG9sZGVyXCI6e1widi1iaW5kOnNob3cuc3luY1wiOlwiaXNfZW1wdHlcIixcIm1lc3NhZ2VcIjpcIuaaguaXoOWPkeeOsOaVsOaNrlwifSxcInRhYlwiOntcInhtbG5zOnYtb25cIjpcIlwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0YWJMaXN0LnN5bmNcIjpcInRhYkxpc3RcIixcInYtYmluZDpjdXJyZW50VGFiLnN5bmNcIjpcImN1cnJlbnRUYWJcIn0sXCJzaW5nbGVJdGVtXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzaW5nbGVMaXN0LnN5bmNcIjpcInNpbmdsZUxpc3RcIn19O1xyXG4kZXZlbnRzID0ge1widGFiXCI6e1widi1vbjpjdXJyZW50VGFiXCI6XCJnZXRDdXJyZW50VGFiXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgZGlzY292ZXI6IERpc2NvdmVyLFxuICAgIGJvdHRvbUxvYWRNb3JlOiBCb3R0b21Mb2FkTW9yZSxcbiAgICBwbGFjZWhvbGRlcjogUGxhY2Vob2xkZXIsXG4gICAgYm9tYnNjcmVlbjogQm9tYnNjcmVlbixcbiAgICB0YWI6IFRhYixcbiAgICBzaW5nbGVJdGVtOiBTaW5nbGVJdGVtXG4gIH1cblxuICBkYXRhID0ge1xuICAgIG9yZ0lkOlwiXCIsXG4gICAgc2luZ2xlTGlzdDogW10sXG4gICAgdGFiTGlzdDogW1wi566A5LuLXCIsIFwi5oiQ5ZGYXCIsXCLorqjorrpcIl0sXG4gICAgb3JnOnt9XG4gIH1cblxuICAvL+agueaNrklE6I635Y+W5riF5Y2V5Zu+54mHICDlkI3lrZfnrYnvvJtcbiAgYXN5bmMgZ2V0T3JnKCkge1xuICAgIFxuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgIGxldCB1c2VySW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9JTkZPKSB8fCB7fTtcbiAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdldE9yZ0J5SWQoe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgb3BlbmlkOm9wZW5JZCxcbiAgICAgICAgaWQ6b3JnSWRcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwiZ2V0QWRMaXN077yaXCIrSlNPTi5zdHJpbmdpZnkoanNvbikpO1xuXG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgIHRoaXMub3JnID0ganNvbi5kYXRhLmRhdGE7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0gXG4gIH1cblxuXG5cbiAgIC8vIOeZu+W9leaXtuWKoOi9vemhuVxuICBvbkxvYWQob3B0aW9uKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbi5vcmRlck5vKTtcbiAgICB0aGF0Lm9yZ0lkID0gb3B0aW9uLm9yZGVyTm89PXVuZGVmaW5lZD9cIlwiOm9wdGlvbi5vcmRlck5vO1xuICAgIGNvbnNvbGUubG9nKFwib3JnSWQtLS1cIit0aGF0Lm9yZ0lkKTtcblxuICAgIHRoYXQuZ2V0T3JnKCk7XG4gIH1cblxuICBjb21wdXRlZCA9IHt9XG4gIG1ldGhvZHMgPSB7fVxuICBldmVudHMgPSB7XG5cbiAgfVxuXG5cbn1cblxuXG4iXX0=