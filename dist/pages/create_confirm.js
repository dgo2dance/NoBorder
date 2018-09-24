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

  _createClass(create_confirm, [{
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

    // 加载项

  }, {
    key: 'onLoad',
    value: function onLoad(options) {

      console.log(options);
      this.pic = options.picture;
    }
  }]);

  return create_confirm;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(create_confirm , 'pages/create_confirm'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZV9jb25maXJtLmpzIl0sIm5hbWVzIjpbImNyZWF0ZV9jb25maXJtIiwiZGVmIiwiaW5wdXQiLCJzdGF0dXMiLCJkZXRhaWxzIiwicGljdHVyZXMiLCJ1cmwiLCJza3VMaXN0Iiwic2t1IiwicHJpY2UiLCJzdG9jayIsIm1vZGUiLCJwaWMiLCJnb29kc0lkIiwiaW5uZXJDYXRlZ29yaWVzIiwiaW5pdCIsImlzSW5uZXJEaXNwbGF5IiwiZGF0YSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGlzY292ZXIiLCJib3R0b21Mb2FkTW9yZSIsInBsYWNlaG9sZGVyIiwiYm9tYnNjcmVlbiIsInRhYiIsIm9yZGVySXRlbSIsIkltYWdlVXBsb2FkZXIiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJmb3JtU3VibWl0IiwiZSIsInRoYXQiLCJwaWN0dXJlIiwibmFtZSIsImRldGFpbCIsInZhbHVlIiwiaW50cm8iLCJhbGVydCIsImNyZWF0ZUNoYW5uZWwiLCJjb25zb2xlIiwibG9nIiwicGhvdG8iLCJzaXplIiwibGVuZ3RoIiwicGFyYW0iLCJjb3VudCIsInNpemVUeXBlIiwiY2hvb3NlSW1hZ2UiLCJtYXhTaXplIiwidGVtcEZpbGVQYXRocyIsIm1hcCIsInRlbXAiLCJpdGVtIiwiJGFwcGx5Iiwic2l6ZTIiLCJsb2FkaW5nIiwic3Vic3RyaW5nIiwiYmFzZVVybCIsImltYWdlIiwicmVzdWx0IiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwic2V0VGltZW91dCIsImxvYWRlZCIsIm5hdmlnYXRlVG8iLCJvcmdJbWFnZSIsImV2ZW50cyIsInVzZXJTcGVjaWFsSW5mbyIsImdldFN0b3JhZ2VTeW5jIiwib3BlbklkIiwib3BlbmlkIiwiZ29vZHNEZXRhaWxzIiwiZ29vZHNTa3VJbmZvIiwiZ29vZHNTdG9ja3MiLCJpbWFnZXMiLCJxdWVyeSIsImNyZWF0ZVVzZXJPcGVuaWQiLCJpbWdQYXRoIiwianNvbiIsImNvZGUiLCJuYXZpZ2F0ZUJhY2siLCJlcnJvciIsIm1zZyIsInNob3dMb2FkaW5nIiwib3B0aW9ucyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQU9xQkEsYzs7Ozs7Ozs7Ozs7Ozs7c01BRW5CQyxHLEdBQU07QUFDRkMsYUFBTztBQUNMQyxnQkFBUTtBQURILE9BREw7QUFJRkMsZUFBUyxFQUpQO0FBS0ZDLGdCQUFVLENBQUMsRUFBQ0MsS0FBSSxtREFBTCxFQUFELENBTFI7QUFNRkMsZUFBUyxDQUFDO0FBQ1JDLGFBQUssRUFERztBQUVSQyxlQUFPLEVBRkM7QUFHUkMsZUFBTztBQUhDLE9BQUQsQ0FOUDtBQVdGQyxZQUFNLFFBWEo7QUFZRkMsV0FBSyxJQVpIO0FBYUZDLGVBQVMsSUFiUDtBQWNGQyx1QkFBaUIsRUFkZjtBQWVGQyxZQUFNLEtBZko7QUFnQkZDLHNCQUFnQjtBQWhCZCxLLFFBa0JKQyxJLGdCQUFXLE1BQUtoQixHLFNBRWxCaUIsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQyxrQ0FEVztBQUVYQyw4Q0FGVztBQUdYQyx3Q0FIVztBQUlYQyx1Q0FKVztBQUtYQyx3QkFMVztBQU1YQyxxQ0FOVztBQU9YQztBQVBXLEssUUFvRmRDLFEsR0FBVyxFLFFBSVZDLE8sR0FBVTtBQUNOQyxnQkFETSxzQkFDS0MsQ0FETCxFQUNRO0FBQ2QsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsVUFBUUQsS0FBSzNCLFFBQWpCO0FBQ0EsWUFBSTZCLE9BQU9ILEVBQUVJLE1BQUYsQ0FBU0MsS0FBVCxDQUFlRixJQUExQjtBQUNBLFlBQUlHLFFBQVFOLEVBQUVJLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxLQUEzQjtBQUNBLFlBQUlILFFBQVEs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OztBQUtMOzs7OzJCQUNNQyxPLEVBQVM7O0FBRWQ5QyxjQUFRQyxHQUFSLENBQVk2QyxPQUFaO0FBQ0EsV0FBSzFFLEdBQUwsR0FBUzBFLFFBQVFyRCxPQUFqQjtBQUVEOzs7O0VBM0d5QyxlQUFLc0QsSTs7a0JBQTVCdkYsYyIsImZpbGUiOiJjcmVhdGVfY29uZmlybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2FwaS9hcGknO1xuaW1wb3J0IHRpcCBmcm9tICcuLi91dGlscy90aXAnXG5pbXBvcnQgVGlwcyBmcm9tICcuLi91dGlscy9UaXBzJztcblxuaW1wb3J0IFRhYiBmcm9tICcuLi9jb21wb25lbnRzL3RhYidcbmltcG9ydCBEaXNjb3ZlciBmcm9tICcuLi9jb21wb25lbnRzL2Rpc2NvdmVyJ1xuaW1wb3J0IEJvbWJzY3JlZW4gZnJvbSAnLi4vY29tcG9uZW50cy9ib21iX3NjcmVlbidcbmltcG9ydCBPcmRlckl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9vcmRlcl9pdGVtJ1xuaW1wb3J0IEJvdHRvbUxvYWRNb3JlIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9ib3R0b21Mb2FkTW9yZVwiXG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL3BsYWNlaG9sZGVyXCJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcbmltcG9ydCBJbWFnZVVwbG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL2ltYWdlX3VwbG9hZGVyJ1xuaW1wb3J0IFd4VXRpbHMgZnJvbSAnLi4vdXRpbHMvV3hVdGlscyc7XG5cbmltcG9ydCB7XG4gIFNZU1RFTV9JTkZPLFxuICBVU0VSX1NQRUNJQ0FMX0lORk8sXG4gIFVTRVJfSU5GTyxcbiAgVVNFUl9DT0RFXG59IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY3JlYXRlX2NvbmZpcm0gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG5cdCBkZWYgPSB7XG4gICAgICBpbnB1dDoge1xuICAgICAgICBzdGF0dXM6IHRydWVcbiAgICAgIH0sXG4gICAgICBkZXRhaWxzOiBbXSxcbiAgICAgIHBpY3R1cmVzOiBbe3VybDonaHR0cDovL29zMTFnM2ZsNC5ia3QuY2xvdWRkbi5jb20vV2VjaGF0SU1HMTIuanBlZyd9XSxcbiAgICAgIHNrdUxpc3Q6IFt7XG4gICAgICAgIHNrdTogJycsXG4gICAgICAgIHByaWNlOiAnJyxcbiAgICAgICAgc3RvY2s6ICcnXG4gICAgICB9XSxcbiAgICAgIG1vZGU6ICdjcmVhdGUnLFxuICAgICAgcGljOiBudWxsLFxuICAgICAgZ29vZHNJZDogbnVsbCxcbiAgICAgIGlubmVyQ2F0ZWdvcmllczogW10sXG4gICAgICBpbml0OiBmYWxzZSxcbiAgICAgIGlzSW5uZXJEaXNwbGF5OiAnZmFsc2UnXG4gICAgfTtcbiAgICBkYXRhID0gey4uLnRoaXMuZGVmfTtcblxuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aXoOeVjCcsXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgZGlzY292ZXI6IERpc2NvdmVyLFxuICAgIGJvdHRvbUxvYWRNb3JlOiBCb3R0b21Mb2FkTW9yZSxcbiAgICBwbGFjZWhvbGRlcjogUGxhY2Vob2xkZXIsXG4gICAgYm9tYnNjcmVlbjogQm9tYnNjcmVlbixcbiAgICB0YWI6IFRhYixcbiAgICBvcmRlckl0ZW06IE9yZGVySXRlbSxcbiAgICBJbWFnZVVwbG9hZGVyOiBJbWFnZVVwbG9hZGVyLFxuICB9O1xuIFxuXG4gICBhc3luYyBjcmVhdGVDaGFubmVsKHBpY3R1cmVzLG5hbWUsaW50cm8pIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgICAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcbiAgICAgICAgY29uc29sZS5sb2coXCJvcGVuaWQ6LS1cIitvcGVuSWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInBpY3R1cmVzOi0tXCIrSlNPTi5zdHJpbmdpZnkocGljdHVyZXMpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJuYW1lOi0tXCIrbmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW50cm86LS1cIitpbnRybyk7XG5cblxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGdvb2RzRGV0YWlsczogW10sXG4gICAgICAgICAgZ29vZHNTa3VJbmZvOiB7fSxcbiAgICAgICAgICBnb29kc1N0b2NrczogW10sXG4gICAgICAgICAgaW1hZ2VzOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0aXAubG9hZGluZygn5L+d5a2Y5LitJyk7XG4gICAgICAgIC8vIOWkhOeQhuWbvueJh+S/oeaBr1xuICAgICAgICBmb3IgKGxldCBwaWN0dXJlIG9mIHBpY3R1cmVzKSB7XG4gICAgICAgICAgaWYgKHBpY3R1cmUudXJsLnN1YnN0cmluZygwLCA2KSA9PSAnd3hmaWxlJyB8fCBwaWN0dXJlLnVybC5zdWJzdHJpbmcoMCwgMTEpID09ICdodHRwOi8vdG1wLycpIHtcbiAgICAgICAgICBcdCAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vaW1hZ2VzYDtcblx0XHRcdCAgICAvLyBjb25zdCBwYXJhbSA9IHtcblx0XHRcdCAgICAvLyAgIHVybCxcblx0XHRcdCAgICAvLyAgIGZpbGVQYXRoLFxuXHRcdFx0ICAgIC8vICAgbmFtZTogJ2ltYWdlJ1xuXHRcdFx0ICAgIC8vIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5pbWFnZShwaWN0dXJlLnVybCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybiBpbWdcIitKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybiBpbWFnZVwiK0pTT04uc3RyaW5naWZ5KGltYWdlKSk7XG5cbiAgICAgICAgICAgIHBpY3R1cmU9aW1hZ2UuZGF0YTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGljdHVyZVwiK3BpY3R1cmUpO1xuICAgICAgICAgICAgdGhhdC5vcmdJbWFnZT1waWN0dXJlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoYXQub3JnSW1hZ2U9cGljdHVyZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aXAubG9hZGluZygn5L+d5a2Y5LitJywgdHJ1ZSk7XG5cblxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmNyZWF0ZUNoYW5uZWwoe1xuICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICBjcmVhdGVVc2VyT3BlbmlkOiBvcGVuSWQsXG4gICAgICAgICAgICBpbWdQYXRoOnRoYXQub3JnSW1hZ2UsXG4gICAgICAgICAgICBuYW1lOm5hbWUsXG4gICAgICAgICAgICBpbnRybzppbnRyb1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgICAgICAvLyB0aGF0Lmxpc3QgPSBqc29uLmRhdGEubGlzdDtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjaygpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwi57uR5a6a5oiQ5YqfLi4uLi5cIik7XG5cbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxuICAgICAgICB9XG4gICAgICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cblxuXG5cbiAgIC8vIOWKoOi9vemhuVxuICBvbkxvYWQob3B0aW9ucykge1xuXG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgdGhpcy5waWM9b3B0aW9ucy5waWN0dXJlO1xuXG4gIH1cblxuIGNvbXB1dGVkID0ge1xuXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgICAgZm9ybVN1Ym1pdChlKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICBsZXQgcGljdHVyZT10aGF0LnBpY3R1cmVzO1xuICAgICAgbGV0IG5hbWUgPSBlLmRldGFpbC52YWx1ZS5uYW1lO1xuICAgICAgbGV0IGludHJvID0gZS5kZXRhaWwudmFsdWUuaW50cm87XG4gICAgICBpZiAobmFtZSA9PSBcIlwiKSB7XG4gICAgICAgIHRpcC5hbGVydChcIuivt+i+k+WFpemikemBk+WQjeensFwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGludHJvID09IFwiXCIpIHtcbiAgICAgICAgdGlwLmFsZXJ0KFwi6K+36L6T5YWl6aKR6YGT5LuL57uNXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGF0LmNyZWF0ZUNoYW5uZWwocGljdHVyZSxuYW1lLGludHJvKTtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGc3VibWl05LqL5Lu277yM5pC65bim5pWw5o2u5Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgfSxcblxuXG4gICAgLy8g5LiK5Lyg54Wn54mHXG4gICAgICBhc3luYyBwaG90bygpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMucGljdHVyZXMubGVuZ3RoO1xuICAgICAgICBpZiAoc2l6ZSA+PSAyKSB7XG4gICAgICAgICAgYXdhaXQgVGlwcy5hbGVydCgn5pyA5aSa6YCJ5oup5LqU5byg5Zu+54mHJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtID0ge1xuICAgICAgICAgIGNvdW50OiAyIC0gc2l6ZSxcbiAgICAgICAgICBzaXplVHlwZTogWydjb21wcmVzc2VkJ11cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdGVtcEZpbGVQYXRocyA9IGF3YWl0IFd4VXRpbHMuY2hvb3NlSW1hZ2UocGFyYW0sIHRoaXMubWF4U2l6ZSk7XG4gICAgICAgIGNvbnN0IHBpY3R1cmVzID0gdGVtcEZpbGVQYXRocy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRlbXA6IHRydWUsXG4gICAgICAgICAgICB1cmw6IGl0ZW1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICBcblxuICAgIC8vICAgIHRoaXMucGljdHVyZXMgPSB0aGlzLnBpY3R1cmVzLmNvbmNhdChwaWN0dXJlcyk7XG4gICAgICAgIHRoaXMucGljdHVyZXMgPSBwaWN0dXJlcztcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcblxuICAgICAgICAgICAgY29uc3Qgc2l6ZTIgPSB0aGlzLnBpY3R1cmVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNpemUyKTtcbiAgICAgICAgaWYgKHNpemUyIDwxKSB7XG4gICAgICAgICAgYXdhaXQgVGlwcy5hbGVydCgn6K+36YCJ5oup5Zu+54mHJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGlwLmxvYWRpbmcoJ+S/neWtmOS4rScpO1xuICAgICAgICAvLyDlpITnkIblm77niYfkv6Hmga9cbiAgICAgICAgZm9yIChsZXQgcGljdHVyZSBvZiBwaWN0dXJlcykge1xuICAgICAgICAgIGlmIChwaWN0dXJlLnVybC5zdWJzdHJpbmcoMCwgNikgPT0gJ3d4ZmlsZScgfHwgcGljdHVyZS51cmwuc3Vic3RyaW5nKDAsIDExKSA9PSAnaHR0cDovL3RtcC8nKSB7XG4gICAgICAgICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9L2ltYWdlc2A7XG4gICAgXG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5pbWFnZShwaWN0dXJlLnVybCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybiBpbWdcIitKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybiBpbWFnZVwiK0pTT04uc3RyaW5naWZ5KGltYWdlKSk7XG4gICAgICAgICAgICBwaWN0dXJlPWltYWdlLmRhdGE7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAvL+S4iuS8oOaIkOWKnyDlhbPpl61sb2FkZGluZyDot7PovazliLDnoa7orqTpobXpnaJcbiAgICAgICAgICAgICAgdGlwLmxvYWRlZCgpO1xuICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDogXCIvcGFnZXMvY3JlYXRlX2NvbmZpcm0/cGljdHVyZT1cIitwaWN0dXJlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCAyMDAwKVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBpY3R1cmVcIitwaWN0dXJlKTtcbiAgICAgICAgICAgIHRoYXQub3JnSW1hZ2U9cGljdHVyZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGF0Lm9yZ0ltYWdlPXBpY3R1cmVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGlwLmxvYWRpbmcoJ+S/neWtmOS4rScsIHRydWUpO1xuICAgICAgfSxcblxuXG4gIH1cblxuICBldmVudHMgPSB7XG5cdH1cblxuXG59XG4iXX0=