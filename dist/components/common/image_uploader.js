'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _Tips = require('./../../utils/Tips.js');

var _Tips2 = _interopRequireDefault(_Tips);

var _slider_panel = require('./slider_panel.js');

var _slider_panel2 = _interopRequireDefault(_slider_panel);

var _WxUtils = require('./../../utils/WxUtils.js');

var _WxUtils2 = _interopRequireDefault(_WxUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoodsImageUploader = function (_wepy$component) {
  _inherits(GoodsImageUploader, _wepy$component);

  function GoodsImageUploader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GoodsImageUploader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoodsImageUploader.__proto__ || Object.getPrototypeOf(GoodsImageUploader)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      title: {
        default: '点击添加图片'
      },
      pictures: {
        twoWay: true
      },
      otherClass: {
        default: 'picture-swiper'
      },
      top: {
        default: '455'
      },
      maxSize: {
        default: '1'
      }
    }, _this.data = {
      isPanelDisplay: 'false',
      isEmpty: false
    }, _this.methods = {
      // 上传照片
      photo: function photo() {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var size, param, tempFilePaths, pictures;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  size = _this2.pictures.length;

                  if (!(size >= 2)) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 4;
                  return _Tips2.default.alert('最多选择五张图片');

                case 4:
                  return _context.abrupt('return');

                case 5:
                  param = {
                    count: 2 - size,
                    sizeType: ['compressed']
                  };
                  _context.next = 8;
                  return _WxUtils2.default.chooseImage(param, _this2.maxSize);

                case 8:
                  tempFilePaths = _context.sent;
                  pictures = tempFilePaths.map(function (item) {
                    return {
                      temp: true,
                      url: item
                    };
                  });
                  //    this.pictures = this.pictures.concat(pictures);

                  _this2.pictures = pictures;
                  _this2.$apply();

                case 12:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },


      // 上传照片
      photos: function photos() {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var size, param, tempFilePaths, pictures;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  size = _this3.pictures.length;

                  if (!(size >= 5)) {
                    _context2.next = 5;
                    break;
                  }

                  _context2.next = 4;
                  return _Tips2.default.alert('最多选择五张图片');

                case 4:
                  return _context2.abrupt('return');

                case 5:
                  param = {
                    count: 5 - size,
                    sizeType: ['compressed']
                  };
                  _context2.next = 8;
                  return _WxUtils2.default.chooseImage(param, _this3.maxSize);

                case 8:
                  tempFilePaths = _context2.sent;
                  pictures = tempFilePaths.map(function (item) {
                    return {
                      temp: true,
                      url: item
                    };
                  });

                  _this3.pictures = _this3.pictures.concat(pictures);
                  _this3.$apply();

                case 12:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3);
        }))();
      },


      // 打开管理面板
      manage: function manage() {
        this.isPanelDisplay = 'true';
      },

      // 向上移动
      up: function up(index) {
        if (index == 0) {
          return;
        }
        var target = index - 1;
        this.swap(index, target);
      },

      // 向下移动
      down: function down(index) {
        if (index == this.pictures.length - 1) {
          return;
        }
        var target = index + 1;
        this.swap(index, target);
      },

      // 删除图片
      remove: function remove(index) {
        this.pictures.splice(index, 1);
        if (this.pictures.length < 1) {
          this.isPanelDisplay = false;
        }
      }
    }, _this.watch = {
      isPanelDisplay: function isPanelDisplay(value) {
        this.$emit('toggle', value);
      }
    }, _this.$repeat = {}, _this.$props = { "SliderPanel": { "xmlns:v-bind": "", "v-bind:display.sync": "isPanelDisplay" } }, _this.$events = {}, _this.components = {
      SliderPanel: _slider_panel2.default
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoodsImageUploader, [{
    key: 'swap',
    value: function swap(srcIndex, targetIndex) {
      var pictures = this.pictures;
      var src = pictures[srcIndex];
      var target = pictures[targetIndex];
      pictures[targetIndex] = src;
      pictures[srcIndex] = target;
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return GoodsImageUploader;
}(_wepy2.default.component);

exports.default = GoodsImageUploader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlX3VwbG9hZGVyLmpzIl0sIm5hbWVzIjpbIkdvb2RzSW1hZ2VVcGxvYWRlciIsInByb3BzIiwidGl0bGUiLCJkZWZhdWx0IiwicGljdHVyZXMiLCJ0d29XYXkiLCJvdGhlckNsYXNzIiwidG9wIiwibWF4U2l6ZSIsImRhdGEiLCJpc1BhbmVsRGlzcGxheSIsImlzRW1wdHkiLCJtZXRob2RzIiwicGhvdG8iLCJzaXplIiwibGVuZ3RoIiwiYWxlcnQiLCJwYXJhbSIsImNvdW50Iiwic2l6ZVR5cGUiLCJjaG9vc2VJbWFnZSIsInRlbXBGaWxlUGF0aHMiLCJtYXAiLCJ0ZW1wIiwidXJsIiwiaXRlbSIsIiRhcHBseSIsInBob3RvcyIsImNvbmNhdCIsIm1hbmFnZSIsInVwIiwiaW5kZXgiLCJ0YXJnZXQiLCJzd2FwIiwiZG93biIsInJlbW92ZSIsInNwbGljZSIsIndhdGNoIiwidmFsdWUiLCIkZW1pdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlNsaWRlclBhbmVsIiwiZXZlbnRzIiwic3JjSW5kZXgiLCJ0YXJnZXRJbmRleCIsInNyYyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxrQjs7Ozs7Ozs7Ozs7Ozs7OE1BQ25CQyxLLEdBQVE7QUFDTkMsYUFBTztBQUNMQyxpQkFBUztBQURKLE9BREQ7QUFJTkMsZ0JBQVU7QUFDUkMsZ0JBQVE7QUFEQSxPQUpKO0FBT05DLGtCQUFZO0FBQ1ZILGlCQUFTO0FBREMsT0FQTjtBQVVOSSxXQUFLO0FBQ0hKLGlCQUFTO0FBRE4sT0FWQztBQWFOSyxlQUFTO0FBQ1BMLGlCQUFTO0FBREY7QUFiSCxLLFFBaUJSTSxJLEdBQU87QUFDTEMsc0JBQWdCLE9BRFg7QUFFTEMsZUFBUztBQUZKLEssUUFJUEMsTyxHQUFVO0FBQ1I7QUFDTUMsV0FGRSxtQkFFTTtBQUFBOztBQUFBO0FB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QUFMLENBQVcsUUFBWCxFQUFxQkQsS0FBckI7QUFDRDtBQUhLLEssUUFLVEUsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsZUFBYyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixnQkFBekMsRUFBZixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFHVkMsTSxHQUFTLEU7Ozs7O3lCQUNKQyxRLEVBQVVDLFcsRUFBYTtBQUMxQixVQUFNM0MsV0FBVyxLQUFLQSxRQUF0QjtBQUNBLFVBQU00QyxNQUFNNUMsU0FBUzBDLFFBQVQsQ0FBWjtBQUNBLFVBQU1kLFNBQVM1QixTQUFTMkMsV0FBVCxDQUFmO0FBQ0EzQyxlQUFTMkMsV0FBVCxJQUF3QkMsR0FBeEI7QUFDQTVDLGVBQVMwQyxRQUFULElBQXFCZCxNQUFyQjtBQUNEOzs7NkJBQ1EsQ0FDUjs7OztFQXJINkMsZUFBS2lCLFM7O2tCQUFoQ2pELGtCIiwiZmlsZSI6ImltYWdlX3VwbG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICBpbXBvcnQgVGlwcyBmcm9tICcuLi8uLi91dGlscy9UaXBzJztcbiAgaW1wb3J0IFNsaWRlclBhbmVsIGZyb20gJy4uL2NvbW1vbi9zbGlkZXJfcGFuZWwnO1xuICBpbXBvcnQgV3hVdGlscyBmcm9tICcuLi8uLi91dGlscy9XeFV0aWxzJztcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZHNJbWFnZVVwbG9hZGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgZGVmYXVsdDogJ+eCueWHu+a3u+WKoOWbvueJhydcbiAgICAgIH0sXG4gICAgICBwaWN0dXJlczoge1xuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBvdGhlckNsYXNzOiB7XG4gICAgICAgIGRlZmF1bHQ6ICdwaWN0dXJlLXN3aXBlcidcbiAgICAgIH0sXG4gICAgICB0b3A6IHtcbiAgICAgICAgZGVmYXVsdDogJzQ1NSdcbiAgICAgIH0sXG4gICAgICBtYXhTaXplOiB7XG4gICAgICAgIGRlZmF1bHQ6ICcxJ1xuICAgICAgfVxuICAgIH07XG4gICAgZGF0YSA9IHtcbiAgICAgIGlzUGFuZWxEaXNwbGF5OiAnZmFsc2UnLFxuICAgICAgaXNFbXB0eTogZmFsc2VcbiAgICB9O1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvLyDkuIrkvKDnhafniYdcbiAgICAgIGFzeW5jIHBob3RvKCkge1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5waWN0dXJlcy5sZW5ndGg7XG4gICAgICAgIGlmIChzaXplID49IDIpIHtcbiAgICAgICAgICBhd2FpdCBUaXBzLmFsZXJ0KCfmnIDlpJrpgInmi6nkupTlvKDlm77niYcnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW0gPSB7XG4gICAgICAgICAgY291bnQ6IDIgLSBzaXplLFxuICAgICAgICAgIHNpemVUeXBlOiBbJ2NvbXByZXNzZWQnXVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB0ZW1wRmlsZVBhdGhzID0gYXdhaXQgV3hVdGlscy5jaG9vc2VJbWFnZShwYXJhbSwgdGhpcy5tYXhTaXplKTtcbiAgICAgICAgY29uc3QgcGljdHVyZXMgPSB0ZW1wRmlsZVBhdGhzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGVtcDogdHJ1ZSxcbiAgICAgICAgICAgIHVybDogaXRlbVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgLy8gICAgdGhpcy5waWN0dXJlcyA9IHRoaXMucGljdHVyZXMuY29uY2F0KHBpY3R1cmVzKTtcbiAgICAgICAgdGhpcy5waWN0dXJlcyA9IHBpY3R1cmVzO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcblxuICAgICAgICAgICAgLy8g5LiK5Lyg54Wn54mHXG4gICAgICBhc3luYyBwaG90b3MoKSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLnBpY3R1cmVzLmxlbmd0aDtcbiAgICAgICAgaWYgKHNpemUgPj0gNSkge1xuICAgICAgICAgIGF3YWl0IFRpcHMuYWxlcnQoJ+acgOWkmumAieaLqeS6lOW8oOWbvueJhycpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcbiAgICAgICAgICBjb3VudDogNSAtIHNpemUsXG4gICAgICAgICAgc2l6ZVR5cGU6IFsnY29tcHJlc3NlZCddXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHRlbXBGaWxlUGF0aHMgPSBhd2FpdCBXeFV0aWxzLmNob29zZUltYWdlKHBhcmFtLCB0aGlzLm1heFNpemUpO1xuICAgICAgICBjb25zdCBwaWN0dXJlcyA9IHRlbXBGaWxlUGF0aHMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZW1wOiB0cnVlLFxuICAgICAgICAgICAgdXJsOiBpdGVtXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5waWN0dXJlcyA9IHRoaXMucGljdHVyZXMuY29uY2F0KHBpY3R1cmVzKTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG5cblxuICAgICAgLy8g5omT5byA566h55CG6Z2i5p2/XG4gICAgICBtYW5hZ2UoKSB7XG4gICAgICAgIHRoaXMuaXNQYW5lbERpc3BsYXkgPSAndHJ1ZSc7XG4gICAgICB9LFxuICAgICAgLy8g5ZCR5LiK56e75YqoXG4gICAgICB1cChpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0YXJnZXQgPSBpbmRleCAtIDE7XG4gICAgICAgIHRoaXMuc3dhcChpbmRleCwgdGFyZ2V0KTtcbiAgICAgIH0sXG4gICAgICAvLyDlkJHkuIvnp7vliqhcbiAgICAgIGRvd24oaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID09IHRoaXMucGljdHVyZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0YXJnZXQgPSBpbmRleCArIDE7XG4gICAgICAgIHRoaXMuc3dhcChpbmRleCwgdGFyZ2V0KTtcbiAgICAgIH0sXG4gICAgICAvLyDliKDpmaTlm77niYdcbiAgICAgIHJlbW92ZShpbmRleCkge1xuICAgICAgICB0aGlzLnBpY3R1cmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGlmICh0aGlzLnBpY3R1cmVzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICB0aGlzLmlzUGFuZWxEaXNwbGF5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHdhdGNoID0ge1xuICAgICAgaXNQYW5lbERpc3BsYXkodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgndG9nZ2xlJywgdmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlNsaWRlclBhbmVsXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpkaXNwbGF5LnN5bmNcIjpcImlzUGFuZWxEaXNwbGF5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIFNsaWRlclBhbmVsOiBTbGlkZXJQYW5lbFxuICAgIH07XG4gICAgZXZlbnRzID0ge307XG4gICAgc3dhcChzcmNJbmRleCwgdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGNvbnN0IHBpY3R1cmVzID0gdGhpcy5waWN0dXJlcztcbiAgICAgIGNvbnN0IHNyYyA9IHBpY3R1cmVzW3NyY0luZGV4XTtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHBpY3R1cmVzW3RhcmdldEluZGV4XTtcbiAgICAgIHBpY3R1cmVzW3RhcmdldEluZGV4XSA9IHNyYztcbiAgICAgIHBpY3R1cmVzW3NyY0luZGV4XSA9IHRhcmdldDtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19