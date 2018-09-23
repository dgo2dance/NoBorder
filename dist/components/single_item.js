'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _shop_item_list = require('./shop_item_list.js');

var _shop_item_list2 = _interopRequireDefault(_shop_item_list);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _constant = require('./../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var singleItem = function (_wepy$component) {
  _inherits(singleItem, _wepy$component);

  function singleItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, singleItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = singleItem.__proto__ || Object.getPrototypeOf(singleItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      singleList: {
        default: [],
        flag: "",
        orderNo: "",
        list: []
      }
    }, _this.components = {
      shopItemList: _shop_item_list2.default
    }, _this.events = {}, _this.methods = {
      delOrder: function delOrder(e) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this2.flag = 2;
                  _this2.orderNo = e.currentTarget.dataset.id;
                  _context.next = 4;
                  return _tip2.default.confirm('是否删除订单');

                case 4:
                  console.log(_this2.flag);
                  _this2.editOrderInfo(_this2.orderNo, _this2.flag);
                  console.log("删除成功");

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      completion: function completion(e) {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this3.flag = 3;
                  _this3.orderNo = e.currentTarget.dataset.id;
                  _context2.next = 4;
                  return _tip2.default.confirm('是否确认收货');

                case 4:
                  _this3.editOrderInfo(_this3.orderNo, _this3.flag);
                  console.log("完成");

                case 6:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3);
        }))();
      },
      payMoney: function payMoney(e) {
        var _this4 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var tradeNo, userSpecialInfo, openId, pay;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _this4.orderNo = e.currentTarget.dataset.id;
                  tradeNo = e.currentTarget.dataset.tradeno;
                  userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                  openId = userSpecialInfo.openid;
                  _context3.next = 6;
                  return _api2.default.toPay({
                    query: {
                      openId: openId,
                      orderNo: tradeNo
                    }
                  });

                case 6:
                  pay = _context3.sent;

                  if (pay.data.code == 0) {
                    //以下是微信支付
                    wx.requestPayment({
                      appId: pay.data.appId,
                      timeStamp: pay.data.timeStamp,
                      nonceStr: pay.data.nonceStr,
                      package: pay.data.package,
                      signType: 'MD5',
                      paySign: pay.data.paySign,
                      success: function success(res) {
                        console.log('pay', res);
                        setTimeout(function () {
                          //支付成功 关闭loadding 跳转到支付成功页面
                          _tip2.default.loaded();
                          _wepy2.default.navigateTo({
                            url: "/pages/pay_success?orderNo=" + tradeNo
                          });
                        }, 2000);
                      },
                      fail: function fail(res) {
                        _tip2.default.alert('支付失败');
                      }
                    });
                  } else {
                    _tip2.default.alert('支付失败');
                  }

                case 8:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this4);
        }))();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(singleItem, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log("===========lzz返回数据lzz=========");
      console.log(this.orderList);
    }
  }]);

  return singleItem;
}(_wepy2.default.component);

exports.default = singleItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZV9pdGVtLmpzIl0sIm5hbWVzIjpbInNpbmdsZUl0ZW0iLCJwcm9wcyIsInNpbmdsZUxpc3QiLCJkZWZhdWx0IiwiZmxhZyIsIm9yZGVyTm8iLCJsaXN0IiwiY29tcG9uZW50cyIsInNob3BJdGVtTGlzdCIsImV2ZW50cyIsIm1ldGhvZHMiLCJkZWxPcmRlciIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImlkIiwiY29uZmlybSIsImNvbnNvbGUiLCJsb2ciLCJlZGl0T3JkZXJJbmZvIiwiY29tcGxldGlvbiIsInBheU1vbmV5IiwidHJhZGVObyIsInRyYWRlbm8iLCJ1c2VyU3BlY2lhbEluZm8iLCJnZXRTdG9yYWdlU3luYyIsIm9wZW5JZCIsIm9wZW5pZCIsInRvUGF5IiwicXVlcnkiLCJwYXkiLCJkYXRhIiwiY29kZSIsInd4IiwicmVxdWVzdFBheW1lbnQiLCJhcHBJZCIsInRpbWVTdGFtcCIsIm5vbmNlU3RyIiwicGFja2FnZSIsInNpZ25UeXBlIiwicGF5U2lnbiIsInN1Y2Nlc3MiLCJyZXMiLCJzZXRUaW1lb3V0IiwibG9hZGVkIiwibmF2aWdhdGVUbyIsInVybCIsImZhaWwiLCJhbGVydCIsIm9yZGVyTGlzdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBSXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFFbkJDLEssR0FBUTtBQUNOQyxrQkFBWTtBQUNWQyxpQkFBUyxFQURDO0FBRVZDLGNBQUssRUFGSztBQUdWQyxpQkFBUSxFQUhFO0FBSVZDLGNBQUs7QUFKSztBQUROLEssUUFVUkMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUliQyxNLEdBQVMsRSxRQUlUQyxPLEdBQVU7QUFDRkMsY0FERSxvQkFDT0MsQ0FEUCxFQUNVO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQix5QkFBS1IsSUFBTCxHQUFVLENBQVY7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b3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwJ1xuaW1wb3J0IFNob3BJdGVtTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3Nob3BfaXRlbV9saXN0J1xuaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpJ1xuaW1wb3J0IHtcbiAgU1lTVEVNX0lORk8sXG4gIFVTRVJfU1BFQ0lDQUxfSU5GT1xufSBmcm9tICcuLi91dGlscy9jb25zdGFudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzaW5nbGVJdGVtIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuXG4gIHByb3BzID0ge1xuICAgIHNpbmdsZUxpc3Q6IHtcbiAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgZmxhZzpcIlwiLFxuICAgICAgb3JkZXJObzpcIlwiLFxuICAgICAgbGlzdDpbXVxuICAgIH1cbiAgfVxuXG5cbiAgY29tcG9uZW50cyA9IHtcbiAgICBzaG9wSXRlbUxpc3Q6IFNob3BJdGVtTGlzdFxuICB9XG5cbiAgZXZlbnRzID0ge1xuXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGFzeW5jIGRlbE9yZGVyKGUpIHtcbiAgICAgIHRoaXMuZmxhZz0yO1xuICAgICAgdGhpcy5vcmRlck5vID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICBhd2FpdCB0aXAuY29uZmlybSgn5piv5ZCm5Yig6Zmk6K6i5Y2VJyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZsYWcpO1xuICAgICAgdGhpcy5lZGl0T3JkZXJJbmZvKHRoaXMub3JkZXJObyx0aGlzLmZsYWcpO1xuICAgICAgY29uc29sZS5sb2coXCLliKDpmaTmiJDlip9cIilcblxuICAgIH0sXG4gICAgICBhc3luYyBjb21wbGV0aW9uKGUpIHtcbiAgICAgIHRoaXMuZmxhZz0zO1xuICAgICAgdGhpcy5vcmRlck5vID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICBhd2FpdCB0aXAuY29uZmlybSgn5piv5ZCm56Gu6K6k5pS26LSnJyk7XG4gICAgICB0aGlzLmVkaXRPcmRlckluZm8odGhpcy5vcmRlck5vLHRoaXMuZmxhZyk7XG4gICAgICBjb25zb2xlLmxvZyhcIuWujOaIkFwiKVxuICAgIH0sXG5cbiAgICBhc3luYyBwYXlNb25leShlKSB7XG4gICAgICB0aGlzLm9yZGVyTm8gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgIGxldCB0cmFkZU5vID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHJhZGVubztcbiAgICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcblxuICAgICAgY29uc3QgcGF5ID0gYXdhaXQgYXBpLnRvUGF5KHtcbiAgICAgICAgcXVlcnk6e1xuICAgICAgICAgIG9wZW5JZDogb3BlbklkLFxuICAgICAgICAgIG9yZGVyTm86IHRyYWRlTm9cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAocGF5LmRhdGEuY29kZT09MCkge1xuICAgICAgICAvL+S7peS4i+aYr+W+ruS/oeaUr+S7mFxuICAgICAgICB3eC5yZXF1ZXN0UGF5bWVudCh7XG4gICAgICAgICAgYXBwSWQ6IHBheS5kYXRhLmFwcElkLFxuICAgICAgICAgIHRpbWVTdGFtcDogcGF5LmRhdGEudGltZVN0YW1wLFxuICAgICAgICAgIG5vbmNlU3RyOiBwYXkuZGF0YS5ub25jZVN0cixcbiAgICAgICAgICBwYWNrYWdlOiBwYXkuZGF0YS5wYWNrYWdlLFxuICAgICAgICAgIHNpZ25UeXBlOiAnTUQ1JyxcbiAgICAgICAgICBwYXlTaWduOiBwYXkuZGF0YS5wYXlTaWduLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXknLCByZXMpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgLy/mlK/ku5jmiJDlip8g5YWz6ZetbG9hZGRpbmcg6Lez6L2s5Yiw5pSv5LuY5oiQ5Yqf6aG16Z2iXG4gICAgICAgICAgICAgIHRpcC5sb2FkZWQoKTtcbiAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL3BheV9zdWNjZXNzP29yZGVyTm89XCIrdHJhZGVOb1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgMjAwMClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIHRpcC5hbGVydCgn5pSv5LuY5aSx6LSlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlwLmFsZXJ0KCfmlK/ku5jlpLHotKUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PWx6eui/lOWbnuaVsOaNrmx6ej09PT09PT09PVwiKVxuICAgIGNvbnNvbGUubG9nKHRoaXMub3JkZXJMaXN0KTtcbiAgfVxufVxuXG4iXX0=