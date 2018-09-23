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

var _constant = require('./../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createChannelSecond = function (_wepy$page) {
  _inherits(createChannelSecond, _wepy$page);

  function createChannelSecond() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, createChannelSecond);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = createChannelSecond.__proto__ || Object.getPrototypeOf(createChannelSecond)).call.apply(_ref, [this].concat(args))), _this), _this.def = {
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
      orgImage: null,
      goodsId: null,
      innerCategories: [],
      init: false,
      isInnerDisplay: 'false'
    }, _this.data = _extends({}, _this.def), _this.config = {
      navigationBarTitleText: '独鹿交友'
    }, _this.$repeat = {}, _this.$props = { "ImageUploader": { "xmlns:v-bind": "", "v-bind:pictures.sync": "pictures" } }, _this.$events = {}, _this.components = {
      discover: _discover2.default,
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default,
      bombscreen: _bomb_screen2.default,
      tab: _tab2.default,
      orderItem: _order_item2.default,
      ImageUploader: _image_uploader2.default
    }, _this.computed = {}, _this.methods = {
      formSubmit: function formSubmit(e) {
        var that = this;
        var picture = that.pictures;
        var name = e.detail.value.name;
        var intro = e.detail.value.intro;
        if (name == "") {
          _tip2.default.alert("请输入频道名称");
          return false;
        }
        if (intro == "") {
          _tip2.default.alert("请输入频道介绍");
          return false;
        }
        that.createChannel(picture, name, intro);
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(createChannelSecond, [{
    key: 'createChannel',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(pictures, name, intro) {
        var that, userSpecialInfo, openId, data, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, picture, url, result, image, json;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;

                console.log("openid:--" + openId);
                console.log("pictures:--" + JSON.stringify(pictures));
                console.log("name:--" + name);
                console.log("intro:--" + intro);

                data = {
                  goodsDetails: [],
                  goodsSkuInfo: {},
                  goodsStocks: [],
                  images: []
                };

                _tip2.default.loading('保存中');
                // 处理图片信息
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 12;
                _iterator = pictures[Symbol.iterator]();

              case 14:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 33;
                  break;
                }

                picture = _step.value;

                if (!(picture.url.substring(0, 6) == 'wxfile' || picture.url.substring(0, 11) == 'http://tmp/')) {
                  _context.next = 29;
                  break;
                }

                url = this.baseUrl + '/images';
                // const param = {
                //   url,
                //   filePath,
                //   name: 'image'
                // };

                _context.next = 20;
                return _api2.default.image(picture.url);

              case 20:
                result = _context.sent;

                console.log("return img" + JSON.stringify(result));
                image = JSON.parse(result.data);

                console.log("return image" + JSON.stringify(image));

                picture = image.data;
                console.log("picture" + picture);
                that.orgImage = picture;
                _context.next = 30;
                break;

              case 29:
                that.orgImage = picture;

              case 30:
                _iteratorNormalCompletion = true;
                _context.next = 14;
                break;

              case 33:
                _context.next = 39;
                break;

              case 35:
                _context.prev = 35;
                _context.t0 = _context['catch'](12);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 39:
                _context.prev = 39;
                _context.prev = 40;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 42:
                _context.prev = 42;

                if (!_didIteratorError) {
                  _context.next = 45;
                  break;
                }

                throw _iteratorError;

              case 45:
                return _context.finish(42);

              case 46:
                return _context.finish(39);

              case 47:
                _tip2.default.loading('保存中', true);

                _context.next = 50;
                return _api2.default.createChannel({
                  query: {
                    createUserOpenid: openId,
                    imgPath: that.orgImage,
                    name: name,
                    intro: intro
                  }
                });

              case 50:
                json = _context.sent;


                if (json.data.code == 0) {
                  // that.list = json.data.list;
                  _wepy2.default.navigateBack();
                  console.log("绑定成功.....");

                  that.$apply();
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;

              case 53:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[12, 35, 39, 47], [40,, 42, 46]]);
      }));

      function createChannel(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return createChannel;
    }()

    // 登录时加载项

  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return createChannelSecond;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(createChannelSecond , 'pages/create_channel_second'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZV9jaGFubmVsX3NlY29uZC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVDaGFubmVsU2Vjb25kIiwiZGVmIiwiaW5wdXQiLCJzdGF0dXMiLCJkZXRhaWxzIiwicGljdHVyZXMiLCJ1cmwiLCJza3VMaXN0Iiwic2t1IiwicHJpY2UiLCJzdG9jayIsIm1vZGUiLCJvcmdJbWFnZSIsImdvb2RzSWQiLCJpbm5lckNhdGVnb3JpZXMiLCJpbml0IiwiaXNJbm5lckRpc3BsYXkiLCJkYXRhIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRpc2NvdmVyIiwiYm90dG9tTG9hZE1vcmUiLCJwbGFjZWhvbGRlciIsImJvbWJzY3JlZW4iLCJ0YWIiLCJvcmRlckl0ZW0iLCJJbWFnZVVwbG9hZGVyIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZm9ybVN1Ym1pdCIsImUiLCJ0aGF0IiwicGljdHVyZSIsIm5hbWUiLCJkZXRhaWwiLCJ2YWx1ZSIsImludHJvIiwiYWxlcnQiLCJjcmVhdGVDaGFubmVsIiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsInVzZXJTcGVjaWFsSW5mbyIsImdldFN0b3JhZ2VTeW5jIiwib3BlbklkIiwib3BlbmlkIiwiSlNPTiIsInN0cmluZ2lmeSIsImdvb2RzRGV0YWlscyIsImdvb2RzU2t1SW5mbyIsImdvb2RzU3RvY2tzIiwiaW1hZ2VzIiwibG9hZGluZyIsInN1YnN0cmluZyIsImJhc2VVcmwiLCJpbWFnZSIsInJlc3VsdCIsInBhcnNlIiwicXVlcnkiLCJjcmVhdGVVc2VyT3BlbmlkIiwiaW1nUGF0aCIsImpzb24iLCJjb2RlIiwibmF2aWdhdGVCYWNrIiwiJGFwcGx5IiwiZXJyb3IiLCJtc2ciLCJzaG93TG9hZGluZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztB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eSBmcm9tICd3ZXB5JztcbmltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcCdcbmltcG9ydCBUYWIgZnJvbSAnLi4vY29tcG9uZW50cy90YWInXG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9kaXNjb3ZlcidcbmltcG9ydCBCb21ic2NyZWVuIGZyb20gJy4uL2NvbXBvbmVudHMvYm9tYl9zY3JlZW4nXG5pbXBvcnQgT3JkZXJJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvb3JkZXJfaXRlbSdcbmltcG9ydCBCb3R0b21Mb2FkTW9yZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vYm90dG9tTG9hZE1vcmVcIlxuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9wbGFjZWhvbGRlclwiXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5pbXBvcnQgSW1hZ2VVcGxvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9pbWFnZV91cGxvYWRlcic7XG5cbmltcG9ydCB7XG4gIFNZU1RFTV9JTkZPLFxuICBVU0VSX1NQRUNJQ0FMX0lORk8sXG4gIFVTRVJfSU5GTyxcbiAgVVNFUl9DT0RFXG59IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY3JlYXRlQ2hhbm5lbFNlY29uZCBleHRlbmRzIHdlcHkucGFnZSB7XG5cblx0IGRlZiA9IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIHN0YXR1czogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRldGFpbHM6IFtdLFxuICAgICAgcGljdHVyZXM6IFt7dXJsOidodHRwOi8vb3MxMWczZmw0LmJrdC5jbG91ZGRuLmNvbS9XZWNoYXRJTUcxMi5qcGVnJ31dLFxuICAgICAgc2t1TGlzdDogW3tcbiAgICAgICAgc2t1OiAnJyxcbiAgICAgICAgcHJpY2U6ICcnLFxuICAgICAgICBzdG9jazogJydcbiAgICAgIH1dLFxuICAgICAgbW9kZTogJ2NyZWF0ZScsXG4gICAgICBvcmdJbWFnZTogbnVsbCxcbiAgICAgIGdvb2RzSWQ6IG51bGwsXG4gICAgICBpbm5lckNhdGVnb3JpZXM6IFtdLFxuICAgICAgaW5pdDogZmFsc2UsXG4gICAgICBpc0lubmVyRGlzcGxheTogJ2ZhbHNlJ1xuICAgIH07XG4gICAgZGF0YSA9IHsuLi50aGlzLmRlZn07XG5cbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfni6zpub/kuqTlj4snLFxuICB9O1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiSW1hZ2VVcGxvYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGljdHVyZXMuc3luY1wiOlwicGljdHVyZXNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGRpc2NvdmVyOiBEaXNjb3ZlcixcbiAgICBib3R0b21Mb2FkTW9yZTogQm90dG9tTG9hZE1vcmUsXG4gICAgcGxhY2Vob2xkZXI6IFBsYWNlaG9sZGVyLFxuICAgIGJvbWJzY3JlZW46IEJvbWJzY3JlZW4sXG4gICAgdGFiOiBUYWIsXG4gICAgb3JkZXJJdGVtOiBPcmRlckl0ZW0sXG4gICAgSW1hZ2VVcGxvYWRlcjogSW1hZ2VVcGxvYWRlcixcbiAgfTtcbiBcblxuICAgYXN5bmMgY3JlYXRlQ2hhbm5lbChwaWN0dXJlcyxuYW1lLGludHJvKSB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICAgICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib3BlbmlkOi0tXCIrb3BlbklkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwaWN0dXJlczotLVwiK0pTT04uc3RyaW5naWZ5KHBpY3R1cmVzKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmFtZTotLVwiK25hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImludHJvOi0tXCIraW50cm8pO1xuXG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBnb29kc0RldGFpbHM6IFtdLFxuICAgICAgICAgIGdvb2RzU2t1SW5mbzoge30sXG4gICAgICAgICAgZ29vZHNTdG9ja3M6IFtdLFxuICAgICAgICAgIGltYWdlczogW11cbiAgICAgICAgfTtcbiAgICAgICAgdGlwLmxvYWRpbmcoJ+S/neWtmOS4rScpO1xuICAgICAgICAvLyDlpITnkIblm77niYfkv6Hmga9cbiAgICAgICAgZm9yIChsZXQgcGljdHVyZSBvZiBwaWN0dXJlcykge1xuICAgICAgICAgIGlmIChwaWN0dXJlLnVybC5zdWJzdHJpbmcoMCwgNikgPT0gJ3d4ZmlsZScgfHwgcGljdHVyZS51cmwuc3Vic3RyaW5nKDAsIDExKSA9PSAnaHR0cDovL3RtcC8nKSB7XG4gICAgICAgICAgXHQgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9L2ltYWdlc2A7XG5cdFx0XHQgICAgLy8gY29uc3QgcGFyYW0gPSB7XG5cdFx0XHQgICAgLy8gICB1cmwsXG5cdFx0XHQgICAgLy8gICBmaWxlUGF0aCxcblx0XHRcdCAgICAvLyAgIG5hbWU6ICdpbWFnZSdcblx0XHRcdCAgICAvLyB9O1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuaW1hZ2UocGljdHVyZS51cmwpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gaW1nXCIrSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IEpTT04ucGFyc2UocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gaW1hZ2VcIitKU09OLnN0cmluZ2lmeShpbWFnZSkpO1xuXG4gICAgICAgICAgICBwaWN0dXJlPWltYWdlLmRhdGE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBpY3R1cmVcIitwaWN0dXJlKTtcbiAgICAgICAgICAgIHRoYXQub3JnSW1hZ2U9cGljdHVyZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGF0Lm9yZ0ltYWdlPXBpY3R1cmVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGlwLmxvYWRpbmcoJ+S/neWtmOS4rScsIHRydWUpO1xuXG5cbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5jcmVhdGVDaGFubmVsKHtcbiAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgY3JlYXRlVXNlck9wZW5pZDogb3BlbklkLFxuICAgICAgICAgICAgaW1nUGF0aDp0aGF0Lm9yZ0ltYWdlLFxuICAgICAgICAgICAgbmFtZTpuYW1lLFxuICAgICAgICAgICAgaW50cm86aW50cm9cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICAgICAgLy8gdGhhdC5saXN0ID0ganNvbi5kYXRhLmxpc3Q7XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIue7keWumuaIkOWKny4uLi4uXCIpO1xuXG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICAgICAgfVxuICAgICAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICB9XG5cblxuXG4gICAvLyDnmbvlvZXml7bliqDovb3poblcbiAgb25Mb2FkKCkge1xuXG5cblxuICB9XG5cbiBjb21wdXRlZCA9IHtcblxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAgIGZvcm1TdWJtaXQoZSkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgbGV0IHBpY3R1cmU9dGhhdC5waWN0dXJlcztcbiAgICAgIGxldCBuYW1lID0gZS5kZXRhaWwudmFsdWUubmFtZTtcbiAgICAgIGxldCBpbnRybyA9IGUuZGV0YWlsLnZhbHVlLmludHJvO1xuICAgICAgaWYgKG5hbWUgPT0gXCJcIikge1xuICAgICAgICB0aXAuYWxlcnQoXCLor7fovpPlhaXpopHpgZPlkI3np7BcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnRybyA9PSBcIlwiKSB7XG4gICAgICAgIHRpcC5hbGVydChcIuivt+i+k+WFpemikemBk+S7i+e7jVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhhdC5jcmVhdGVDaGFubmVsKHBpY3R1cmUsbmFtZSxpbnRybyk7XG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnN1Ym1pdOS6i+S7tu+8jOaQuuW4puaVsOaNruS4uu+8micsIGUuZGV0YWlsLnZhbHVlKVxuICAgIH1cblxuICB9XG5cbiAgZXZlbnRzID0ge1xuXHR9XG5cblxufVxuIl19