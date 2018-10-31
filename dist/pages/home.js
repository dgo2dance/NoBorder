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
      navigationBarTitleText: '每图'
    }, _this.$repeat = {}, _this.$props = { "discover": { "xmlns:v-bind": "", "v-bind:list.sync": "discoverList" }, "bottomLoadMore": { "xmlns:v-bind": "", "v-bind:show.sync": "showLoading", "message": "正在加载" }, "placeholder": { "xmlns:v-bind": "", "v-bind:show.sync": "is_empty", "message": "暂无发现数据" } }, _this.$events = {}, _this.components = {
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

    //get List

  }, {
    key: 'getDiscoverList',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(currentPage, size) {
        var that, json;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this;
                _context2.next = 3;
                return _api2.default.getHomeDisvocerList({
                  query: {
                    page: currentPage || 1,
                    size: size || 10
                  }
                });

              case 3:
                json = _context2.sent;

                if (json.data.code == 0) {
                  that.discoverList = [].concat(_toConsumableArray(that.discoverList), _toConsumableArray(json.data.list));

                  if (json.data.page_total) {
                    // 后台的数据不再返回page_total
                    that.page_total = json.data.page_total;
                  };
                  if (json.data.page_total == 0) {
                    //暂无数据
                    that.is_empty = true;
                  }
                  that.$apply();
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getDiscoverList(_x4, _x5) {
        return _ref3.apply(this, arguments);
      }

      return getDiscoverList;
    }()
  }, {
    key: 'getMyOrderSize',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var that, userSpecialInfo, openId, json, dotList;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log("订单数量统计");
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context3.next = 6;
                return _api2.default.getMyOrderSize({
                  query: {
                    openId: openId
                  }
                });

              case 6:
                json = _context3.sent;

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
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getMyOrderSize() {
        return _ref4.apply(this, arguments);
      }

      return getMyOrderSize;
    }()
  }, {
    key: 'getAdList',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var json;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _api2.default.getAdList({
                  query: {}
                });

              case 2:
                json = _context4.sent;


                console.log("getAdList：" + JSON.stringify(json));

                if (json.data.code == 0) {
                  this.adList = json.data.data;
                  this.$apply();
                } else {}

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getAdList() {
        return _ref5.apply(this, arguments);
      }

      return getAdList;
    }()

    // 登录服务器；

  }, {
    key: 'login',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var that, userSpecialInfo, userInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                userInfo = _wepy2.default.getStorageSync(_constant.USER_INFO) || {};
                openId = userSpecialInfo.openid;
                _context5.next = 6;
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
                json = _context5.sent;

                console.log("login" + JSON.stringify(json));

                if (json.data.code == 0) {
                  console.log("登录成功");
                }

              case 9:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function login() {
        return _ref6.apply(this, arguments);
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
      that.getDiscoverList();
      // this.getAdList();

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJkaXNjb3ZlciIsImJvdHRvbUxvYWRNb3JlIiwicGxhY2Vob2xkZXIiLCJib21ic2NyZWVuIiwidGFiIiwib3JkZXJJdGVtIiwiZGF0YSIsImltZ1VybHMiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwiaW5kaWNhdG9yQWN0aXZlQ29sb3IiLCJkaXNjb3Zlckxpc3QiLCJpc19lbXB0eSIsImN1cnJlbnRQYWdlIiwicGFnZV90b3RhbCIsInNob3dMb2FkaW5nIiwicHJldmVudFJlcGVhdFJldXFlc3QiLCJhZExpc3QiLCJ0cHMiLCJpc19zaG93X2FsZXJ0Iiwid2luSGVpZ2h0IiwidG90YWxDb3VudCIsInRhYkxpc3QiLCJvcmRlckxpc3QiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJhcHBpZCIsInNlY3JldCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImdvVG9BZHZlcnQiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibmF2aWdhdGVUbyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicmVzIiwiZnJvbSIsInRhcmdldCIsInRpdGxlIiwicGF0aCIsInN1Y2Nlc3MiLCJmYWlsIiwiYWxlcnRDYWxsYmFjayIsImFsZXJ0IiwiY2xvc2VBbGVydCIsImdldEN1cnJlbnRUYWIiLCJjdXIiLCJldnQiLCJ0aGF0IiwiY3VycmVudFRhYiIsIm9yZGVyU3RhdHVzIiwiZ2V0TXlPcmRlciIsInJlY2VpdmVGbGciLCIkYXBwbHkiLCJiaW5kQ2hhbmdlIiwiZSIsImRldGFpbCIsImN1cnJlbnQiLCJkZXRhaWxjdXJyZW50IiwiYWdyZWVHZXRVc2VyIiwic2V0U3RvcmFnZVN5bmMiLCJzeXN0ZW1JbmZvIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJzZXREYXRhIiwic2hvd01vZGVsIiwiZ2V0TG9naW4iLCJvblJlYWNoQm90dG9tIiwiZXZlbnRzIiwicmVmcmVzaE9yZGVyTGlzdCIsIm1zZyIsInNpemUiLCJyZWZyZXNoIiwidXNlclNwZWNpYWxJbmZvIiwiZ2V0U3RvcmFnZVN5bmMiLCJvcGVuSWQiLCJvcGVuaWQiLCJnZXRPcmciLCJxdWVyeSIsInBhZ2UiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvZGUiLCJyZWNvcmRzIiwidG90YWxQYWdlcyIsImVycm9yIiwiZ2V0SG9tZURpc3ZvY2VyTGlzdCIsImxpc3QiLCJnZXRNeU9yZGVyU2l6ZSIsInBlbmRpbmdQYXlDb3VudCIsImJhY2tyZGVyc0NvdW50Iiwic2hpcHBlZENvdW50IiwiZG90TGlzdCIsIm5hbWUiLCJkb3ROdW0iLCIkaW52b2tlIiwiZ2V0QWRMaXN0IiwibG9naW4iLCJuaWNrbmFtZSIsIm5pY2tOYW1lIiwiZ2VuZGVyIiwicGFyc2VJbnQiLCJhdmF0YXJVcmwiLCJjaXR5IiwicHJvdmllbmNlIiwicHJvdmluY2UiLCJtZXRob2QiLCJ1c2VyQ29kZSIsImMiLCJkIiwicmVxdWVzdCIsImhlYWRlciIsIm9iaiIsImV4cGlyZXNfaW4iLCJEYXRlIiwibm93IiwiaGlkZUxvYWRpbmciLCJnZXREaXNjb3Zlckxpc3QiLCJnZXRTZXR0aW5nIiwiYXV0aFNldHRpbmciLCJ3aW5kb3dIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBT3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1C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RCxZQUE1QjtBQUNBM0UsV0FBS0ssTUFBTDtBQUVEOzs7O0VBcFMrQixlQUFLNEIsSTs7a0JBQWxCNUYsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcCdcbmltcG9ydCBUYWIgZnJvbSAnLi4vY29tcG9uZW50cy90YWInXG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9kaXNjb3ZlcidcbmltcG9ydCBCb21ic2NyZWVuIGZyb20gJy4uL2NvbXBvbmVudHMvYm9tYl9zY3JlZW4nXG5pbXBvcnQgT3JkZXJJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvb3JkZXJfaXRlbSdcbmltcG9ydCBCb3R0b21Mb2FkTW9yZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vYm90dG9tTG9hZE1vcmVcIlxuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9wbGFjZWhvbGRlclwiXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5pbXBvcnQge1xuICBTWVNURU1fSU5GTyxcbiAgVVNFUl9TUEVDSUNBTF9JTkZPLFxuICBVU0VSX0lORk8sXG4gIFVTRVJfQ09ERVxufSBmcm9tICcuLi91dGlscy9jb25zdGFudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+avj+WbvicsXG4gIH1cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImRpc2NvdmVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImRpc2NvdmVyTGlzdFwifSxcImJvdHRvbUxvYWRNb3JlXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzaG93LnN5bmNcIjpcInNob3dMb2FkaW5nXCIsXCJtZXNzYWdlXCI6XCLmraPlnKjliqDovb1cIn0sXCJwbGFjZWhvbGRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c2hvdy5zeW5jXCI6XCJpc19lbXB0eVwiLFwibWVzc2FnZVwiOlwi5pqC5peg5Y+R546w5pWw5o2uXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBkaXNjb3ZlcjogRGlzY292ZXIsXG4gICAgYm90dG9tTG9hZE1vcmU6IEJvdHRvbUxvYWRNb3JlLFxuICAgIHBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlcixcbiAgICBib21ic2NyZWVuOiBCb21ic2NyZWVuLFxuICAgIHRhYjogVGFiLFxuICAgIG9yZGVySXRlbTogT3JkZXJJdGVtLFxuICB9XG4gIGRhdGEgPSB7XG5cbiAgICBpbWdVcmxzOiBbXG4gICAgICAnLi4vaW1hZ2VzL2ltYWdlX2RlbW8ucG5nJyxcbiAgICBdLFxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW50ZXJ2YWw6IDMwMDAsXG4gICAgZHVyYXRpb246IDEwMDAsXG4gICAgaW5kaWNhdG9yQWN0aXZlQ29sb3I6IFwiI2ZmZlwiLFxuICAgIGRpc2NvdmVyTGlzdDogW10sXG4gICAgLy/mmK/lkKbmnInmlbDmja5cbiAgICBpc19lbXB0eTogZmFsc2UsXG4gICAgLy/lvZPliY3pobXpnaJcbiAgICBjdXJyZW50UGFnZTogMSxcbiAgICAvL+aAu+mhteaVsFxuICAgIHBhZ2VfdG90YWw6IDAsXG4gICAgLy/mmK/lkKbmmL7npLog5bqV6YOobG9hZGluZ1xuICAgIHNob3dMb2FkaW5nOiB0cnVlLFxuICAgIC8v6Ziy5q2i6YeN5aSN5Yqg6L29XG4gICAgcHJldmVudFJlcGVhdFJldXFlc3Q6IGZhbHNlLFxuICAgIC8v5bm/5ZGK5YiX6KGoXG4gICAgYWRMaXN0OiBbXSxcbiAgICB0cHM6IDAsXG4gICAgaXNfc2hvd19hbGVydDogdHJ1ZSxcbiAgICB3aW5IZWlnaHQ6IDAsXG4gICAgdG90YWxDb3VudDogMCxcbiAgICB0YWJMaXN0OiBbXCLlhajpg6jmuIXljZVcIiwgXCLmiJHliqDlhaXnmoRcIixcIuaIkeWIm+W7uueahFwiXSxcbiAgICBvcmRlckxpc3Q6IFtdLFxuICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgIGlzX2VtcHR5OiBmYWxzZSxcbiAgICBvcmRlclN0YXR1czogXCJcIixcbiAgICBjdXJyZW50VGFiOiAwLFxuICAgIGZsYWc6IDAsXG4gICAgXG4gICAgLy/lvoXku5jmrL5cbiAgICBwZW5kaW5nUGF5Q291bnQgOiAwLFxuICAgIC8v5b6F5Y+R6LSnXG4gICAgYmFja3JkZXJzQ291bnQgOiAwLFxuICAgIC8v5b6F5pS26LSnXG4gICAgc2hpcHBlZENvdW50IDogMCxcbiAgICByZWNlaXZlRmxnIDogMCxcbiAgICBzaG93TW9kZWw6ZmFsc2VcblxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbCxcbiAgICBhcHBpZDogJ3d4MjI1Zjc1ZTY0ZWRkYWRkZCcsXG4gICAgc2VjcmV0OiAnODA1NGEwY2M1OTdlMGM2MzBhMjAyNTcyNGI0ZTljMTEnLFxuICB9XG5cbiAgYXN5bmMgZ2V0TXlPcmRlcihjdXJyZW50UGFnZSwgc2l6ZSxyZWZyZXNoKSB7XG4gICAgY29uc29sZS5sb2coXCJyZWZyZXNo5YC877yaXCIrcmVmcmVzaCk7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKFwib3JkZXJTdGF0dXPlgLxcIik7XG4gICAgY29uc29sZS5sb2coXCJvcmRlclN0YXR1c+WAvFwiICsgdGhhdC5vcmRlclN0YXR1cyk7XG4gICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdldE9yZyh7XG4gICAgICBxdWVyeToge1xuICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgcGFnZTogY3VycmVudFBhZ2UgfHwgMSxcbiAgICAgICAgc2l6ZTogc2l6ZSB8fCAxMCxcblxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwibXlvcmRlcjpcIitKU09OLnN0cmluZ2lmeShqc29uKSk7XG5cbiAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xuICAgIGNvbnNvbGUubG9nKFwibXlvcmRlcjpyZWZyZXNoXCIrcmVmcmVzaCk7XG5cbiAgICBjb25zb2xlLmxvZyhcIm15b3JkZXI6cmVjb3Jkc1wiK0pTT04uc3RyaW5naWZ5KGpzb24uZGF0YS5kYXRhLnJlY29yZHMpKTtcblxuICAgICAgaWYgKHJlZnJlc2gpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibXlvcmRlcjpyZWNvcmRzLTAwMVwiK2pzb24uZGF0YS5kYXRhLnJlY29yZHMpO1xuXG4gICAgICAgIHRoYXQub3JkZXJMaXN0ID0ganNvbi5kYXRhLmRhdGEucmVjb3JkcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoYXQub3JkZXJMaXN0ID0gWy4uLnRoYXQub3JkZXJMaXN0LCAuLi5qc29uLmRhdGEuZGF0YS5yZWNvcmRzXTtcbiAgICAgIH1cbiAgICAgIHRoYXQucGFnZV90b3RhbCA9IGpzb24uZGF0YS5kYXRhLnRvdGFsUGFnZXM7XG4gICAgICB0aGF0LnRvdGFsQ291bnQgPSBqc29uLmRhdGEuZGF0YS50b3RhbENvdW50O1xuICAgICAgY29uc29sZS5sb2coXCLmnaHnm67mlbDvvJpcIiArIHRoYXQudG90YWxDb3VudCk7XG4gICAgICBpZiAoanNvbi5kYXRhLnBhZ2VfdG90YWwgPT0gMCkge1xuICAgICAgICAvL+aaguaXoOaVsOaNrlxuICAgICAgICB0aGF0LmlzX2VtcHR5ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoYXQuaXNfZW1wdHkgPSBmYWxzZTtcbiAgICAgIH1cbiAgLy8gICAgdGhhdC5nZXRNeU9yZGVyU2l6ZSgpO1xuICAgICAgY29uc29sZS5sb2coXCJsaXN06L+U5Zue5pWw5o2uXCIpO1xuICAgICAgY29uc29sZS5sb2codGhhdC5vcmRlckxpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICB9XG4gICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xuICAgIHRoYXQuJGFwcGx5KCk7XG4gIH1cblxuICAvL2dldCBMaXN0XG4gIGFzeW5jIGdldERpc2NvdmVyTGlzdChjdXJyZW50UGFnZSwgc2l6ZSkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdldEhvbWVEaXN2b2Nlckxpc3Qoe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgcGFnZTogY3VycmVudFBhZ2UgfHwgMSxcbiAgICAgICAgc2l6ZTogc2l6ZSB8fCAxMFxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICB0aGF0LmRpc2NvdmVyTGlzdCA9IFsuLi50aGF0LmRpc2NvdmVyTGlzdCwgLi4uanNvbi5kYXRhLmxpc3RdO1xuXG4gICAgICBpZiAoanNvbi5kYXRhLnBhZ2VfdG90YWwpIHsgLy8g5ZCO5Y+w55qE5pWw5o2u5LiN5YaN6L+U5ZuecGFnZV90b3RhbFxuICAgICAgdGhhdC5wYWdlX3RvdGFsID0ganNvbi5kYXRhLnBhZ2VfdG90YWxcbiAgICAgIH07XG4gICAgICBpZiAoanNvbi5kYXRhLnBhZ2VfdG90YWwgPT0gMCkge1xuICAgICAgICAvL+aaguaXoOaVsOaNrlxuICAgICAgICB0aGF0LmlzX2VtcHR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKTtcbiAgICB9XG4gICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xuICB9XG5cbiAgYXN5bmMgZ2V0TXlPcmRlclNpemUoKSB7XG4gICAgY29uc29sZS5sb2coXCLorqLljZXmlbDph4/nu5/orqFcIik7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5nZXRNeU9yZGVyU2l6ZSh7XG4gICAgICBxdWVyeToge1xuICAgICAgICBvcGVuSWQ6IG9wZW5JZFxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICAvL+W+heS7mOasvlxuICAgICAgdGhhdC5wZW5kaW5nUGF5Q291bnQgPSBqc29uLmRhdGEucGVuZGluZ1BheUNvdW50O1xuICAgICAgLy/lvoXlj5HotKdcbiAgICAgIHRoYXQuYmFja3JkZXJzQ291bnQgPSBqc29uLmRhdGEuYmFja3JkZXJzQ291bnQ7XG4gICAgICAvL+W+heaUtui0p1xuICAgICAgdGhhdC5zaGlwcGVkQ291bnQgPSBqc29uLmRhdGEuc2hpcHBlZENvdW50O1xuXG4gICAgICAvL+mHjeWGmWxpc3RcbiAgICAgIHZhciBkb3RMaXN0ID0gW1wi5YWo6YOo6K6i5Y2VXCIsIHsgbmFtZTogXCLlvoXmlK/ku5hcIiwgZG90TnVtOiB0aGF0LnBlbmRpbmdQYXlDb3VudCB9LCB7IG5hbWU6IFwi5b6F5pS26LSnXCIsIGRvdE51bTogdGhhdC5iYWNrcmRlcnNDb3VudCB9LCBcIuW3suWujOaIkFwiXTtcbiAgICAgIHRoaXMuJGludm9rZShcInRhYlwiLCBcImNoYW5nZUxpc3RcIiwgZG90TGlzdCk7XG4gICAgICB0aGF0LiRhcHBseSgpO1xuICAgIH1cbiAgfVxuXG4gIFxuICBhc3luYyBnZXRBZExpc3QoKSB7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5nZXRBZExpc3Qoe1xuICAgICAgcXVlcnk6IHt9XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcImdldEFkTGlzdO+8mlwiK0pTT04uc3RyaW5naWZ5KGpzb24pKTtcblxuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICB0aGlzLmFkTGlzdCA9IGpzb24uZGF0YS5kYXRhO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9IGVsc2Uge31cbiAgfVxuXG4gIC8vIOeZu+W9leacjeWKoeWZqO+8m1xuICBhc3luYyBsb2dpbigpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICBsZXQgdXNlckluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfSU5GTykgfHwge307XG4gICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XG4gICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkubG9naW4oe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgb3BlbmlkOm9wZW5JZCxcbiAgICAgICAgbmlja25hbWU6dXNlckluZm8ubmlja05hbWUsXG4gICAgICAgIGdlbmRlcjpwYXJzZUludCh1c2VySW5mby5nZW5kZXIpLFxuICAgICAgICBhdmF0YXJVcmw6dXNlckluZm8uYXZhdGFyVXJsLFxuICAgICAgICBjaXR5OnVzZXJJbmZvLmNpdHksXG4gICAgICAgIHByb3ZpZW5jZTp1c2VySW5mby5wcm92aW5jZVxuICAgICAgfSxcbiAgICAgIG1ldGhvZDpcIlBPU1RcIlxuICAgIH0pO1xuICAgICBjb25zb2xlLmxvZyhcImxvZ2luXCIrSlNPTi5zdHJpbmdpZnkoanNvbikpO1xuXG4gICAgICAgIGlmKGpzb24uZGF0YS5jb2RlID09IDApe1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwi55m75b2V5oiQ5YqfXCIpO1xuXG4gICAgICAgIH1cblxuXG4gIH1cblxuICAgICAvL+eZu+W9lSDojrflj5ZvcGVuaWQsIOW5tueZu+W9leacjeWKoeWZqFxuICAgZ2V0TG9naW4oKSB7XG4gICAgICAgIGxldCB1c2VyQ29kZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9DT0RFKSB8fCB7fTtcbiAgICAgICAgbGV0IGNvZGUgPSB1c2VyQ29kZS5jb2RlO1xuICAgICAgICBsZXQgYyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9JTkZPKSB8fCB7fTtcbiAgICAgICAgaWYoY29kZSl7XG4gICAgICAgICAgbGV0IGQgPSB0aGlzLmdsb2JhbERhdGE7IC8v6L+Z6YeM5a2Y5YKo5LqGYXBwaWTjgIFzZWNyZXTjgIF0b2tlbuS4ssKgwqDCoMKgXG4gICAgICAgICAgbGV0IHVybCA9ICdodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbj9hcHBpZD0nICsgZC5hcHBpZCArICcmc2VjcmV0PScgKyBkLnNlY3JldCArICcmanNfY29kZT0nICsgY29kZSArICcmZ3JhbnRfdHlwZT1hdXRob3JpemF0aW9uX2NvZGUnO1xuXG4gICAgICAgICAgIHd4LnJlcXVlc3QoeyAgXG4gICAgICAgICAgICAgIHVybDogdXJsLCAgXG4gICAgICAgICAgICAgIGhlYWRlcjogeyAgXG4gICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nICBcbiAgICAgICAgICAgICAgfSwgIFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHsgIFxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgICAgICAgICBvYmoub3BlbmlkID0gcmVzLmRhdGEub3BlbmlkO1xuICAgICAgICAgICAgICAgIG9iai5leHBpcmVzX2luID0gRGF0ZS5ub3coKSArIHJlcy5kYXRhLmV4cGlyZXNfaW47XG4gICAgICAgICAgICAgICAvL+WtmOWCqG9wZW5pZMKgXG4gICAgICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8sIG9iaik7XG4gICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgIH1cblxuICAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcblxuICAgfVxuXG4gICAvLyDnmbvlvZXml7bliqDovb3poblcbiAgb25Mb2FkKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGlzLmRpc2NvdmVyTGlzdCA9IFtdO1xuICAgIHRoYXQuZ2V0RGlzY292ZXJMaXN0KCk7XG4gICAgLy8gdGhpcy5nZXRBZExpc3QoKTtcblxuICAgLy8gIOeZu+W9leiOt+WPlueUqOaIt+S/oeaBr1xuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIFxuICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYyhVU0VSX0NPREUsIHJlcyk7XG4gICAgICAgIC8vd3guZ2V0dXNlcmluZm/mjqXlj6PkuI3lho3mlK/mjIFcbiAgICAgICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgLy/liKTmlq3nlKjmiLfmsqHmnInmjojmnYPjgILpnIDopoHlvLnmoYZcbiAgICAgICAgICAgIGlmKCFyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pe1xuICAgICAgICAgICAgICB0aGF0LnNldERhdGEoe1xuICAgICAgICAgICAgICAgIHNob3dNb2RlbDogdHJ1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7Ly/msqHmnInmjojmnYPpnIDopoHlvLnmoYZcbiAgICAgICAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBzaG93TW9kZWw6IGZhbHNlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rS4uLidcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgdGhhdC5nZXRMb2dpbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6ICfns7vnu5/mj5DnpLo6572R57uc6ZSZ6K+vJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3dhcm4nLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGZhaWw6ZnVuY3Rpb24gKCkge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOifns7vnu5/mj5DnpLo6572R57uc6ZSZ6K+vJyxcbiAgICAgICAgICBpY29uOiAnd2FybicsXG4gICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcInRlc3QtLS0tXCIpO1xuICAgIHRoaXMuZ2V0TXlPcmRlcigpO1xuICAgIC8v6K6+572u5rua5Yqo6auY5bqmXG4gICAgbGV0IHN5c3RlbUluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFNZU1RFTV9JTkZPKTtcbiAgICB0aGF0LndpbkhlaWdodCA9IHN5c3RlbUluZm8ud2luZG93SGVpZ2h0O1xuICAgIHRoYXQuJGFwcGx5KCk7XG5cbiAgfVxuXG4gIGNvbXB1dGVkID0ge31cbiAgbWV0aG9kcyA9IHtcbiAgICBnb1RvQWR2ZXJ0KHVybCkge1xuICAgICAgY29uc29sZS5sb2coXCJ1cmw9PT1cIiArIHVybCk7XG4gICAgICBpZiAodXJsLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogdXJsXG4gICAgICB9KVxuICAgIH0sXG4gICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAn54us6bm/5Y2V6LqrJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy9ob21lJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhbGVydENhbGxiYWNrKCkge1xuICAgICAgdGlwLmFsZXJ0KCfot7PovawnKTtcbiAgICB9LFxuICAgIGNsb3NlQWxlcnQoKSB7XG4gICAgICB0aXAuYWxlcnQoJ+WFs+mXrScpO1xuICAgIH0sXG4gICAgZ2V0Q3VycmVudFRhYihjdXIsIGV2dCkge1xuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgICB0aGlzLnBhZ2VfdG90YWwgPSAwO1xuICAgICAgdGhpcy5vcmRlckxpc3QgPSBbXTtcblxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgdGhhdC5jdXJyZW50VGFiID0gY3VyO1xuICAgICAgY29uc29sZS5sb2coXCJjdXJcIik7XG4gICAgICBjb25zb2xlLmxvZyhjdXIpO1xuICAgICAgaWYgKGN1ciA9PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5omA5pyJ6K6i5Y2V57G75Z6LXCIpO1xuICAgICAgICB0aGF0Lm9yZGVyU3RhdHVzID0gXCJcIjtcbiAgICAgICAgdGhhdC5nZXRNeU9yZGVyKCk7XG4gICAgICB9IGVsc2UgaWYgKGN1ciA9PSAxKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pyq5LuY5qy+6K6i5Y2V57G75Z6LXCIpO1xuICAgICAgICB0aGF0Lm9yZGVyU3RhdHVzID0gMDtcbiAgICAgICAgdGhhdC5nZXRNeU9yZGVyKCk7XG4gICAgICB9IGVsc2UgaWYgKGN1ciA9PSAyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5b6F5pS26LSn6K6i5Y2V57G75Z6LXCIpO1xuICAgICAgICB0aGF0Lm9yZGVyU3RhdHVzID0gMjtcbiAgICAgICAgdGhhdC5yZWNlaXZlRmxnPTI7XG4gICAgICAgIHRoYXQuZ2V0TXlPcmRlcigpO1xuICAgICAgfSBlbHNlIGlmIChjdXIgPT0gMykge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5bey5a6M5oiQ6K6i5Y2V57G75Z6LXCIpO1xuICAgICAgICB0aGF0Lm9yZGVyU3RhdHVzID0gNDtcbiAgICAgICAgdGhhdC5yZWNlaXZlRmxnPTQ7XG4gICAgICAgIHRoYXQuZ2V0TXlPcmRlcigpO1xuICAgICAgfVxuICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOa7keWKqOWIh+aNonRhYlxuICAgICAqL1xuICAgIGJpbmRDaGFuZ2UoZSkge1xuXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICB0aGF0LmN1cnJlbnRUYWIgPSBlLmRldGFpbC5jdXJyZW50O1xuICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2UgdGFiLi4uLlwiICsgZS5kZXRhaWxjdXJyZW50KTtcbiAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgfSxcblxuXG4gIC8v6I635Y+W55So5oi35L+h5oGv5paw5o6l5Y+jXG4gIGFncmVlR2V0VXNlcjpmdW5jdGlvbiAoZSkge1xuICAgIC8v6K6+572u55So5oi35L+h5oGv5pys5Zyw5a2Y5YKoXG4gICAgdHJ5IHtcblxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKFVTRVJfSU5GTywgZS5kZXRhaWwudXNlckluZm8pO1xuICAgICAgICAvL+WtmOWCqOezu+e7n+S/oeaBr8KgXG4gICAgICAgIGxldCBzeXN0ZW1JbmZvID0gd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpO1xuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKFNZU1RFTV9JTkZPLCBzeXN0ZW1JbmZvKTtcblxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn57O757uf5o+Q56S6Oue9kee7nOmUmeivrycsXG4gICAgICAgICAgaWNvbjogJ3dhcm4nLFxuICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICB9KVxuICAgIH1cbiAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICB0aXRsZTon5Yqg6L295LitLi4uJ1xuICAgIH0pXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICBzaG93TW9kZWw6ZmFsc2VcbiAgICB9KTtcbiAgICAgIHRoYXQuZ2V0TG9naW4oKTtcbiAgfSxcblxuXG4gIC8v5Yqg6L295pu05aSaXG4gIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgY29uc29sZS5sb2coXCLliqDovb3mm7TlpJpcIik7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoYXQuc2hvd0xvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKHRoYXQucGFnZV90b3RhbCArIFwiMjMyPT09XCIgKyB0aGF0LmN1cnJlbnRQYWdlKTtcbiAgICAvL+WIpOaWreaAu+mhteaVsOaYr+WQpuWkp+S6jue/u+mhteaVsFxuICAgIGlmICgodGhhdC5wYWdlX3RvdGFsKSA+IHRoYXQuY3VycmVudFBhZ2UpIHtcbiAgICAgIC8v6Ziy5q2i6YeN5aSN5Yqg6L29XG4gICAgICBpZiAodGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QgPSB0cnVlO1xuICAgICAgdGhhdC5jdXJyZW50UGFnZSsrO1xuICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50VGFiKTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUYWIgPT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuaJgOacieiuouWNleexu+Wei1wiKTtcbiAgICAgICAgdGhhdC5nZXRNeU9yZGVyKHRoYXQuY3VycmVudFBhZ2UpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRUYWIgPT0gMSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuacquS7mOasvuiuouWNleexu+Wei1wiKTtcbiAgICAgICAgdGhhdC5vcmRlclN0YXR1cyA9IDA7XG4gICAgICAgIHRoYXQuZ2V0TXlPcmRlcih0aGF0LmN1cnJlbnRQYWdlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VGFiID09IDIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLlvoXlj5HotKforqLljZXnsbvlnotcIik7XG4gICAgICAgIHRoYXQub3JkZXJTdGF0dXMgPSAyO1xuICAgICAgICB0aGF0LnJlY2VpdmVGbGc9MjtcbiAgICAgICAgdGhhdC5nZXRNeU9yZGVyKHRoYXQuY3VycmVudFBhZ2UpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRUYWIgPT0gMykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuW3suWujOaIkOiuouWNleexu+Wei1wiKTtcbiAgICAgICAgdGhhdC5vcmRlclN0YXR1cyA9IDQ7XG4gICAgICAgIHRoYXQuZ2V0TXlPcmRlcih0aGF0LmN1cnJlbnRQYWdlKTtcbiAgICAgIH1cbiAgICAgIHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIH1cbiAgZXZlbnRzID0ge1xuXG4gICAgIHJlZnJlc2hPcmRlckxpc3QobXNnKXtcbiAgICAgIGNvbnNvbGUubG9nKFwibXNn5YC8OlwiK21zZyk7XG4gICAgICB0aGlzLmdldE15T3JkZXIoMSwxMCwxKTtcbiAgICB9XG4gIH1cblxuXG59XG5cblxuIl19