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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RfaXRlbS5qcyJdLCJuYW1lcyI6WyJvcmRlckl0ZW0iLCJwcm9wcyIsIm9yZGVyTGlzdCIsImRlZmF1bHQiLCJmbGFnIiwib3JkZXJObyIsImxpc3QiLCJjb21wb25lbnRzIiwic2hvcEl0ZW1MaXN0IiwiZXZlbnRzIiwibWV0aG9kcyIsImRlbE9yZGVyIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCJjb25maXJtIiwiY29uc29sZSIsImxvZyIsImVkaXRPcmRlckluZm8iLCJjb21wbGV0aW9uIiwicGF5TW9uZXkiLCJ0cmFkZU5vIiwidHJhZGVubyIsInVzZXJTcGVjaWFsSW5mbyIsImdldFN0b3JhZ2VTeW5jIiwib3BlbklkIiwib3BlbmlkIiwidG9QYXkiLCJxdWVyeSIsInBheSIsImRhdGEiLCJjb2RlIiwid3giLCJyZXF1ZXN0UGF5bWVudCIsImFwcElkIiwidGltZVN0YW1wIiwibm9uY2VTdHIiLCJwYWNrYWdlIiwic2lnblR5cGUiLCJwYXlTaWduIiwic3VjY2VzcyIsInJlcyIsInNldFRpbWVvdXQiLCJsb2FkZWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZmFpbCIsImFsZXJ0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFJcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUVuQkMsSyxHQUFRO0FBQ05DLGlCQUFXO0FBQ1RDLGlCQUFTLEVBREE7QUFFVEMsY0FBSyxFQUZJO0FBR1RDLGlCQUFRLEVBSEM7QUFJVEMsY0FBSztBQUpJO0FBREwsSyxRQVVSQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBSWJDLE0sR0FBUyxFLFFBSVRDLE8sR0FBVTtBQUNGQyxjQURFLG9CQUNPQyxDQURQLEVBQ1U7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCLHlCQUFLUixJQUFMLEdBQVUsQ0FBVjtBQUNBLHlCQUFLQyxPQUFM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cHknXG5pbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcCdcbmltcG9ydCBTaG9wSXRlbUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9zaG9wX2l0ZW1fbGlzdCdcbmltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaSdcbmltcG9ydCB7XG4gIFNZU1RFTV9JTkZPLFxuICBVU0VSX1NQRUNJQ0FMX0lORk9cbn0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb3JkZXJJdGVtIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuXG4gIHByb3BzID0ge1xuICAgIG9yZGVyTGlzdDoge1xuICAgICAgZGVmYXVsdDogW10sXG4gICAgICBmbGFnOlwiXCIsXG4gICAgICBvcmRlck5vOlwiXCIsXG4gICAgICBsaXN0OltdXG4gICAgfVxuICB9XG5cblxuICBjb21wb25lbnRzID0ge1xuICAgIHNob3BJdGVtTGlzdDogU2hvcEl0ZW1MaXN0XG4gIH1cblxuICBldmVudHMgPSB7XG5cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgYXN5bmMgZGVsT3JkZXIoZSkge1xuICAgICAgdGhpcy5mbGFnPTI7XG4gICAgICB0aGlzLm9yZGVyTm8gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgIGF3YWl0IHRpcC5jb25maXJtKCfmmK/lkKbliKDpmaTorqLljZUnKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmxhZyk7XG4gICAgICB0aGlzLmVkaXRPcmRlckluZm8odGhpcy5vcmRlck5vLHRoaXMuZmxhZyk7XG4gICAgICBjb25zb2xlLmxvZyhcIuWIoOmZpOaIkOWKn1wiKVxuXG4gICAgfSxcbiAgICAgIGFzeW5jIGNvbXBsZXRpb24oZSkge1xuICAgICAgdGhpcy5mbGFnPTM7XG4gICAgICB0aGlzLm9yZGVyTm8gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgIGF3YWl0IHRpcC5jb25maXJtKCfmmK/lkKbnoa7orqTmlLbotKcnKTtcbiAgICAgIHRoaXMuZWRpdE9yZGVySW5mbyh0aGlzLm9yZGVyTm8sdGhpcy5mbGFnKTtcbiAgICAgIGNvbnNvbGUubG9nKFwi5a6M5oiQXCIpXG4gICAgfSxcblxuICAgIGFzeW5jIHBheU1vbmV5KGUpIHtcbiAgICAgIHRoaXMub3JkZXJObyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgbGV0IHRyYWRlTm8gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50cmFkZW5vO1xuICAgICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuXG4gICAgICBjb25zdCBwYXkgPSBhd2FpdCBhcGkudG9QYXkoe1xuICAgICAgICBxdWVyeTp7XG4gICAgICAgICAgb3BlbklkOiBvcGVuSWQsXG4gICAgICAgICAgb3JkZXJObzogdHJhZGVOb1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChwYXkuZGF0YS5jb2RlPT0wKSB7XG4gICAgICAgIC8v5Lul5LiL5piv5b6u5L+h5pSv5LuYXG4gICAgICAgIHd4LnJlcXVlc3RQYXltZW50KHtcbiAgICAgICAgICBhcHBJZDogcGF5LmRhdGEuYXBwSWQsXG4gICAgICAgICAgdGltZVN0YW1wOiBwYXkuZGF0YS50aW1lU3RhbXAsXG4gICAgICAgICAgbm9uY2VTdHI6IHBheS5kYXRhLm5vbmNlU3RyLFxuICAgICAgICAgIHBhY2thZ2U6IHBheS5kYXRhLnBhY2thZ2UsXG4gICAgICAgICAgc2lnblR5cGU6ICdNRDUnLFxuICAgICAgICAgIHBheVNpZ246IHBheS5kYXRhLnBheVNpZ24sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BheScsIHJlcylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAvL+aUr+S7mOaIkOWKnyDlhbPpl61sb2FkZGluZyDot7PovazliLDmlK/ku5jmiJDlip/pobXpnaJcbiAgICAgICAgICAgICAgdGlwLmxvYWRlZCgpO1xuICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDogXCIvcGFnZXMvcGF5X3N1Y2Nlc3M/b3JkZXJObz1cIit0cmFkZU5vXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCAyMDAwKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgdGlwLmFsZXJ0KCfmlK/ku5jlpLHotKUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXAuYWxlcnQoJ+aUr+S7mOWksei0pScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09bHp66L+U5Zue5pWw5o2ubHp6PT09PT09PT09XCIpXG4gICAgY29uc29sZS5sb2codGhpcy5vcmRlckxpc3QpO1xuICB9XG59XG5cbiJdfQ==