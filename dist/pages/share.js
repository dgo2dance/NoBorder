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

var _bottomDrawer = require('./../components/bottom-drawer.js');

var _bottomDrawer2 = _interopRequireDefault(_bottomDrawer);

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var share = function (_wepy$page) {
  _inherits(share, _wepy$page);

  function share() {
    var _ref, _this$def;

    var _temp, _this, _ret;

    _classCallCheck(this, share);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = share.__proto__ || Object.getPrototypeOf(share)).call.apply(_ref, [this].concat(args))), _this), _this.def = (_this$def = {
      input: {
        status: true
      },
      shareDrawerItems: [{ name: '分享给朋友', value: 'send_friends', isShare: true }, { name: '保存图片', value: 'qr_code', isShare: false }],
      details: [],
      pic: [{ url: 'http://os11g3fl4.bkt.clouddn.com/365089016132991422.jpeg' }],
      skuList: [{
        sku: '',
        price: '',
        stock: ''
      }],
      mode: 'create'
    }, _defineProperty(_this$def, 'pic', null), _defineProperty(_this$def, 'goodsId', null), _defineProperty(_this$def, 'innerCategories', []), _defineProperty(_this$def, 'init', false), _defineProperty(_this$def, 'isInnerDisplay', 'false'), _defineProperty(_this$def, 'price', [{
      name: '0.01',
      url: '/pages/Course/course',
      icon: '/image/java_ico.png',
      code: '10'
    }, {
      name: '0.1',
      url: '/pages/Course/course',
      icon: '/image/python_ico.png',
      code: '11'
    }, {
      name: '1',
      url: '/pages/Course/course',
      icon: '/image/java_ico.png',
      code: '10'
    }, {
      name: '2',
      icon: '/image/python_ico.png',
      code: '11'
    }, {
      name: '5',
      url: '/pages/Course/course',
      icon: '/image/java_ico.png',
      code: '10'
    }, {
      name: '7',
      icon: '/image/python_ico.png',
      code: '11'
    }]), _this$def), _this.data = _extends({}, _this.def), _this.config = {
      navigationBarTitleText: '每图',
      usingComponents: {
        'wxc-popup': '../../packages/@minui/wxc-popup/dist/index'
      }

    }, _this.$repeat = {}, _this.$props = { "bottomdrawer": { "xmlns:v-bind": "", "v-bind:items.sync": "shareDrawerItems", "xmlns:v-on": "" } }, _this.$events = { "bottomdrawer": { "v-on:itemtap": "handleShareItem" } }, _this.components = {
      discover: _discover2.default,
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default,
      bombscreen: _bomb_screen2.default,
      tab: _tab2.default,
      orderItem: _order_item2.default,
      ImageUploader: _image_uploader2.default,
      bottomdrawer: _bottomDrawer2.default
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
      },
      showpopup: function showpopup() {
        var popupComponent = this.$wxpage.selectComponent('.wxc-popup');
        console.log("111");
        popupComponent && popupComponent.show();
      },
      onCancel: function onCancel() {
        var popupComponent = this.$wxpage.selectComponent('.wxc-popup');
        popupComponent && popupComponent.hide();
      },
      showShare: function showShare() {
        this.$invoke('bottomdrawer', 'showDrawer', '');
      },
      handleShareItem: function handleShareItem(param) {
        if (param === 'qr_code') {
          // this.displayQrCode(this.animalInfo.objectId)
          console.log("9999999");
        }
      }
    }, _this.watch = {
      loading: function loading() {
        if (this.loading) {
          this.$invoke('fidoloader', 'showLoading', '');
        } else {
          this.$invoke('fidoloader', 'hideLoading', '');
        }
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(share, [{
    key: 'onLoad',


    //


    // 加载项
    value: function onLoad(options) {

      console.log("pic:" + this.pic);
      //  this.pic=options.picture;
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

  return share;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(share , 'pages/share'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlLmpzIl0sIm5hbWVzIjpbInNoYXJlIiwiZGVmIiwiaW5wdXQiLCJzdGF0dXMiLCJzaGFyZURyYXdlckl0ZW1zIiwibmFtZSIsInZhbHVlIiwiaXNTaGFyZSIsImRldGFpbHMiLCJwaWMiLCJ1cmwiLCJza3VMaXN0Iiwic2t1IiwicHJpY2UiLCJzdG9jayIsIm1vZGUiLCJpY29uIiwiY29kZSIsImRhdGEiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZGlzY292ZXIiLCJib3R0b21Mb2FkTW9yZSIsInBsYWNlaG9sZGVyIiwiYm9tYnNjcmVlbiIsInRhYiIsIm9yZGVySXRlbSIsIkltYWdlVXBsb2FkZXIiLCJib3R0b21kcmF3ZXIiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJnb0NvbmZpcm0iLCJnb1RvQ29uZmlybSIsInNob3dwb3B1cCIsInBvcHVwQ29tcG9uZW50IiwiJHd4cGFnZSIsInNlbGVjdENvbXBvbmVudCIsImNvbnNvbGUiLCJsb2ciLCJzaG93Iiwib25DYW5jZWwiLCJoaWRlIiwic2hvd1NoYXJlIiwiJGludm9rZSIsImhhbmRsZVNoYXJlSXRlbSIsInBhcmFtIiwid2F0Y2giLCJsb2FkaW5nIiwiZXZlbnRzIiwib3B0aW9ucyIsImZvcm1JZCIsInVzZXJTcGVjaWFsSW5mbyIsImdldFN0b3JhZ2VTeW5jIiwib3BlbklkIiwib3BlbmlkIiwiY29uZmlybSIsInF1ZXJ5IiwicGljSWQiLCJqc29uIiwic3VjY2VzcyIsInNldFRpbWVvdXQiLCJsb2FkZWQiLCJuYXZpZ2F0ZVRvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7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SyxRQThCVFEsSyxHQUFRO0FBQ0xDLGFBREsscUJBQ007QUFDVCxZQUFJLEtBQUtBLE9BQVQsRUFBa0I7QUFDaEIsZUFBS0osT0FBTCxDQUFhLFlBQWIsRUFBMkIsYUFBM0IsRUFBMEMsRUFBMUM7QUFDRCxTQUZELE1BRU87QUFDTCxlQUFLQSxPQUFMLENBQWEsWUFBYixFQUEyQixhQUEzQixFQUEwQyxFQUExQztBQUNEO0FBQ0Y7QUFQSSxLLFFBV1RLLE0sR0FBUyxFOzs7Ozs7O0FBcEdUOzs7QUFJQzsyQkFDTUMsTyxFQUFTOztBQUVkWixjQUFRQyxHQUFSLENBQVksU0FBTyxLQUFLbEMsR0FBeEI7QUFDRjtBQUVDOzs7OzRGQU9lOEMsTTs7Ozs7O0FBQ2Q7QUFDQSw4QkFBSUgsT0FBSixDQUFZLEtBQVo7QUFDSUksK0IsR0FBa0IsZUFBS0MsY0FBTCxrQ0FBMkMsRTtBQUM3REMsc0IsR0FBU0YsZ0JBQWdCRyxNOztBQUU3Qjs7O3VCQUNtQixjQUFJQyxPQUFKLENBQVk7QUFDN0JDLHlCQUFPO0FBQ0xILDRCQUFRQSxNQURIO0FBRUxJLDJCQUFPLEtBQUtyRDtBQUZQO0FBRHNCLGlCQUFaLEM7OztBQUFic0Qsb0I7OztBQVFOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTSw4QkFBSUMsT0FBSixDQUFZLE9BQVo7QUFDRkMsMkJBQVcsWUFBTTtBQUNmLGdDQUFJQyxNQUFKO0FBQ0EsaUNBQUtDLFVBQUwsQ0FBZ0I7QUFDZHpELHlCQUFLO0FBRFMsbUJBQWhCO0FBR0QsaUJBTEQsRUFLRyxJQUxIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkkyQixlQUFLMEQsSTs7a0JBQW5CcEUsSyIsImZpbGUiOiJzaGFyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2FwaS9hcGknO1xuaW1wb3J0IHRpcCBmcm9tICcuLi91dGlscy90aXAnXG5pbXBvcnQgVGlwcyBmcm9tICcuLi91dGlscy9UaXBzJztcblxuaW1wb3J0IFRhYiBmcm9tICcuLi9jb21wb25lbnRzL3RhYidcbmltcG9ydCBEaXNjb3ZlciBmcm9tICcuLi9jb21wb25lbnRzL2Rpc2NvdmVyJ1xuaW1wb3J0IEJvbWJzY3JlZW4gZnJvbSAnLi4vY29tcG9uZW50cy9ib21iX3NjcmVlbidcbmltcG9ydCBPcmRlckl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9vcmRlcl9pdGVtJ1xuaW1wb3J0IEJvdHRvbURyYXdlciBmcm9tICcuLi9jb21wb25lbnRzL2JvdHRvbS1kcmF3ZXInXG5pbXBvcnQgQm90dG9tTG9hZE1vcmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL2JvdHRvbUxvYWRNb3JlXCJcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vcGxhY2Vob2xkZXJcIlxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuaW1wb3J0IEltYWdlVXBsb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vaW1hZ2VfdXBsb2FkZXInXG5pbXBvcnQgV3hVdGlscyBmcm9tICcuLi91dGlscy9XeFV0aWxzJztcblxuaW1wb3J0IHtcbiAgU1lTVEVNX0lORk8sXG4gIFVTRVJfU1BFQ0lDQUxfSU5GTyxcbiAgVVNFUl9JTkZPLFxuICBVU0VSX0NPREVcbn0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzaGFyZSBleHRlbmRzIHdlcHkucGFnZSB7XG5cblx0IGRlZiA9IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIHN0YXR1czogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHNoYXJlRHJhd2VySXRlbXM6W1xuICAgICAgICAgIHtuYW1lOiAn5YiG5Lqr57uZ5pyL5Y+LJywgdmFsdWU6ICdzZW5kX2ZyaWVuZHMnLCBpc1NoYXJlOiB0cnVlfSxcbiAgICAgICAgICB7bmFtZTogJ+S/neWtmOWbvueJhycsIHZhbHVlOiAncXJfY29kZScsIGlzU2hhcmU6IGZhbHNlfV0sXG4gICAgICBkZXRhaWxzOiBbXSxcbiAgICAgIHBpYzogW3t1cmw6J2h0dHA6Ly9vczExZzNmbDQuYmt0LmNsb3VkZG4uY29tLzM2NTA4OTAxNjEzMjk5MTQyMi5qcGVnJ31dLFxuICAgICAgc2t1TGlzdDogW3tcbiAgICAgICAgc2t1OiAnJyxcbiAgICAgICAgcHJpY2U6ICcnLFxuICAgICAgICBzdG9jazogJydcbiAgICAgIH1dLFxuICAgICAgbW9kZTogJ2NyZWF0ZScsXG4gICAgICBwaWM6IG51bGwsXG4gICAgICBnb29kc0lkOiBudWxsLFxuICAgICAgaW5uZXJDYXRlZ29yaWVzOiBbXSxcbiAgICAgIGluaXQ6IGZhbHNlLFxuICAgICAgaXNJbm5lckRpc3BsYXk6ICdmYWxzZScsXG4gICAgICBwcmljZTogW3tcbiAgICAgICAgICBuYW1lOiAnMC4wMScsXG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL0NvdXJzZS9jb3Vyc2UnLFxuICAgICAgICAgIGljb246ICcvaW1hZ2UvamF2YV9pY28ucG5nJyxcbiAgICAgICAgICBjb2RlOiAnMTAnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnMC4xJyxcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvQ291cnNlL2NvdXJzZScsXG4gICAgICAgICAgaWNvbjogJy9pbWFnZS9weXRob25faWNvLnBuZycsXG4gICAgICAgICAgY29kZTogJzExJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJzEnLFxuICAgICAgICAgIHVybDogJy9wYWdlcy9Db3Vyc2UvY291cnNlJyxcbiAgICAgICAgICBpY29uOiAnL2ltYWdlL2phdmFfaWNvLnBuZycsXG4gICAgICAgICAgY29kZTogJzEwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJzInLFxuICAgICAgICAgIGljb246ICcvaW1hZ2UvcHl0aG9uX2ljby5wbmcnLFxuICAgICAgICAgIGNvZGU6ICcxMSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICc1JyxcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvQ291cnNlL2NvdXJzZScsXG4gICAgICAgICAgaWNvbjogJy9pbWFnZS9qYXZhX2ljby5wbmcnLFxuICAgICAgICAgIGNvZGU6ICcxMCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICc3JyxcbiAgICAgICAgICBpY29uOiAnL2ltYWdlL3B5dGhvbl9pY28ucG5nJyxcbiAgICAgICAgICBjb2RlOiAnMTEnXG4gICAgICAgIH1cbiAgICAgIF1cblxuICAgIH07XG5cbiAgICBkYXRhID0gey4uLnRoaXMuZGVmfTtcblxuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+avj+WbvicsXG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd3eGMtcG9wdXAnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1wb3B1cC9kaXN0L2luZGV4JyxcbiAgICAgIH1cblxuICB9O1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiYm90dG9tZHJhd2VyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDppdGVtcy5zeW5jXCI6XCJzaGFyZURyYXdlckl0ZW1zXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wiYm90dG9tZHJhd2VyXCI6e1widi1vbjppdGVtdGFwXCI6XCJoYW5kbGVTaGFyZUl0ZW1cIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBkaXNjb3ZlcjogRGlzY292ZXIsXG4gICAgYm90dG9tTG9hZE1vcmU6IEJvdHRvbUxvYWRNb3JlLFxuICAgIHBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlcixcbiAgICBib21ic2NyZWVuOiBCb21ic2NyZWVuLFxuICAgIHRhYjogVGFiLFxuICAgIG9yZGVySXRlbTogT3JkZXJJdGVtLFxuICAgIEltYWdlVXBsb2FkZXI6IEltYWdlVXBsb2FkZXIsXG4gICAgYm90dG9tZHJhd2VyOkJvdHRvbURyYXdlclxuICB9O1xuIFxuXG4gIC8vXG5cblxuXG4gICAvLyDliqDovb3poblcbiAgb25Mb2FkKG9wdGlvbnMpIHtcblxuICAgIGNvbnNvbGUubG9nKFwicGljOlwiK3RoaXMucGljKTtcbiAgLy8gIHRoaXMucGljPW9wdGlvbnMucGljdHVyZTtcblxuICB9XG5cbiBjb21wdXRlZCA9IHtcblxuICB9XG5cblxuYXN5bmMgZ29Ub0NvbmZpcm0oZm9ybUlkKSB7XG4gICAgLy/mtYvor5XosIPnlKjmjqXlj6PnlKjvvIzlj6/ms6jph4pcbiAgICB0aXAubG9hZGluZyhcIuehruiupOS4rVwiKTtcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuXG4gICAgLy/noa7orqTmj5DkuqRcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmNvbmZpcm0oe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgb3BlbklkOiBvcGVuSWQsXG4gICAgICAgIHBpY0lkOiB0aGlzLnBpY1xuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICAvLyBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xuXG4gICAgLy8gICB0aXAuc3VjY2VzcyhcIuehruiupOaIkOWKnyFcIik7XG4gICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgICAgIHRpcC5sb2FkZWQoKTtcbiAgICAvLyAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgIC8vICAgICAgICAgdXJsOiBcIi9wYWdlcy9yZW9yZGVyXCJcbiAgICAvLyAgICAgICB9KVxuICAgIC8vICAgICB9LCAyMDAwKVxuXG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxuICAgIC8vIH1cblxuICAgICAgICAgIHRpcC5zdWNjZXNzKFwi56Gu6K6k5oiQ5YqfIVwiKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGlwLmxvYWRlZCgpO1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL3NoYXJlXCJcbiAgICAgICAgICB9KVxuICAgICAgICB9LCAyMDAwKVxuXG5cbiAgfVxuXG5cblxuICBtZXRob2RzID0ge1xuXG4gICAgLy/noa7orqTmj5DkuqRcbiAgICBhc3luYyBnb0NvbmZpcm0oKXtcbiAgICAgIHRoaXMuZ29Ub0NvbmZpcm0oKTtcbiAgICB9LFxuXG4gICAgc2hvd3BvcHVwKCkge1xuICAgICAgICBsZXQgcG9wdXBDb21wb25lbnQgPSB0aGlzLiR3eHBhZ2Uuc2VsZWN0Q29tcG9uZW50KCcud3hjLXBvcHVwJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiMTExXCIpO1xuICAgICAgICBwb3B1cENvbXBvbmVudCAmJiBwb3B1cENvbXBvbmVudC5zaG93KCk7XG4gICAgICB9LFxuICAgICAgb25DYW5jZWwoKSB7XG4gICAgICAgIGxldCBwb3B1cENvbXBvbmVudCA9IHRoaXMuJHd4cGFnZS5zZWxlY3RDb21wb25lbnQoJy53eGMtcG9wdXAnKTtcbiAgICAgICAgcG9wdXBDb21wb25lbnQgJiYgcG9wdXBDb21wb25lbnQuaGlkZSgpO1xuICAgICAgfSxcbiAgICAgIHNob3dTaGFyZSAoKSB7XG4gICAgICAgIHRoaXMuJGludm9rZSgnYm90dG9tZHJhd2VyJywgJ3Nob3dEcmF3ZXInLCAnJylcbiAgICAgIH0sXG5cbiAgICAgICBoYW5kbGVTaGFyZUl0ZW0gKHBhcmFtKSB7XG4gICAgICAgIGlmIChwYXJhbSA9PT0gJ3FyX2NvZGUnKSB7XG4gICAgICAgICAvLyB0aGlzLmRpc3BsYXlRckNvZGUodGhpcy5hbmltYWxJbmZvLm9iamVjdElkKVxuICAgICAgICAgY29uc29sZS5sb2coXCI5OTk5OTk5XCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICB9XG5cbiAgIHdhdGNoID0ge1xuICAgICAgbG9hZGluZyAoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ2ZpZG9sb2FkZXInLCAnc2hvd0xvYWRpbmcnLCAnJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ2ZpZG9sb2FkZXInLCAnaGlkZUxvYWRpbmcnLCAnJylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cblxuICBldmVudHMgPSB7XG5cdH1cblxuXG59XG4iXX0=