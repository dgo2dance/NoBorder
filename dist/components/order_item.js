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

var orderItem = function (_wepy$component) {
  _inherits(orderItem, _wepy$component);

  function orderItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, orderItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = orderItem.__proto__ || Object.getPrototypeOf(orderItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      orderList: {
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

  _createClass(orderItem, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log("===========lzz返回数据lzz=========");
      console.log(this.orderList);
    }
  }]);

  return orderItem;
}(_wepy2.default.component);

exports.default = orderItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyX2l0ZW0uanMiXSwibmFtZXMiOlsib3JkZXJJdGVtIiwicHJvcHMiLCJvcmRlckxpc3QiLCJkZWZhdWx0IiwiZmxhZyIsIm9yZGVyTm8iLCJsaXN0IiwiY29tcG9uZW50cyIsInNob3BJdGVtTGlzdCIsImV2ZW50cyIsIm1ldGhvZHMiLCJkZWxPcmRlciIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImlkIiwiY29uZmlybSIsImNvbnNvbGUiLCJsb2ciLCJlZGl0T3JkZXJJbmZvIiwiY29tcGxldGlvbiIsInBheU1vbmV5IiwidHJhZGVObyIsInRyYWRlbm8iLCJ1c2VyU3BlY2lhbEluZm8iLCJnZXRTdG9yYWdlU3luYyIsIm9wZW5JZCIsIm9wZW5pZCIsInRvUGF5IiwicXVlcnkiLCJwYXkiLCJkYXRhIiwiY29kZSIsInd4IiwicmVxdWVzdFBheW1lbnQiLCJhcHBJZCIsInRpbWVTdGFtcCIsIm5vbmNlU3RyIiwicGFja2FnZSIsInNpZ25UeXBlIiwicGF5U2lnbiIsInN1Y2Nlc3MiLCJyZXMiLCJzZXRUaW1lb3V0IiwibG9hZGVkIiwibmF2aWdhdGVUbyIsInVybCIsImZhaWwiLCJhbGVydCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBSXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFFbkJDLEssR0FBUTtBQUNOQyxpQkFBVztBQUNUQyxpQkFBUyxFQURBO0FBRVRDLGNBQUssRUFGSTtBQUdUQyxpQkFBUSxFQUhDO0FBSVRDLGNBQUs7QUFKSTtBQURMLEssUUFVUkMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUliQyxNLEdBQVMsRSxRQUlUQyxPLEdBQVU7QUFDRkMsY0FERSxvQkFDT0MsQ0FEUCxFQUNVO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQix5QkFBS1IsSUFBTCxHQUFVLENBQVY7QUFDQSx5QkFBS0MsT0FB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d2VweSdcbmltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwJ1xuaW1wb3J0IFNob3BJdGVtTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3Nob3BfaXRlbV9saXN0J1xuaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpJ1xuaW1wb3J0IHtcbiAgU1lTVEVNX0lORk8sXG4gIFVTRVJfU1BFQ0lDQUxfSU5GT1xufSBmcm9tICcuLi91dGlscy9jb25zdGFudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBvcmRlckl0ZW0gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG5cbiAgcHJvcHMgPSB7XG4gICAgb3JkZXJMaXN0OiB7XG4gICAgICBkZWZhdWx0OiBbXSxcbiAgICAgIGZsYWc6XCJcIixcbiAgICAgIG9yZGVyTm86XCJcIixcbiAgICAgIGxpc3Q6W11cbiAgICB9XG4gIH1cblxuXG4gIGNvbXBvbmVudHMgPSB7XG4gICAgc2hvcEl0ZW1MaXN0OiBTaG9wSXRlbUxpc3RcbiAgfVxuXG4gIGV2ZW50cyA9IHtcblxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBkZWxPcmRlcihlKSB7XG4gICAgICB0aGlzLmZsYWc9MjtcbiAgICAgIHRoaXMub3JkZXJObyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgYXdhaXQgdGlwLmNvbmZpcm0oJ+aYr+WQpuWIoOmZpOiuouWNlScpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5mbGFnKTtcbiAgICAgIHRoaXMuZWRpdE9yZGVySW5mbyh0aGlzLm9yZGVyTm8sdGhpcy5mbGFnKTtcbiAgICAgIGNvbnNvbGUubG9nKFwi5Yig6Zmk5oiQ5YqfXCIpXG5cbiAgICB9LFxuICAgICAgYXN5bmMgY29tcGxldGlvbihlKSB7XG4gICAgICB0aGlzLmZsYWc9MztcbiAgICAgIHRoaXMub3JkZXJObyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgYXdhaXQgdGlwLmNvbmZpcm0oJ+aYr+WQpuehruiupOaUtui0pycpO1xuICAgICAgdGhpcy5lZGl0T3JkZXJJbmZvKHRoaXMub3JkZXJObyx0aGlzLmZsYWcpO1xuICAgICAgY29uc29sZS5sb2coXCLlrozmiJBcIilcbiAgICB9LFxuXG4gICAgYXN5bmMgcGF5TW9uZXkoZSkge1xuICAgICAgdGhpcy5vcmRlck5vID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICBsZXQgdHJhZGVObyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRyYWRlbm87XG4gICAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XG5cbiAgICAgIGNvbnN0IHBheSA9IGF3YWl0IGFwaS50b1BheSh7XG4gICAgICAgIHF1ZXJ5OntcbiAgICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgICBvcmRlck5vOiB0cmFkZU5vXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHBheS5kYXRhLmNvZGU9PTApIHtcbiAgICAgICAgLy/ku6XkuIvmmK/lvq7kv6HmlK/ku5hcbiAgICAgICAgd3gucmVxdWVzdFBheW1lbnQoe1xuICAgICAgICAgIGFwcElkOiBwYXkuZGF0YS5hcHBJZCxcbiAgICAgICAgICB0aW1lU3RhbXA6IHBheS5kYXRhLnRpbWVTdGFtcCxcbiAgICAgICAgICBub25jZVN0cjogcGF5LmRhdGEubm9uY2VTdHIsXG4gICAgICAgICAgcGFja2FnZTogcGF5LmRhdGEucGFja2FnZSxcbiAgICAgICAgICBzaWduVHlwZTogJ01ENScsXG4gICAgICAgICAgcGF5U2lnbjogcGF5LmRhdGEucGF5U2lnbixcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncGF5JywgcmVzKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIC8v5pSv5LuY5oiQ5YqfIOWFs+mXrWxvYWRkaW5nIOi3s+i9rOWIsOaUr+S7mOaIkOWKn+mhtemdolxuICAgICAgICAgICAgICB0aXAubG9hZGVkKCk7XG4gICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgdXJsOiBcIi9wYWdlcy9wYXlfc3VjY2Vzcz9vcmRlck5vPVwiK3RyYWRlTm9cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIDIwMDApXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICB0aXAuYWxlcnQoJ+aUr+S7mOWksei0pScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpcC5hbGVydCgn5pSv5LuY5aSx6LSlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT1senrov5Tlm57mlbDmja5seno9PT09PT09PT1cIilcbiAgICBjb25zb2xlLmxvZyh0aGlzLm9yZGVyTGlzdCk7XG4gIH1cbn1cblxuIl19