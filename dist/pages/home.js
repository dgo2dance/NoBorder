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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref, _this$data;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '独鹿朋友'
    }, _this.$repeat = {}, _this.$props = { "bottomLoadMore": { "v-bind:show.sync": "showLoading", "message": "正在加载" }, "placeholder": { "v-bind:show.sync": "is_empty", "message": "暂无发现数据" }, "tab": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:tabList.sync": "tabList", "v-bind:currentTab.sync": "currentTab" }, "orderItem": { "xmlns:v-bind": "", "v-bind:orderList.sync": "orderList" } }, _this.$events = { "tab": { "v-on:currentTab": "getCurrentTab" } }, _this.components = {
      discover: _discover2.default,
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default,
      bombscreen: _bomb_screen2.default,
      tab: _tab2.default,
      orderItem: _order_item2.default
    }, _this.data = (_this$data = {

      imgUrls: ['../images/image_demo.png'],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      indicatorActiveColor: "#fff",
      discoverList: [],
      //是否有数据
      is_empty: false,
      //当前页面
      currentPage: 1,
      //总页数
      page_total: 0,
      //是否显示 底部loading
      showLoading: true,
      //防止重复加载
      preventRepeatReuqest: false,
      //广告列表
      adList: [],
      tps: 0,
      is_show_alert: true,
      winHeight: 0,
      totalCount: 0,
      tabList: ["全部清单", "我加入的", "我创建的"],
      orderList: []
    }, _defineProperty(_this$data, 'currentPage', 1), _defineProperty(_this$data, 'is_empty', false), _defineProperty(_this$data, 'orderStatus', ""), _defineProperty(_this$data, 'currentTab', 0), _defineProperty(_this$data, 'flag', 0), _defineProperty(_this$data, 'pendingPayCount', 0), _defineProperty(_this$data, 'backrdersCount', 0), _defineProperty(_this$data, 'shippedCount', 0), _defineProperty(_this$data, 'receiveFlg', 0), _defineProperty(_this$data, 'showModel', false), _this$data), _this.globalData = {
      userInfo: null,
      appid: 'wx225f75e64eddaddd',
      secret: '8054a0cc597e0c630a2025724b4e9c11'
    }, _this.computed = {}, _this.methods = {
      goToAdvert: function goToAdvert(url) {
        console.log("url===" + url);
        if (url.length == 0) {
          return;
        }
        _wepy2.default.navigateTo({
          url: url
        });
      },

      onShareAppMessage: function onShareAppMessage(res) {
        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target);
        }
        return {
          title: '独鹿单身',
          path: '/pages/home',
          success: function success(res) {
            // 转发成功
          },
          fail: function fail(res) {
            // 转发失败
          }
        };
      },
      alertCallback: function alertCallback() {
        _tip2.default.alert('跳转');
      },
      closeAlert: function closeAlert() {
        _tip2.default.alert('关闭');
      },
      getCurrentTab: function getCurrentTab(cur, evt) {
        this.currentPage = 1;
        this.page_total = 0;
        this.orderList = [];

        var that = this;
        that.currentTab = cur;
        console.log("cur");
        console.log(cur);
        if (cur == 0) {
          console.log("所有订单类型");
          that.orderStatus = "";
          that.getMyOrder();
        } else if (cur == 1) {
          console.log("未付款订单类型");
          that.orderStatus = 0;
          that.getMyOrder();
        } else if (cur == 2) {
          console.log("待收货订单类型");
          that.orderStatus = 2;
          that.receiveFlg = 2;
          that.getMyOrder();
        } else if (cur == 3) {

          console.log("已完成订单类型");
          that.orderStatus = 4;
          that.receiveFlg = 4;
          that.getMyOrder();
        }
        that.$apply();
      },

      /**
       * 滑动切换tab
       */
      bindChange: function bindChange(e) {

        var that = this;
        that.currentTab = e.detail.current;
        console.log("change tab...." + e.detailcurrent);
        that.$apply();
      },


      //获取用户信息新接口
      agreeGetUser: function agreeGetUser(e) {
        //设置用户信息本地存储
        try {

          _wepy2.default.setStorageSync(_constant.USER_INFO, e.detail.userInfo);
          //存储系统信息 
          var systemInfo = _wepy2.default.getSystemInfoSync();
          _wepy2.default.setStorageSync(_constant.SYSTEM_INFO, systemInfo);
        } catch (e) {
          wx.showToast({
            title: '系统提示:网络错误',
            icon: 'warn',
            duration: 1500
          });
        }
        wx.showLoading({
          title: '加载中...'
        });
        var that = this;
        that.setData({
          showModel: false
        });
        that.getLogin();
      },

      //加载更多
      onReachBottom: function onReachBottom() {
        console.log("加载更多");
        var that = this;
        that.showLoading = true;
        console.log(that.page_total + "232===" + that.currentPage);
        //判断总页数是否大于翻页数
        if (that.page_total > that.currentPage) {
          //防止重复加载
          if (that.preventRepeatReuqest) {
            return true;
          }
          that.preventRepeatReuqest = true;
          that.currentPage++;
          console.log(this.currentTab);
          if (this.currentTab == 0) {
            console.log("所有订单类型");
            that.getMyOrder(that.currentPage);
          } else if (this.currentTab == 1) {
            console.log("未付款订单类型");
            that.orderStatus = 0;
            that.getMyOrder(that.currentPage);
          } else if (this.currentTab == 2) {
            console.log("待发货订单类型");
            that.orderStatus = 2;
            that.receiveFlg = 2;
            that.getMyOrder(that.currentPage);
          } else if (this.currentTab == 3) {
            console.log("已完成订单类型");
            that.orderStatus = 4;
            that.getMyOrder(that.currentPage);
          }
          that.preventRepeatReuqest = false;
        } else {
          that.showLoading = false;
        }
      }
    }, _this.events = {
      refreshOrderList: function refreshOrderList(msg) {
        console.log("msg值:" + msg);
        this.getMyOrder(1, 10, 1);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'getMyOrder',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(currentPage, size, refresh) {
        var that, userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("refresh值：" + refresh);
                that = this;

                console.log("orderStatus值");
                console.log("orderStatus值" + that.orderStatus);
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context.next = 8;
                return _api2.default.getOrg({
                  query: {
                    openId: openId,
                    page: currentPage || 1,
                    size: size || 10

                  }
                });

              case 8:
                json = _context.sent;

                console.log("myorder:" + JSON.stringify(json));

                if (json.data.code == 0) {
                  console.log("myorder:refresh" + refresh);

                  console.log("myorder:records" + JSON.stringify(json.data.data.records));

                  if (refresh) {
                    console.log("myorder:records-001" + json.data.data.records);

                    that.orderList = json.data.data.records;
                  } else {
                    that.orderList = [].concat(_toConsumableArray(that.orderList), _toConsumableArray(json.data.data.records));
                  }
                  that.page_total = json.data.data.totalPages;
                  that.totalCount = json.data.data.totalCount;
                  console.log("条目数：" + that.totalCount);
                  if (json.data.page_total == 0) {
                    //暂无数据
                    that.is_empty = true;
                  } else {
                    that.is_empty = false;
                  }
                  //    that.getMyOrderSize();
                  console.log("list返回数据");
                  console.log(that.orderList);
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;
                that.$apply();

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMyOrder(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return getMyOrder;
    }()
  }, {
    key: 'getMyOrderSize',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var that, userSpecialInfo, openId, json, dotList;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log("订单数量统计");
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context2.next = 6;
                return _api2.default.getMyOrderSize({
                  query: {
                    openId: openId
                  }
                });

              case 6:
                json = _context2.sent;

                if (json.data.code == 0) {
                  //待付款
                  that.pendingPayCount = json.data.pendingPayCount;
                  //待发货
                  that.backrdersCount = json.data.backrdersCount;
                  //待收货
                  that.shippedCount = json.data.shippedCount;

                  //重写list
                  dotList = ["全部订单", { name: "待支付", dotNum: that.pendingPayCount }, { name: "待收货", dotNum: that.backrdersCount }, "已完成"];

                  this.$invoke("tab", "changeList", dotList);
                  that.$apply();
                }

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getMyOrderSize() {
        return _ref3.apply(this, arguments);
      }

      return getMyOrderSize;
    }()
  }, {
    key: 'getAdList',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var json;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _api2.default.getAdList({
                  query: {}
                });

              case 2:
                json = _context3.sent;


                console.log("getAdList：" + JSON.stringify(json));

                if (json.data.code == 0) {
                  this.adList = json.data.data;
                  this.$apply();
                } else {}

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAdList() {
        return _ref4.apply(this, arguments);
      }

      return getAdList;
    }()

    // 登录服务器；

  }, {
    key: 'login',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var that, userSpecialInfo, userInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                userInfo = _wepy2.default.getStorageSync(_constant.USER_INFO) || {};
                openId = userSpecialInfo.openid;
                _context4.next = 6;
                return _api2.default.login({
                  query: {
                    openid: openId,
                    nickname: userInfo.nickName,
                    gender: parseInt(userInfo.gender),
                    avatarUrl: userInfo.avatarUrl,
                    city: userInfo.city,
                    provience: userInfo.province
                  },
                  method: "POST"
                });

              case 6:
                json = _context4.sent;

                console.log("login" + JSON.stringify(json));

                if (json.data.code == 0) {
                  console.log("登录成功");
                }

              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function login() {
        return _ref5.apply(this, arguments);
      }

      return login;
    }()

    //登录 获取openid, 并登录服务器

  }, {
    key: 'getLogin',
    value: function getLogin() {
      var userCode = _wepy2.default.getStorageSync(_constant.USER_CODE) || {};
      var code = userCode.code;
      var c = _wepy2.default.getStorageSync(_constant.USER_INFO) || {};
      if (code) {
        var d = this.globalData; //这里存储了appid、secret、token串    
        var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + code + '&grant_type=authorization_code';

        wx.request({
          url: url,
          header: {
            'content-type': 'application/json'
          },
          success: function success(res) {
            var obj = {};
            obj.openid = res.data.openid;
            obj.expires_in = Date.now() + res.data.expires_in;
            //存储openid 
            _wepy2.default.setStorageSync(_constant.USER_SPECICAL_INFO, obj);
          }
        });
      }

      this.login();
      wx.hideLoading();
    }

    // 登录时加载项

  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      this.discoverList = [];
      //  that.getDiscoverList();
      this.getAdList();

      //  登录获取用户信息
      wx.login({
        success: function success(res) {

          _wepy2.default.setStorageSync(_constant.USER_CODE, res);
          //wx.getuserinfo接口不再支持
          wx.getSetting({
            success: function success(res) {
              //判断用户没有授权。需要弹框
              if (!res.authSetting['scope.userInfo']) {
                that.setData({
                  showModel: true
                });
              } else {
                //没有授权需要弹框
                that.setData({
                  showModel: false
                });
                wx.showLoading({
                  title: '加载中...'
                });
                that.getLogin();
              }
            },
            fail: function fail() {
              wx.showToast({
                title: '系统提示:网络错误',
                icon: 'warn',
                duration: 1500
              });
            }
          });
        },
        fail: function fail() {
          wx.showToast({
            title: '系统提示:网络错误',
            icon: 'warn',
            duration: 1500
          });
        }
      });

      console.log("test----");
      this.getMyOrder();
      //设置滚动高度
      var systemInfo = _wepy2.default.getStorageSync(_constant.SYSTEM_INFO);
      that.winHeight = systemInfo.windowHeight;
      that.$apply();
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJkaXNjb3ZlciIsImJvdHRvbUxvYWRNb3JlIiwicGxhY2Vob2xkZXIiLCJib21ic2NyZWVuIiwidGFiIiwib3JkZXJJdGVtIiwiZGF0YSIsImltZ1VybHMiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwiaW5kaWNhdG9yQWN0aXZlQ29sb3IiLCJkaXNjb3Zlckxpc3QiLCJpc19lbXB0eSIsImN1cnJlbnRQYWdlIiwicGFnZV90b3RhbCIsInNob3dMb2FkaW5nIiwicHJldmVudFJlcGVhdFJldXFlc3QiLCJhZExpc3QiLCJ0cHMiLCJpc19zaG93X2FsZXJ0Iiwid2luSGVpZ2h0IiwidG90YWxDb3VudCIsInRhYkxpc3QiLCJvcmRlckxpc3QiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJhcHBpZCIsInNlY3JldCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImdvVG9BZHZlcnQiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibmF2aWdhdGVUbyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicmVzIiwiZnJvbSIsInRhcmdldCIsInRpdGxlIiwicGF0aCIsInN1Y2Nlc3MiLCJmYWlsIiwiYWxlcnRDYWxsYmFjayIsImFsZXJ0IiwiY2xvc2VBbGVydCIsImdldEN1cnJlbnRUYWIiLCJjdXIiLCJldnQiLCJ0aGF0IiwiY3VycmVudFRhYiIsIm9yZGVyU3RhdHVzIiwiZ2V0TXlPcmRlciIsInJlY2VpdmVGbGciLCIkYXBwbHkiLCJiaW5kQ2hhbmdlIiwiZSIsImRldGFpbCIsImN1cnJlbnQiLCJkZXRhaWxjdXJyZW50IiwiYWdyZWVHZXRVc2VyIiwic2V0U3RvcmFnZVN5bmMiLCJzeXN0ZW1JbmZvIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJzZXREYXRhIiwic2hvd01vZGVsIiwiZ2V0TG9naW4iLCJvblJlYWNoQm90dG9tIiwiZXZlbnRzIiwicmVmcmVzaE9yZGVyTGlzdCIsIm1zZyIsInNpemUiLCJyZWZyZXNoIiwidXNlclNwZWNpYWxJbmZvIiwiZ2V0U3RvcmFnZVN5bmMiLCJvcGVuSWQiLCJvcGVuaWQiLCJnZXRPcmciLCJxdWVyeSIsInBhZ2UiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvZGUiLCJyZWNvcmRzIiwidG90YWxQYWdlcyIsImVycm9yIiwiZ2V0TXlPcmRlclNpemUiLCJwZW5kaW5nUGF5Q291bnQiLCJiYWNrcmRlcnNDb3VudCIsInNoaXBwZWRDb3VudCIsImRvdExpc3QiLCJuYW1lIiwiZG90TnVtIiwiJGludm9rZSIsImdldEFkTGlzdCIsImxvZ2luIiwibmlja25hbWUiLCJuaWNrTmFtZSIsImdlbmRlciIsInBhcnNlSW50IiwiYXZhdGFyVXJsIiwiY2l0eSIsInByb3ZpZW5jZSIsInByb3ZpbmNlIiwibWV0aG9kIiwidXNlckNvZGUiLCJjIiwiZCIsInJlcXVlc3QiLCJoZWFkZXIiLCJvYmoiLCJleHBpcmVzX2luIiwiRGF0ZSIsIm5vdyIsImhpZGVMb2FkaW5nIiwiZ2V0U2V0dGluZyIsImF1dGhTZXR0aW5nIiwid2luZG93SGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQU9xQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsa0JBQWlCLEVBQUMsb0JBQW1CLGFBQXBCLEVBQWtDLFdBQVUsTUFBNUMsRUFBbEIsRUFBc0UsZUFBYyxFQUFDLG9CQUFtQixVQUFwQixFQUEr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MkIsc0JBQU0sTUFGSztBQUdYMUQsMEJBQVU7QUFIQyxlQUFiO0FBS0Q7QUF2QlcsV0FBZDtBQXlCRCxTQTlCTTtBQStCUGtDLGNBQUssZ0JBQVk7QUFDZnNCLGFBQUdDLFNBQUgsQ0FBYTtBQUNYMUIsbUJBQU0sV0FESztBQUVYMkIsa0JBQU0sTUFGSztBQUdYMUQsc0JBQVU7QUFIQyxXQUFiO0FBS0Q7QUFyQ00sT0FBVDs7QUF3Q0F1QixjQUFRQyxHQUFSLENBQVksVUFBWjtBQUNBLFdBQUtvQixVQUFMO0FBQ0E7QUFDQSxVQUFJVSxhQUFhLGVBQUtlLGNBQUwsdUJBQWpCO0FBQ0E1QixXQUFLOUIsU0FBTCxHQUFpQjJDLFdBQVcyRCxZQUE1QjtBQUNBeEUsV0FBS0ssTUFBTDtBQUVEOzs7O0VBM1ErQixlQUFLNEIsSTs7a0JBQWxCNUYsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcCdcbmltcG9ydCBUYWIgZnJvbSAnLi4vY29tcG9uZW50cy90YWInXG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9kaXNjb3ZlcidcbmltcG9ydCBCb21ic2NyZWVuIGZyb20gJy4uL2NvbXBvbmVudHMvYm9tYl9zY3JlZW4nXG5pbXBvcnQgT3JkZXJJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvb3JkZXJfaXRlbSdcbmltcG9ydCBCb3R0b21Mb2FkTW9yZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vYm90dG9tTG9hZE1vcmVcIlxuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9wbGFjZWhvbGRlclwiXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5pbXBvcnQge1xuICBTWVNURU1fSU5GTyxcbiAgVVNFUl9TUEVDSUNBTF9JTkZPLFxuICBVU0VSX0lORk8sXG4gIFVTRVJfQ09ERVxufSBmcm9tICcuLi91dGlscy9jb25zdGFudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eLrOm5v+aci+WPiycsXG4gIH1cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImJvdHRvbUxvYWRNb3JlXCI6e1widi1iaW5kOnNob3cuc3luY1wiOlwic2hvd0xvYWRpbmdcIixcIm1lc3NhZ2VcIjpcIuato+WcqOWKoOi9vVwifSxcInBsYWNlaG9sZGVyXCI6e1widi1iaW5kOnNob3cuc3luY1wiOlwiaXNfZW1wdHlcIixcIm1lc3NhZ2VcIjpcIuaaguaXoOWPkeeOsOaVsOaNrlwifSxcInRhYlwiOntcInhtbG5zOnYtb25cIjpcIlwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0YWJMaXN0LnN5bmNcIjpcInRhYkxpc3RcIixcInYtYmluZDpjdXJyZW50VGFiLnN5bmNcIjpcImN1cnJlbnRUYWJcIn0sXCJvcmRlckl0ZW1cIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm9yZGVyTGlzdC5zeW5jXCI6XCJvcmRlckxpc3RcIn19O1xyXG4kZXZlbnRzID0ge1widGFiXCI6e1widi1vbjpjdXJyZW50VGFiXCI6XCJnZXRDdXJyZW50VGFiXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgZGlzY292ZXI6IERpc2NvdmVyLFxuICAgIGJvdHRvbUxvYWRNb3JlOiBCb3R0b21Mb2FkTW9yZSxcbiAgICBwbGFjZWhvbGRlcjogUGxhY2Vob2xkZXIsXG4gICAgYm9tYnNjcmVlbjogQm9tYnNjcmVlbixcbiAgICB0YWI6IFRhYixcbiAgICBvcmRlckl0ZW06IE9yZGVySXRlbSxcbiAgfVxuICBkYXRhID0ge1xuXG4gICAgaW1nVXJsczogW1xuICAgICAgJy4uL2ltYWdlcy9pbWFnZV9kZW1vLnBuZycsXG4gICAgXSxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiAzMDAwLFxuICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgIGluZGljYXRvckFjdGl2ZUNvbG9yOiBcIiNmZmZcIixcbiAgICBkaXNjb3Zlckxpc3Q6IFtdLFxuICAgIC8v5piv5ZCm5pyJ5pWw5o2uXG4gICAgaXNfZW1wdHk6IGZhbHNlLFxuICAgIC8v5b2T5YmN6aG16Z2iXG4gICAgY3VycmVudFBhZ2U6IDEsXG4gICAgLy/mgLvpobXmlbBcbiAgICBwYWdlX3RvdGFsOiAwLFxuICAgIC8v5piv5ZCm5pi+56S6IOW6lemDqGxvYWRpbmdcbiAgICBzaG93TG9hZGluZzogdHJ1ZSxcbiAgICAvL+mYsuatoumHjeWkjeWKoOi9vVxuICAgIHByZXZlbnRSZXBlYXRSZXVxZXN0OiBmYWxzZSxcbiAgICAvL+W5v+WRiuWIl+ihqFxuICAgIGFkTGlzdDogW10sXG4gICAgdHBzOiAwLFxuICAgIGlzX3Nob3dfYWxlcnQ6IHRydWUsXG4gICAgd2luSGVpZ2h0OiAwLFxuICAgIHRvdGFsQ291bnQ6IDAsXG4gICAgdGFiTGlzdDogW1wi5YWo6YOo5riF5Y2VXCIsIFwi5oiR5Yqg5YWl55qEXCIsXCLmiJHliJvlu7rnmoRcIl0sXG4gICAgb3JkZXJMaXN0OiBbXSxcbiAgICBjdXJyZW50UGFnZTogMSxcbiAgICBpc19lbXB0eTogZmFsc2UsXG4gICAgb3JkZXJTdGF0dXM6IFwiXCIsXG4gICAgY3VycmVudFRhYjogMCxcbiAgICBmbGFnOiAwLFxuICAgIFxuICAgIC8v5b6F5LuY5qy+XG4gICAgcGVuZGluZ1BheUNvdW50IDogMCxcbiAgICAvL+W+heWPkei0p1xuICAgIGJhY2tyZGVyc0NvdW50IDogMCxcbiAgICAvL+W+heaUtui0p1xuICAgIHNoaXBwZWRDb3VudCA6IDAsXG4gICAgcmVjZWl2ZUZsZyA6IDAsXG4gICAgc2hvd01vZGVsOmZhbHNlXG5cbiAgfVxuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGwsXG4gICAgYXBwaWQ6ICd3eDIyNWY3NWU2NGVkZGFkZGQnLFxuICAgIHNlY3JldDogJzgwNTRhMGNjNTk3ZTBjNjMwYTIwMjU3MjRiNGU5YzExJyxcbiAgfVxuXG4gIGFzeW5jIGdldE15T3JkZXIoY3VycmVudFBhZ2UsIHNpemUscmVmcmVzaCkge1xuICAgIGNvbnNvbGUubG9nKFwicmVmcmVzaOWAvO+8mlwiK3JlZnJlc2gpO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBjb25zb2xlLmxvZyhcIm9yZGVyU3RhdHVz5YC8XCIpO1xuICAgIGNvbnNvbGUubG9nKFwib3JkZXJTdGF0dXPlgLxcIiArIHRoYXQub3JkZXJTdGF0dXMpO1xuICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5nZXRPcmcoe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgb3BlbklkOiBvcGVuSWQsXG4gICAgICAgIHBhZ2U6IGN1cnJlbnRQYWdlIHx8IDEsXG4gICAgICAgIHNpemU6IHNpemUgfHwgMTAsXG5cbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIm15b3JkZXI6XCIrSlNPTi5zdHJpbmdpZnkoanNvbikpO1xuXG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICBjb25zb2xlLmxvZyhcIm15b3JkZXI6cmVmcmVzaFwiK3JlZnJlc2gpO1xuXG4gICAgY29uc29sZS5sb2coXCJteW9yZGVyOnJlY29yZHNcIitKU09OLnN0cmluZ2lmeShqc29uLmRhdGEuZGF0YS5yZWNvcmRzKSk7XG5cbiAgICAgIGlmIChyZWZyZXNoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm15b3JkZXI6cmVjb3Jkcy0wMDFcIitqc29uLmRhdGEuZGF0YS5yZWNvcmRzKTtcblxuICAgICAgICB0aGF0Lm9yZGVyTGlzdCA9IGpzb24uZGF0YS5kYXRhLnJlY29yZHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGF0Lm9yZGVyTGlzdCA9IFsuLi50aGF0Lm9yZGVyTGlzdCwgLi4uanNvbi5kYXRhLmRhdGEucmVjb3Jkc107XG4gICAgICB9XG4gICAgICB0aGF0LnBhZ2VfdG90YWwgPSBqc29uLmRhdGEuZGF0YS50b3RhbFBhZ2VzO1xuICAgICAgdGhhdC50b3RhbENvdW50ID0ganNvbi5kYXRhLmRhdGEudG90YWxDb3VudDtcbiAgICAgIGNvbnNvbGUubG9nKFwi5p2h55uu5pWw77yaXCIgKyB0aGF0LnRvdGFsQ291bnQpO1xuICAgICAgaWYgKGpzb24uZGF0YS5wYWdlX3RvdGFsID09IDApIHtcbiAgICAgICAgLy/mmoLml6DmlbDmja5cbiAgICAgICAgdGhhdC5pc19lbXB0eSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGF0LmlzX2VtcHR5ID0gZmFsc2U7XG4gICAgICB9XG4gIC8vICAgIHRoYXQuZ2V0TXlPcmRlclNpemUoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwibGlzdOi/lOWbnuaVsOaNrlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoYXQub3JkZXJMaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXG4gICAgfVxuICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGF0LiRhcHBseSgpO1xuICB9XG5cblxuICBhc3luYyBnZXRNeU9yZGVyU2l6ZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIuiuouWNleaVsOmHj+e7n+iuoVwiKTtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdldE15T3JkZXJTaXplKHtcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIG9wZW5JZDogb3BlbklkXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgIC8v5b6F5LuY5qy+XG4gICAgICB0aGF0LnBlbmRpbmdQYXlDb3VudCA9IGpzb24uZGF0YS5wZW5kaW5nUGF5Q291bnQ7XG4gICAgICAvL+W+heWPkei0p1xuICAgICAgdGhhdC5iYWNrcmRlcnNDb3VudCA9IGpzb24uZGF0YS5iYWNrcmRlcnNDb3VudDtcbiAgICAgIC8v5b6F5pS26LSnXG4gICAgICB0aGF0LnNoaXBwZWRDb3VudCA9IGpzb24uZGF0YS5zaGlwcGVkQ291bnQ7XG5cbiAgICAgIC8v6YeN5YaZbGlzdFxuICAgICAgdmFyIGRvdExpc3QgPSBbXCLlhajpg6jorqLljZVcIiwgeyBuYW1lOiBcIuW+heaUr+S7mFwiLCBkb3ROdW06IHRoYXQucGVuZGluZ1BheUNvdW50IH0sIHsgbmFtZTogXCLlvoXmlLbotKdcIiwgZG90TnVtOiB0aGF0LmJhY2tyZGVyc0NvdW50IH0sIFwi5bey5a6M5oiQXCJdO1xuICAgICAgdGhpcy4kaW52b2tlKFwidGFiXCIsIFwiY2hhbmdlTGlzdFwiLCBkb3RMaXN0KTtcbiAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgfVxuICB9XG5cbiAgXG4gIGFzeW5jIGdldEFkTGlzdCgpIHtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdldEFkTGlzdCh7XG4gICAgICBxdWVyeToge31cbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwiZ2V0QWRMaXN077yaXCIrSlNPTi5zdHJpbmdpZnkoanNvbikpO1xuXG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgIHRoaXMuYWRMaXN0ID0ganNvbi5kYXRhLmRhdGE7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0gZWxzZSB7fVxuICB9XG5cbiAgLy8g55m75b2V5pyN5Yqh5Zmo77ybXG4gIGFzeW5jIGxvZ2luKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgIGxldCB1c2VySW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9JTkZPKSB8fCB7fTtcbiAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcbiAgICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5sb2dpbih7XG4gICAgICBxdWVyeToge1xuICAgICAgICBvcGVuaWQ6b3BlbklkLFxuICAgICAgICBuaWNrbmFtZTp1c2VySW5mby5uaWNrTmFtZSxcbiAgICAgICAgZ2VuZGVyOnBhcnNlSW50KHVzZXJJbmZvLmdlbmRlciksXG4gICAgICAgIGF2YXRhclVybDp1c2VySW5mby5hdmF0YXJVcmwsXG4gICAgICAgIGNpdHk6dXNlckluZm8uY2l0eSxcbiAgICAgICAgcHJvdmllbmNlOnVzZXJJbmZvLnByb3ZpbmNlXG4gICAgICB9LFxuICAgICAgbWV0aG9kOlwiUE9TVFwiXG4gICAgfSk7XG4gICAgIGNvbnNvbGUubG9nKFwibG9naW5cIitKU09OLnN0cmluZ2lmeShqc29uKSk7XG5cbiAgICAgICAgaWYoanNvbi5kYXRhLmNvZGUgPT0gMCl7XG4gICAgICAgICAgY29uc29sZS5sb2coXCLnmbvlvZXmiJDlip9cIik7XG5cbiAgICAgICAgfVxuXG5cbiAgfVxuXG4gICAgIC8v55m75b2VIOiOt+WPlm9wZW5pZCwg5bm255m75b2V5pyN5Yqh5ZmoXG4gICBnZXRMb2dpbigpIHtcbiAgICAgICAgbGV0IHVzZXJDb2RlID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX0NPREUpIHx8IHt9O1xuICAgICAgICBsZXQgY29kZSA9IHVzZXJDb2RlLmNvZGU7XG4gICAgICAgIGxldCBjID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX0lORk8pIHx8IHt9O1xuICAgICAgICBpZihjb2RlKXtcbiAgICAgICAgICBsZXQgZCA9IHRoaXMuZ2xvYmFsRGF0YTsgLy/ov5nph4zlrZjlgqjkuoZhcHBpZOOAgXNlY3JldOOAgXRva2Vu5LiywqDCoMKgwqBcbiAgICAgICAgICBsZXQgdXJsID0gJ2h0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vc25zL2pzY29kZTJzZXNzaW9uP2FwcGlkPScgKyBkLmFwcGlkICsgJyZzZWNyZXQ9JyArIGQuc2VjcmV0ICsgJyZqc19jb2RlPScgKyBjb2RlICsgJyZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZSc7XG5cbiAgICAgICAgICAgd3gucmVxdWVzdCh7ICBcbiAgICAgICAgICAgICAgdXJsOiB1cmwsICBcbiAgICAgICAgICAgICAgaGVhZGVyOiB7ICBcbiAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgIFxuICAgICAgICAgICAgICB9LCAgXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykgeyAgXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgICAgICAgICAgIG9iai5vcGVuaWQgPSByZXMuZGF0YS5vcGVuaWQ7XG4gICAgICAgICAgICAgICAgb2JqLmV4cGlyZXNfaW4gPSBEYXRlLm5vdygpICsgcmVzLmRhdGEuZXhwaXJlc19pbjtcbiAgICAgICAgICAgICAgIC8v5a2Y5YKob3BlbmlkwqBcbiAgICAgICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTywgb2JqKTtcbiAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgfVxuXG4gICAgICAgICB0aGlzLmxvZ2luKCk7XG4gICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuXG4gICB9XG5cbiAgIC8vIOeZu+W9leaXtuWKoOi9vemhuVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoaXMuZGlzY292ZXJMaXN0ID0gW107XG4gICAvLyAgdGhhdC5nZXREaXNjb3Zlckxpc3QoKTtcbiAgICB0aGlzLmdldEFkTGlzdCgpO1xuXG4gICAvLyAg55m75b2V6I635Y+W55So5oi35L+h5oGvXG4gICAgd3gubG9naW4oe1xuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgXG4gICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKFVTRVJfQ09ERSwgcmVzKTtcbiAgICAgICAgLy93eC5nZXR1c2VyaW5mb+aOpeWPo+S4jeWGjeaUr+aMgVxuICAgICAgICB3eC5nZXRTZXR0aW5nKHtcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAvL+WIpOaWreeUqOaIt+ayoeacieaOiOadg+OAgumcgOimgeW8ueahhlxuICAgICAgICAgICAgaWYoIXJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSl7XG4gICAgICAgICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgc2hvd01vZGVsOiB0cnVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXsvL+ayoeacieaOiOadg+mcgOimgeW8ueahhlxuICAgICAgICAgICAgICB0aGF0LnNldERhdGEoe1xuICAgICAgICAgICAgICAgIHNob3dNb2RlbDogZmFsc2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitLi4uJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB0aGF0LmdldExvZ2luKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+ezu+e7n+aPkOekujrnvZHnu5zplJnor68nLFxuICAgICAgICAgICAgICBpY29uOiAnd2FybicsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZmFpbDpmdW5jdGlvbiAoKSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6J+ezu+e7n+aPkOekujrnvZHnu5zplJnor68nLFxuICAgICAgICAgIGljb246ICd3YXJuJyxcbiAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwidGVzdC0tLS1cIik7XG4gICAgdGhpcy5nZXRNeU9yZGVyKCk7XG4gICAgLy/orr7nva7mu5rliqjpq5jluqZcbiAgICBsZXQgc3lzdGVtSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoU1lTVEVNX0lORk8pO1xuICAgIHRoYXQud2luSGVpZ2h0ID0gc3lzdGVtSW5mby53aW5kb3dIZWlnaHQ7XG4gICAgdGhhdC4kYXBwbHkoKTtcblxuICB9XG5cbiAgY29tcHV0ZWQgPSB7fVxuICBtZXRob2RzID0ge1xuICAgIGdvVG9BZHZlcnQodXJsKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInVybD09PVwiICsgdXJsKTtcbiAgICAgIGlmICh1cmwubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiB1cmxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24ocmVzKSB7XG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICfni6zpub/ljZXouqsnLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL2hvbWUnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAvLyDovazlj5HmiJDlip9cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFsZXJ0Q2FsbGJhY2soKSB7XG4gICAgICB0aXAuYWxlcnQoJ+i3s+i9rCcpO1xuICAgIH0sXG4gICAgY2xvc2VBbGVydCgpIHtcbiAgICAgIHRpcC5hbGVydCgn5YWz6ZetJyk7XG4gICAgfSxcbiAgICBnZXRDdXJyZW50VGFiKGN1ciwgZXZ0KSB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgIHRoaXMucGFnZV90b3RhbCA9IDA7XG4gICAgICB0aGlzLm9yZGVyTGlzdCA9IFtdO1xuXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICB0aGF0LmN1cnJlbnRUYWIgPSBjdXI7XG4gICAgICBjb25zb2xlLmxvZyhcImN1clwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGN1cik7XG4gICAgICBpZiAoY3VyID09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLmiYDmnInorqLljZXnsbvlnotcIik7XG4gICAgICAgIHRoYXQub3JkZXJTdGF0dXMgPSBcIlwiO1xuICAgICAgICB0aGF0LmdldE15T3JkZXIoKTtcbiAgICAgIH0gZWxzZSBpZiAoY3VyID09IDEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLmnKrku5jmrL7orqLljZXnsbvlnotcIik7XG4gICAgICAgIHRoYXQub3JkZXJTdGF0dXMgPSAwO1xuICAgICAgICB0aGF0LmdldE15T3JkZXIoKTtcbiAgICAgIH0gZWxzZSBpZiAoY3VyID09IDIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLlvoXmlLbotKforqLljZXnsbvlnotcIik7XG4gICAgICAgIHRoYXQub3JkZXJTdGF0dXMgPSAyO1xuICAgICAgICB0aGF0LnJlY2VpdmVGbGc9MjtcbiAgICAgICAgdGhhdC5nZXRNeU9yZGVyKCk7XG4gICAgICB9IGVsc2UgaWYgKGN1ciA9PSAzKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCLlt7LlrozmiJDorqLljZXnsbvlnotcIik7XG4gICAgICAgIHRoYXQub3JkZXJTdGF0dXMgPSA0O1xuICAgICAgICB0aGF0LnJlY2VpdmVGbGc9NDtcbiAgICAgICAgdGhhdC5nZXRNeU9yZGVyKCk7XG4gICAgICB9XG4gICAgICB0aGF0LiRhcHBseSgpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5ruR5Yqo5YiH5o2idGFiXG4gICAgICovXG4gICAgYmluZENoYW5nZShlKSB7XG5cbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIHRoYXQuY3VycmVudFRhYiA9IGUuZGV0YWlsLmN1cnJlbnQ7XG4gICAgICBjb25zb2xlLmxvZyhcImNoYW5nZSB0YWIuLi4uXCIgKyBlLmRldGFpbGN1cnJlbnQpO1xuICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICB9LFxuXG5cbiAgLy/ojrflj5bnlKjmiLfkv6Hmga/mlrDmjqXlj6NcbiAgYWdyZWVHZXRVc2VyOmZ1bmN0aW9uIChlKSB7XG4gICAgLy/orr7nva7nlKjmiLfkv6Hmga/mnKzlnLDlrZjlgqhcbiAgICB0cnkge1xuXG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoVVNFUl9JTkZPLCBlLmRldGFpbC51c2VySW5mbyk7XG4gICAgICAgIC8v5a2Y5YKo57O757uf5L+h5oGvwqBcbiAgICAgICAgbGV0IHN5c3RlbUluZm8gPSB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoU1lTVEVNX0lORk8sIHN5c3RlbUluZm8pO1xuXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfns7vnu5/mj5DnpLo6572R57uc6ZSZ6K+vJyxcbiAgICAgICAgICBpY29uOiAnd2FybicsXG4gICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgIHRpdGxlOifliqDovb3kuK0uLi4nXG4gICAgfSlcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5zZXREYXRhKHtcbiAgICAgIHNob3dNb2RlbDpmYWxzZVxuICAgIH0pO1xuICAgICAgdGhhdC5nZXRMb2dpbigpO1xuICB9LFxuXG5cbiAgLy/liqDovb3mm7TlpJpcbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIuWKoOi9veabtOWkmlwiKTtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5zaG93TG9hZGluZyA9IHRydWU7XG4gICAgY29uc29sZS5sb2codGhhdC5wYWdlX3RvdGFsICsgXCIyMzI9PT1cIiArIHRoYXQuY3VycmVudFBhZ2UpO1xuICAgIC8v5Yik5pat5oC76aG15pWw5piv5ZCm5aSn5LqO57+76aG15pWwXG4gICAgaWYgKCh0aGF0LnBhZ2VfdG90YWwpID4gdGhhdC5jdXJyZW50UGFnZSkge1xuICAgICAgLy/pmLLmraLph43lpI3liqDovb1cbiAgICAgIGlmICh0aGF0LnByZXZlbnRSZXBlYXRSZXVxZXN0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgdGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCA9IHRydWU7XG4gICAgICB0aGF0LmN1cnJlbnRQYWdlKys7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRUYWIpO1xuICAgICAgaWYgKHRoaXMuY3VycmVudFRhYiA9PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5omA5pyJ6K6i5Y2V57G75Z6LXCIpO1xuICAgICAgICB0aGF0LmdldE15T3JkZXIodGhhdC5jdXJyZW50UGFnZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFRhYiA9PSAxKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pyq5LuY5qy+6K6i5Y2V57G75Z6LXCIpO1xuICAgICAgICB0aGF0Lm9yZGVyU3RhdHVzID0gMDtcbiAgICAgICAgdGhhdC5nZXRNeU9yZGVyKHRoYXQuY3VycmVudFBhZ2UpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRUYWIgPT0gMikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuW+heWPkei0p+iuouWNleexu+Wei1wiKTtcbiAgICAgICAgdGhhdC5vcmRlclN0YXR1cyA9IDI7XG4gICAgICAgIHRoYXQucmVjZWl2ZUZsZz0yO1xuICAgICAgICB0aGF0LmdldE15T3JkZXIodGhhdC5jdXJyZW50UGFnZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFRhYiA9PSAzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5bey5a6M5oiQ6K6i5Y2V57G75Z6LXCIpO1xuICAgICAgICB0aGF0Lm9yZGVyU3RhdHVzID0gNDtcbiAgICAgICAgdGhhdC5nZXRNeU9yZGVyKHRoYXQuY3VycmVudFBhZ2UpO1xuICAgICAgfVxuICAgICAgdGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgfVxuICBldmVudHMgPSB7XG5cbiAgICAgcmVmcmVzaE9yZGVyTGlzdChtc2cpe1xuICAgICAgY29uc29sZS5sb2coXCJtc2flgLw6XCIrbXNnKTtcbiAgICAgIHRoaXMuZ2V0TXlPcmRlcigxLDEwLDEpO1xuICAgIH1cbiAgfVxuXG5cbn1cblxuXG4iXX0=