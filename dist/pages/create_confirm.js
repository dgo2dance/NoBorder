'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _Tips = require('./../utils/Tips.js');

var _Tips2 = _interopRequireDefault(_Tips);

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

var _image_uploader = require('./../components/common/image_uploader.js');

var _image_uploader2 = _interopRequireDefault(_image_uploader);

var _WxUtils = require('./../utils/WxUtils.js');

var _WxUtils2 = _interopRequireDefault(_WxUtils);

var _constant = require('./../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var create_confirm = function (_wepy$page) {
  _inherits(create_confirm, _wepy$page);

  function create_confirm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, create_confirm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = create_confirm.__proto__ || Object.getPrototypeOf(create_confirm)).call.apply(_ref, [this].concat(args))), _this), _this.def = {
      input: {
        status: true
      },
      details: [],
      pictures: [{ url: 'http://os11g3fl4.bkt.clouddn.com/WechatIMG12.jpeg' }],
      skuList: [{
        sku: '',
        price: '',
        stock: ''
      }],
      mode: 'create',
      pic: null,
      goodsId: null,
      innerCategories: [],
      init: false,
      isInnerDisplay: 'false'
    }, _this.data = _extends({}, _this.def), _this.config = {
      navigationBarTitleText: '每图'
    }, _this.components = {
      discover: _discover2.default,
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default,
      bombscreen: _bomb_screen2.default,
      tab: _tab2.default,
      orderItem: _order_item2.default,
      ImageUploader: _image_uploader2.default
    }, _this.computed = {}, _this.methods = {

      //确认提交
      goConfirm: function goConfirm() {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this2.goToConfirm();

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(create_confirm, [{
    key: 'onLoad',


    //


    // 加载项
    value: function onLoad(options) {

      console.log(options);
      this.pic = options.picture;
    }
  }, {
    key: 'goToConfirm',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(formId) {
        var userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                //测试调用接口用，可注释
                _tip2.default.loading("确认中");
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;

                //确认提交

                _context2.next = 5;
                return _api2.default.confirm({
                  query: {
                    openId: openId,
                    picId: this.pic
                  }
                });

              case 5:
                json = _context2.sent;


                // if (json.data.code == 0) {

                //   tip.success("确认成功!");
                //     setTimeout(() => {
                //       tip.loaded();
                //       wepy.navigateTo({
                //         url: "/pages/reorder"
                //       })
                //     }, 2000)

                // } else {
                //   tip.error(json.data.msg)
                // }

                _tip2.default.success("确认成功!");
                setTimeout(function () {
                  _tip2.default.loaded();
                  _wepy2.default.navigateTo({
                    url: "/pages/share"
                  });
                }, 2000);

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function goToConfirm(_x) {
        return _ref2.apply(this, arguments);
      }

      return goToConfirm;
    }()
  }]);

  return create_confirm;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(create_confirm , 'pages/create_confirm'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZV9jb25maXJtLmpzIl0sIm5hbWVzIjpbImNyZWF0ZV9jb25maXJtIiwiZGVmIiwiaW5wdXQiLCJzdGF0dXMiLCJkZXRhaWxzIiwicGljdHVyZXMiLCJ1cmwiLCJza3VMaXN0Iiwic2t1IiwicHJpY2UiLCJzdG9jayIsIm1vZGUiLCJwaWMiLCJnb29kc0lkIiwiaW5uZXJDYXRlZ29yaWVzIiwiaW5pdCIsImlzSW5uZXJEaXNwbGF5IiwiZGF0YSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGlzY292ZXIiLCJib3R0b21Mb2FkTW9yZSIsInBsYWNlaG9sZGVyIiwiYm9tYnNjcmVlbiIsInRhYiIsIm9yZGVySXRlbSIsIkltYWdlVXBsb2FkZXIiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJnb0NvbmZpcm0iLCJnb1RvQ29uZmlybSIsImV2ZW50cyIsIm9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwicGljdHVyZSIsImZvcm1JZCIsImxvYWRpbmciLCJ1c2VyU3BlY2lhbEluZm8iLCJnZXRTdG9yYWdlU3luYyIsIm9wZW5JZCIsIm9wZW5pZCIsImNvbmZpcm0iLCJxdWVyeSIsInBpY0lkIiwianNvbiIsInN1Y2Nlc3MiLCJzZXRUaW1lb3V0IiwibG9hZGVkIiwibmF2aWdhdGVUbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQU9xQkEsYzs7Ozs7Ozs7Ozs7Ozs7c01BRW5CQyxHLEdBQU07QUFDRkMsYUFBTztBQUNMQyxnQkFBUTtBQURILE9BREw7QUFJRkMsZUFBUyxFQUpQO0FBS0ZDLGdCQUFVLENBQUMsRUFBQ0MsS0FBSSxtREFBTCxFQUFELENBTFI7QUFNRkMsZUFBUyxDQUFDO0FBQ1JDLGFBQUssRUFERztBQUVSQyxlQUFPLEVBRkM7QUFHUkMsZUFBTztBQUhDLE9BQUQsQ0FOUDtBQVdGQyxZQUFNLFFBWEo7QUFZRkMsV0FBSyxJQVpIO0FBYUZDLGVBQVMsSUFiUDtBQWNGQyx1QkFBaUIsRUFkZjtBQWVGQyxZQUFNLEtBZko7QUFnQkZDLHNCQUFnQjtBQWhCZCxLLFFBbUJKQyxJLGdCQUFXLE1BQUtoQixHLFNBRWxCaUIsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQyxrQ0FEVztBQUVYQyw4Q0FGVztBQUdYQyx3Q0FIVztBQUlYQyx1Q0FKVztBQUtYQyx3QkFMVztBQU1YQyxxQ0FOVztBQU9YQztBQVBXLEssUUF1QmRDLFEsR0FBVyxFLFFBK0NWQyxPLEdBQVU7O0FBRVI7QUFDTUMsZUFIRSx1QkFHUztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZix5QkFBS0MsV0FBTDs7QUFEZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVoQjtBQUxPLEssUUFTVkMsTSxHQUFTLEU7Ozs7Ozs7QUFwRVQ7OztBQUlDOzJCQUNNQyxPLEVBQVM7O0FBRWRDLGNBQVFDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBLFdBQUtyQixHQUFMLEdBQVNxQixRQUFRRyxPQUFqQjtBQUVEOzs7OzRGQU9lQyxNOzs7Ozs7QUFDZDtBQUNBLDhCQUFJQyxPQUFKLENBQVksS0FBWjtBQUNJQywrQixHQUFrQixlQUFLQyxjQUFMLGtDQUEyQyxFO0FBQzdEQyxzQixHQUFTRixnQkFBZ0JHLE07O0FBRTdCOzs7dUJBQ21CLGNBQUlDLE9BQUosQ0FBWTtBQUM3QkMseUJBQU87QUFDTEgsNEJBQVFBLE1BREg7QUFFTEksMkJBQU8sS0FBS2pDO0FBRlA7QUFEc0IsaUJBQVosQzs7O0FBQWJrQyxvQjs7O0FBUU47O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVNLDhCQUFJQyxPQUFKLENBQVksT0FBWjtBQUNGQywyQkFBVyxZQUFNO0FBQ2YsZ0NBQUlDLE1BQUo7QUFDQSxpQ0FBS0MsVUFBTCxDQUFnQjtBQUNkNUMseUJBQUs7QUFEUyxtQkFBaEI7QUFHRCxpQkFMRCxFQUtHLElBTEg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFwRm9DLGVBQUs2QyxJOztrQkFBNUJuRCxjIiwiZmlsZSI6ImNyZWF0ZV9jb25maXJtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcCdcbmltcG9ydCBUaXBzIGZyb20gJy4uL3V0aWxzL1RpcHMnO1xuXG5pbXBvcnQgVGFiIGZyb20gJy4uL2NvbXBvbmVudHMvdGFiJ1xuaW1wb3J0IERpc2NvdmVyIGZyb20gJy4uL2NvbXBvbmVudHMvZGlzY292ZXInXG5pbXBvcnQgQm9tYnNjcmVlbiBmcm9tICcuLi9jb21wb25lbnRzL2JvbWJfc2NyZWVuJ1xuaW1wb3J0IE9yZGVySXRlbSBmcm9tICcuLi9jb21wb25lbnRzL29yZGVyX2l0ZW0nXG5pbXBvcnQgQm90dG9tTG9hZE1vcmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL2JvdHRvbUxvYWRNb3JlXCJcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vcGxhY2Vob2xkZXJcIlxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuaW1wb3J0IEltYWdlVXBsb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vaW1hZ2VfdXBsb2FkZXInXG5pbXBvcnQgV3hVdGlscyBmcm9tICcuLi91dGlscy9XeFV0aWxzJztcblxuaW1wb3J0IHtcbiAgU1lTVEVNX0lORk8sXG4gIFVTRVJfU1BFQ0lDQUxfSU5GTyxcbiAgVVNFUl9JTkZPLFxuICBVU0VSX0NPREVcbn0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjcmVhdGVfY29uZmlybSBleHRlbmRzIHdlcHkucGFnZSB7XG5cblx0IGRlZiA9IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIHN0YXR1czogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRldGFpbHM6IFtdLFxuICAgICAgcGljdHVyZXM6IFt7dXJsOidodHRwOi8vb3MxMWczZmw0LmJrdC5jbG91ZGRuLmNvbS9XZWNoYXRJTUcxMi5qcGVnJ31dLFxuICAgICAgc2t1TGlzdDogW3tcbiAgICAgICAgc2t1OiAnJyxcbiAgICAgICAgcHJpY2U6ICcnLFxuICAgICAgICBzdG9jazogJydcbiAgICAgIH1dLFxuICAgICAgbW9kZTogJ2NyZWF0ZScsXG4gICAgICBwaWM6IG51bGwsXG4gICAgICBnb29kc0lkOiBudWxsLFxuICAgICAgaW5uZXJDYXRlZ29yaWVzOiBbXSxcbiAgICAgIGluaXQ6IGZhbHNlLFxuICAgICAgaXNJbm5lckRpc3BsYXk6ICdmYWxzZSdcbiAgICB9O1xuXG4gICAgZGF0YSA9IHsuLi50aGlzLmRlZn07XG5cbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmr4/lm74nLFxuICB9O1xuICBjb21wb25lbnRzID0ge1xuICAgIGRpc2NvdmVyOiBEaXNjb3ZlcixcbiAgICBib3R0b21Mb2FkTW9yZTogQm90dG9tTG9hZE1vcmUsXG4gICAgcGxhY2Vob2xkZXI6IFBsYWNlaG9sZGVyLFxuICAgIGJvbWJzY3JlZW46IEJvbWJzY3JlZW4sXG4gICAgdGFiOiBUYWIsXG4gICAgb3JkZXJJdGVtOiBPcmRlckl0ZW0sXG4gICAgSW1hZ2VVcGxvYWRlcjogSW1hZ2VVcGxvYWRlcixcbiAgfTtcbiBcblxuICAvL1xuXG5cblxuICAgLy8g5Yqg6L296aG5XG4gIG9uTG9hZChvcHRpb25zKSB7XG5cbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICB0aGlzLnBpYz1vcHRpb25zLnBpY3R1cmU7XG5cbiAgfVxuXG4gY29tcHV0ZWQgPSB7XG5cbiAgfVxuXG5cbmFzeW5jIGdvVG9Db25maXJtKGZvcm1JZCkge1xuICAgIC8v5rWL6K+V6LCD55So5o6l5Y+j55So77yM5Y+v5rOo6YeKXG4gICAgdGlwLmxvYWRpbmcoXCLnoa7orqTkuK1cIik7XG4gICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcblxuICAgIC8v56Gu6K6k5o+Q5LqkXG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5jb25maXJtKHtcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIG9wZW5JZDogb3BlbklkLFxuICAgICAgICBwaWNJZDogdGhpcy5waWNcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgLy8gaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcblxuICAgIC8vICAgdGlwLnN1Y2Nlc3MoXCLnoa7orqTmiJDlip8hXCIpO1xuICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgICAgICB0aXAubG9hZGVkKCk7XG4gICAgLy8gICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAvLyAgICAgICAgIHVybDogXCIvcGFnZXMvcmVvcmRlclwiXG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgICAgfSwgMjAwMClcblxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICAvLyB9XG5cbiAgICAgICAgICB0aXAuc3VjY2VzcyhcIuehruiupOaIkOWKnyFcIik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRpcC5sb2FkZWQoKTtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiBcIi9wYWdlcy9zaGFyZVwiXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgMjAwMClcblxuXG4gIH1cblxuXG5cbiAgbWV0aG9kcyA9IHtcblxuICAgIC8v56Gu6K6k5o+Q5LqkXG4gICAgYXN5bmMgZ29Db25maXJtKCl7XG4gICAgICB0aGlzLmdvVG9Db25maXJtKCk7XG4gICAgfVxuXG4gIH1cblxuICBldmVudHMgPSB7XG5cdH1cblxuXG59XG4iXX0=