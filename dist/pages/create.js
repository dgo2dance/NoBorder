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
      navigationBarTitleText: '无界'
    }, _this.components = {
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
      },


      // 上传照片
      photo: function photo() {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var size, param, tempFilePaths, pictures, size2, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;

          return regeneratorRuntime.wrap(function _callee$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  size = _this2.pictures.length;

                  if (!(size >= 2)) {
                    _context2.next = 5;
                    break;
                  }

                  _context2.next = 4;
                  return _Tips2.default.alert('最多选择五张图片');

                case 4:
                  return _context2.abrupt('return');

                case 5:
                  param = {
                    count: 2 - size,
                    sizeType: ['compressed']
                  };
                  _context2.next = 8;
                  return _WxUtils2.default.chooseImage(param, _this2.maxSize);

                case 8:
                  tempFilePaths = _context2.sent;
                  pictures = tempFilePaths.map(function (item) {
                    return {
                      temp: true,
                      url: item
                    };
                  });

                  //    this.pictures = this.pictures.concat(pictures);

                  _this2.pictures = pictures;
                  _this2.$apply();

                  size2 = _this2.pictures.length;

                  console.log(size2);

                  if (!(size2 < 1)) {
                    _context2.next = 18;
                    break;
                  }

                  _context2.next = 17;
                  return _Tips2.default.alert('请选择图片');

                case 17:
                  return _context2.abrupt('return');

                case 18:

                  _tip2.default.loading('保存中');
                  // 处理图片信息
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context2.prev = 22;
                  _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                    var picture, url, result, image;
                    return regeneratorRuntime.wrap(function _loop$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            picture = _step.value;

                            if (!(picture.url.substring(0, 6) == 'wxfile' || picture.url.substring(0, 11) == 'http://tmp/')) {
                              _context.next = 15;
                              break;
                            }

                            url = _this2.baseUrl + '/images';
                            _context.next = 5;
                            return _api2.default.image(picture.url);

                          case 5:
                            result = _context.sent;

                            console.log("return img" + JSON.stringify(result));
                            image = JSON.parse(result.data);

                            console.log("return image" + JSON.stringify(image));
                            picture = image.data;

                            setTimeout(function () {
                              //上传成功 关闭loadding 跳转到确认页面
                              _tip2.default.loaded();
                              _wepy2.default.navigateTo({
                                url: "/pages/create_confirm?picture=" + picture
                              });
                            }, 2000);

                            console.log("picture" + picture);
                            that.orgImage = picture;
                            _context.next = 16;
                            break;

                          case 15:
                            that.orgImage = picture;

                          case 16:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _loop, _this2);
                  });
                  _iterator = pictures[Symbol.iterator]();

                case 25:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context2.next = 30;
                    break;
                  }

                  return _context2.delegateYield(_loop(), 't0', 27);

                case 27:
                  _iteratorNormalCompletion = true;
                  _context2.next = 25;
                  break;

                case 30:
                  _context2.next = 36;
                  break;

                case 32:
                  _context2.prev = 32;
                  _context2.t1 = _context2['catch'](22);
                  _didIteratorError = true;
                  _iteratorError = _context2.t1;

                case 36:
                  _context2.prev = 36;
                  _context2.prev = 37;

                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }

                case 39:
                  _context2.prev = 39;

                  if (!_didIteratorError) {
                    _context2.next = 42;
                    break;
                  }

                  throw _iteratorError;

                case 42:
                  return _context2.finish(39);

                case 43:
                  return _context2.finish(36);

                case 44:
                  _tip2.default.loading('保存中', true);

                case 45:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee, _this2, [[22, 32, 36, 44], [37,, 39, 43]]);
        }))();
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(createChannelSecond, [{
    key: 'createChannel',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pictures, name, intro) {
        var that, userSpecialInfo, openId, data, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _picture, url, result, image, json;

        return regeneratorRuntime.wrap(function _callee2$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
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
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context3.prev = 12;
                _iterator2 = pictures[Symbol.iterator]();

              case 14:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context3.next = 33;
                  break;
                }

                _picture = _step2.value;

                if (!(_picture.url.substring(0, 6) == 'wxfile' || _picture.url.substring(0, 11) == 'http://tmp/')) {
                  _context3.next = 29;
                  break;
                }

                url = this.baseUrl + '/images';
                // const param = {
                //   url,
                //   filePath,
                //   name: 'image'
                // };

                _context3.next = 20;
                return _api2.default.image(_picture.url);

              case 20:
                result = _context3.sent;

                console.log("return img" + JSON.stringify(result));
                image = JSON.parse(result.data);

                console.log("return image" + JSON.stringify(image));

                _picture = image.data;
                console.log("picture" + _picture);
                that.orgImage = _picture;
                _context3.next = 30;
                break;

              case 29:
                that.orgImage = _picture;

              case 30:
                _iteratorNormalCompletion2 = true;
                _context3.next = 14;
                break;

              case 33:
                _context3.next = 39;
                break;

              case 35:
                _context3.prev = 35;
                _context3.t0 = _context3['catch'](12);
                _didIteratorError2 = true;
                _iteratorError2 = _context3.t0;

              case 39:
                _context3.prev = 39;
                _context3.prev = 40;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 42:
                _context3.prev = 42;

                if (!_didIteratorError2) {
                  _context3.next = 45;
                  break;
                }

                throw _iteratorError2;

              case 45:
                return _context3.finish(42);

              case 46:
                return _context3.finish(39);

              case 47:
                _tip2.default.loading('保存中', true);

                _context3.next = 50;
                return _api2.default.createChannel({
                  query: {
                    createUserOpenid: openId,
                    imgPath: that.orgImage,
                    name: name,
                    intro: intro
                  }
                });

              case 50:
                json = _context3.sent;


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
                return _context3.stop();
            }
          }
        }, _callee2, this, [[12, 35, 39, 47], [40,, 42, 46]]);
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(createChannelSecond , 'pages/create'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVDaGFubmVsU2Vjb25kIiwiZGVmIiwiaW5wdXQiLCJzdGF0dXMiLCJkZXRhaWxzIiwicGljdHVyZXMiLCJ1cmwiLCJza3VMaXN0Iiwic2t1IiwicHJpY2UiLCJzdG9jayIsIm1vZGUiLCJvcmdJbWFnZSIsImdvb2RzSWQiLCJpbm5lckNhdGVnb3JpZXMiLCJpbml0IiwiaXNJbm5lckRpc3BsYXkiLCJkYXRhIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkaXNjb3ZlciIsImJvdHRvbUxvYWRNb3JlIiwicGxhY2Vob2xkZXIiLCJib21ic2NyZWVuIiwidGFiIiwib3JkZXJJdGVtIiwiSW1hZ2VVcGxvYWRlciIsImNvbXB1dGVkIiwibWV0aG9kcyIsImZvcm1TdWJtaXQiLCJlIiwidGhhdCIsInBpY3R1cmUiLCJuYW1lIiwiZGV0YWlsIiwidmFsdWUiLCJpbnRybyIsImFsZXJ0IiwiY3JlYXRlQ2hhbm5lbCIsImNvbnNvbGUiLCJsb2ciLCJwaG90byIsInNpemUiLCJsZW5ndGgiLCJwYXJhbSIsImNvdW50Iiwic2l6ZVR5cGUiLCJjaG9vc2VJbWFnZSIsIm1heFNpemUiLCJ0ZW1wRmlsZVBhdGhzIiwibWFwIiwidGVtcCIsIml0ZW0iLCIkYXBwbHkiLCJzaXplMiIsImxvYWRpbmciLCJzdWJzdHJpbmciLCJiYXNlVXJsIiwiaW1hZ2UiLCJyZXN1bHQiLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJzZXRUaW1lb3V0IiwibG9hZGVkIiwibmF2aWdhdGVUbyIsImV2ZW50cyIsInVzZXJTcGVjaWFsSW5mbyIsImdldFN0b3JhZ2VTeW5jIiwib3BlbklkIiwib3BlbmlkIiwiZ29vZHNEZXRhaWxzIiwiZ29vZHNTa3VJbmZvIiwiZ29vZHNTdG9ja3MiLCJpbWFnZXMiLCJxdWVyeSIsImNyZWF0ZVVzZXJPcGVuaWQiLCJpbWdQYXRoIiwianNvbiIsImNvZGUiLCJuYXZp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QUlSOzs7O0VBMUc4QyxlQUFLQyxJOztrQkFBakNyRixtQiIsImZpbGUiOiJjcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpJztcbmltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwJ1xuaW1wb3J0IFRpcHMgZnJvbSAnLi4vdXRpbHMvVGlwcyc7XG5cbmltcG9ydCBUYWIgZnJvbSAnLi4vY29tcG9uZW50cy90YWInXG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9kaXNjb3ZlcidcbmltcG9ydCBCb21ic2NyZWVuIGZyb20gJy4uL2NvbXBvbmVudHMvYm9tYl9zY3JlZW4nXG5pbXBvcnQgT3JkZXJJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvb3JkZXJfaXRlbSdcbmltcG9ydCBCb3R0b21Mb2FkTW9yZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vYm90dG9tTG9hZE1vcmVcIlxuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9wbGFjZWhvbGRlclwiXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5pbXBvcnQgSW1hZ2VVcGxvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9pbWFnZV91cGxvYWRlcidcbmltcG9ydCBXeFV0aWxzIGZyb20gJy4uL3V0aWxzL1d4VXRpbHMnO1xuXG5pbXBvcnQge1xuICBTWVNURU1fSU5GTyxcbiAgVVNFUl9TUEVDSUNBTF9JTkZPLFxuICBVU0VSX0lORk8sXG4gIFVTRVJfQ09ERVxufSBmcm9tICcuLi91dGlscy9jb25zdGFudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNyZWF0ZUNoYW5uZWxTZWNvbmQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG5cdCBkZWYgPSB7XG4gICAgICBpbnB1dDoge1xuICAgICAgICBzdGF0dXM6IHRydWVcbiAgICAgIH0sXG4gICAgICBkZXRhaWxzOiBbXSxcbiAgICAgIHBpY3R1cmVzOiBbe3VybDonaHR0cDovL29zMTFnM2ZsNC5ia3QuY2xvdWRkbi5jb20vV2VjaGF0SU1HMTIuanBlZyd9XSxcbiAgICAgIHNrdUxpc3Q6IFt7XG4gICAgICAgIHNrdTogJycsXG4gICAgICAgIHByaWNlOiAnJyxcbiAgICAgICAgc3RvY2s6ICcnXG4gICAgICB9XSxcbiAgICAgIG1vZGU6ICdjcmVhdGUnLFxuICAgICAgb3JnSW1hZ2U6IG51bGwsXG4gICAgICBnb29kc0lkOiBudWxsLFxuICAgICAgaW5uZXJDYXRlZ29yaWVzOiBbXSxcbiAgICAgIGluaXQ6IGZhbHNlLFxuICAgICAgaXNJbm5lckRpc3BsYXk6ICdmYWxzZSdcbiAgICB9O1xuICAgIGRhdGEgPSB7Li4udGhpcy5kZWZ9O1xuXG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5peg55WMJyxcbiAgfTtcbiAgY29tcG9uZW50cyA9IHtcbiAgICBkaXNjb3ZlcjogRGlzY292ZXIsXG4gICAgYm90dG9tTG9hZE1vcmU6IEJvdHRvbUxvYWRNb3JlLFxuICAgIHBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlcixcbiAgICBib21ic2NyZWVuOiBCb21ic2NyZWVuLFxuICAgIHRhYjogVGFiLFxuICAgIG9yZGVySXRlbTogT3JkZXJJdGVtLFxuICAgIEltYWdlVXBsb2FkZXI6IEltYWdlVXBsb2FkZXIsXG4gIH07XG4gXG5cbiAgIGFzeW5jIGNyZWF0ZUNoYW5uZWwocGljdHVyZXMsbmFtZSxpbnRybykge1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW5pZDotLVwiK29wZW5JZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGljdHVyZXM6LS1cIitKU09OLnN0cmluZ2lmeShwaWN0dXJlcykpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5hbWU6LS1cIituYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnRybzotLVwiK2ludHJvKTtcblxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgZ29vZHNEZXRhaWxzOiBbXSxcbiAgICAgICAgICBnb29kc1NrdUluZm86IHt9LFxuICAgICAgICAgIGdvb2RzU3RvY2tzOiBbXSxcbiAgICAgICAgICBpbWFnZXM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIHRpcC5sb2FkaW5nKCfkv53lrZjkuK0nKTtcbiAgICAgICAgLy8g5aSE55CG5Zu+54mH5L+h5oGvXG4gICAgICAgIGZvciAobGV0IHBpY3R1cmUgb2YgcGljdHVyZXMpIHtcbiAgICAgICAgICBpZiAocGljdHVyZS51cmwuc3Vic3RyaW5nKDAsIDYpID09ICd3eGZpbGUnIHx8IHBpY3R1cmUudXJsLnN1YnN0cmluZygwLCAxMSkgPT0gJ2h0dHA6Ly90bXAvJykge1xuICAgICAgICAgIFx0ICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsfS9pbWFnZXNgO1xuXHRcdFx0ICAgIC8vIGNvbnN0IHBhcmFtID0ge1xuXHRcdFx0ICAgIC8vICAgdXJsLFxuXHRcdFx0ICAgIC8vICAgZmlsZVBhdGgsXG5cdFx0XHQgICAgLy8gICBuYW1lOiAnaW1hZ2UnXG5cdFx0XHQgICAgLy8gfTtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLmltYWdlKHBpY3R1cmUudXJsKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIGltZ1wiK0pTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIGltYWdlXCIrSlNPTi5zdHJpbmdpZnkoaW1hZ2UpKTtcblxuICAgICAgICAgICAgcGljdHVyZT1pbWFnZS5kYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwaWN0dXJlXCIrcGljdHVyZSk7XG4gICAgICAgICAgICB0aGF0Lm9yZ0ltYWdlPXBpY3R1cmVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhhdC5vcmdJbWFnZT1waWN0dXJlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRpcC5sb2FkaW5nKCfkv53lrZjkuK0nLCB0cnVlKTtcblxuXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuY3JlYXRlQ2hhbm5lbCh7XG4gICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgIGNyZWF0ZVVzZXJPcGVuaWQ6IG9wZW5JZCxcbiAgICAgICAgICAgIGltZ1BhdGg6dGhhdC5vcmdJbWFnZSxcbiAgICAgICAgICAgIG5hbWU6bmFtZSxcbiAgICAgICAgICAgIGludHJvOmludHJvXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xuICAgICAgICAgIC8vIHRoYXQubGlzdCA9IGpzb24uZGF0YS5saXN0O1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCLnu5HlrprmiJDlip8uLi4uLlwiKTtcblxuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgfVxuXG5cblxuICAgLy8g55m75b2V5pe25Yqg6L296aG5XG4gIG9uTG9hZCgpIHtcblxuXG5cbiAgfVxuXG4gY29tcHV0ZWQgPSB7XG5cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgICBmb3JtU3VibWl0KGUpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGxldCBwaWN0dXJlPXRoYXQucGljdHVyZXM7XG4gICAgICBsZXQgbmFtZSA9IGUuZGV0YWlsLnZhbHVlLm5hbWU7XG4gICAgICBsZXQgaW50cm8gPSBlLmRldGFpbC52YWx1ZS5pbnRybztcbiAgICAgIGlmIChuYW1lID09IFwiXCIpIHtcbiAgICAgICAgdGlwLmFsZXJ0KFwi6K+36L6T5YWl6aKR6YGT5ZCN56ewXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoaW50cm8gPT0gXCJcIikge1xuICAgICAgICB0aXAuYWxlcnQoXCLor7fovpPlhaXpopHpgZPku4vnu41cIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoYXQuY3JlYXRlQ2hhbm5lbChwaWN0dXJlLG5hbWUsaW50cm8pO1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB9LFxuXG5cbiAgICAvLyDkuIrkvKDnhafniYdcbiAgICAgIGFzeW5jIHBob3RvKCkge1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5waWN0dXJlcy5sZW5ndGg7XG4gICAgICAgIGlmIChzaXplID49IDIpIHtcbiAgICAgICAgICBhd2FpdCBUaXBzLmFsZXJ0KCfmnIDlpJrpgInmi6nkupTlvKDlm77niYcnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW0gPSB7XG4gICAgICAgICAgY291bnQ6IDIgLSBzaXplLFxuICAgICAgICAgIHNpemVUeXBlOiBbJ2NvbXByZXNzZWQnXVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB0ZW1wRmlsZVBhdGhzID0gYXdhaXQgV3hVdGlscy5jaG9vc2VJbWFnZShwYXJhbSwgdGhpcy5tYXhTaXplKTtcbiAgICAgICAgY29uc3QgcGljdHVyZXMgPSB0ZW1wRmlsZVBhdGhzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGVtcDogdHJ1ZSxcbiAgICAgICAgICAgIHVybDogaXRlbVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgIFxuXG4gICAgLy8gICAgdGhpcy5waWN0dXJlcyA9IHRoaXMucGljdHVyZXMuY29uY2F0KHBpY3R1cmVzKTtcbiAgICAgICAgdGhpcy5waWN0dXJlcyA9IHBpY3R1cmVzO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuXG4gICAgICAgICAgICBjb25zdCBzaXplMiA9IHRoaXMucGljdHVyZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2l6ZTIpO1xuICAgICAgICBpZiAoc2l6ZTIgPDEpIHtcbiAgICAgICAgICBhd2FpdCBUaXBzLmFsZXJ0KCfor7fpgInmi6nlm77niYcnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aXAubG9hZGluZygn5L+d5a2Y5LitJyk7XG4gICAgICAgIC8vIOWkhOeQhuWbvueJh+S/oeaBr1xuICAgICAgICBmb3IgKGxldCBwaWN0dXJlIG9mIHBpY3R1cmVzKSB7XG4gICAgICAgICAgaWYgKHBpY3R1cmUudXJsLnN1YnN0cmluZygwLCA2KSA9PSAnd3hmaWxlJyB8fCBwaWN0dXJlLnVybC5zdWJzdHJpbmcoMCwgMTEpID09ICdodHRwOi8vdG1wLycpIHtcbiAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vaW1hZ2VzYDtcbiAgICBcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLmltYWdlKHBpY3R1cmUudXJsKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIGltZ1wiK0pTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIGltYWdlXCIrSlNPTi5zdHJpbmdpZnkoaW1hZ2UpKTtcbiAgICAgICAgICAgIHBpY3R1cmU9aW1hZ2UuZGF0YTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIC8v5LiK5Lyg5oiQ5YqfIOWFs+mXrWxvYWRkaW5nIOi3s+i9rOWIsOehruiupOmhtemdolxuICAgICAgICAgICAgICB0aXAubG9hZGVkKCk7XG4gICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgdXJsOiBcIi9wYWdlcy9jcmVhdGVfY29uZmlybT9waWN0dXJlPVwiK3BpY3R1cmVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIDIwMDApXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGljdHVyZVwiK3BpY3R1cmUpO1xuICAgICAgICAgICAgdGhhdC5vcmdJbWFnZT1waWN0dXJlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoYXQub3JnSW1hZ2U9cGljdHVyZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aXAubG9hZGluZygn5L+d5a2Y5LitJywgdHJ1ZSk7XG4gICAgICB9LFxuXG5cbiAgfVxuXG4gIGV2ZW50cyA9IHtcblx0fVxuXG5cbn1cbiJdfQ==