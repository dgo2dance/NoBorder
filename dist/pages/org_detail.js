'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _filter_bar = require('./../components/filter_bar.js');

var _filter_bar2 = _interopRequireDefault(_filter_bar);

var _shop_grid_list = require('./../components/shop_grid_list.js');

var _shop_grid_list2 = _interopRequireDefault(_shop_grid_list);

var _bottomLoadMore = require('./../components/common/bottomLoadMore.js');

var _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore);

var _placeholder = require('./../components/common/placeholder.js');

var _placeholder2 = _interopRequireDefault(_placeholder);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeDetail = function (_wepy$page) {
  _inherits(HomeDetail, _wepy$page);

  function HomeDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HomeDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HomeDetail.__proto__ || Object.getPrototypeOf(HomeDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: ''
    }, _this.data = {
      orgCode: "",
      org: {},
      list: [],
      purchasetype: 1,
      is_empty: false,
      //当前页面
      currentPage: 1,
      //总页数
      page_total: 0,
      //是否显示 底部loading
      showLoading: true,
      //防止重复加载
      preventRepeatReuqest: false,
      sort: 1,
      skuval: ""
    }, _this.$repeat = {}, _this.$props = { "filterBar": { "xmlns:v-on": "" }, "shopGridList": { "xmlns:v-bind": "", "v-bind:purchasetype.sync": "purchasetype", "v-bind:list.sync": "list" }, "bottomLoadMore": { "v-bind:show.sync": "showLoading", "message": "正在加载" }, "placeholder": { "v-bind:show.sync": "is_empty", "message": "暂无发现数据" } }, _this.$events = { "filterBar": { "v-on:currentType": "currentType" } }, _this.components = {
      filterBar: _filter_bar2.default,
      shopGridList: _shop_grid_list2.default,
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default

      //获取清单详情
    }, _this.computed = {}, _this.methods = {
      currentType: function currentType(obj) {
        //tip.success("状态:" + obj);
        var name = obj.name;
        var type = obj.type;
        if (name == "zhonghe") {
          this.sort = -1;
        } else if (name == "sale") {
          this.sort = 3;
        } else if (name == "price") {
          if (type == "desc") {
            this.sort = 2;
          } else if (type == "asc") {
            this.sort = 1;
          }
        } else if (name == "sku") {
          this.skuval = type;
        }
        this.list = [];
        this.showLoading = true;
        this.is_empty = false;
        this.getOrgList();
      },

      onShareAppMessage: function onShareAppMessage(res) {
        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target);
        }
        return {
          title: this.cate.name,
          path: '/pages/home_detail?code=' + this.catCode,
          success: function success(res) {
            // 转发成功
          },
          fail: function fail(res) {
            // 转发失败
          }
        };
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HomeDetail, [{
    key: 'getOrg',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                _context.next = 3;
                return _api2.default.getOrgById({
                  query: {
                    code: parseInt(this.orgCode)
                  }
                });

              case 3:
                json = _context.sent;

                console.log("org------" + JSON.stringify(json));
                if (json.data.code == 0) {
                  that.org = json.data.data;
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.$apply();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getOrg() {
        return _ref2.apply(this, arguments);
      }

      return getOrg;
    }()

    //获取清单用户列表

  }, {
    key: 'getOrgList',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(currentPage, size) {
        var that, json;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this;
                //const json = await api.getGoodsList({

                _context2.next = 3;
                return _api2.default.orgPersonList({
                  query: {
                    page: currentPage || 1,
                    size: size || 10,
                    orgId: parseInt(this.orgCode),
                    sort: this.sort,
                    skuval: this.skuval
                  }
                });

              case 3:
                json = _context2.sent;

                console.log(JSON.stringify(json));
                if (json.data.code == 0) {
                  that.list = [].concat(_toConsumableArray(that.list), _toConsumableArray(json.data.data.records));
                  that.page_total = json.data.page_total;
                  if (json.data.page_total == 0) {
                    //暂无数据
                    that.is_empty = true;
                  }
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;
                that.$apply();

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getOrgList(_x, _x2) {
        return _ref3.apply(this, arguments);
      }

      return getOrgList;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(option) {
      this.cate = {};
      this.list = [];
      this.skuval = "";
      this.orgCode = option.code;
      this.is_empty = false;
      //当前页面
      this.currentPage = 1;
      //总页数
      this.page_total = 0;
      //是否显示 底部loading
      this.showLoading = true;
      //防止重复加载
      this.preventRepeatReuqest = false;
      this.sort = 1;
      console.log("id===" + this.code);
      //this.list = bb.result.products;
      //this.$apply();
      //获取清单详情
      this.getOrg();
      //获取清单用户列表
      this.getOrgList();
    }
  }, {
    key: 'onReachBottom',

    //加载更多
    value: function onReachBottom() {
      var that = this;
      that.showLoading = true;
      console.log(that.page_total + "===" + that.currentPage);
      //判断总页数是否大于翻页数
      if (that.page_total > that.currentPage) {
        //防止重复加载
        if (that.preventRepeatReuqest) {
          return true;
        }
        that.preventRepeatReuqest = true;
        that.currentPage++;
        that.getGoodList(that.currentPage);
        that.preventRepeatReuqest = false;
      } else {
        that.showLoading = false;
      }
    }
  }]);

  return HomeDetail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(HomeDetail , 'pages/org_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZ19kZXRhaWwuanMiXSwibmFtZXMiOlsiSG9tZURldGFpbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwib3JnQ29kZSIsIm9yZyIsImxpc3QiLCJwdXJjaGFzZXR5cGUiLCJpc19lbXB0eSIsImN1cnJlbnRQYWdlIiwicGFnZV90b3RhbCIsInNob3dMb2FkaW5nIiwicHJldmVudFJlcGVhdFJldXFlc3QiLCJzb3J0Iiwic2t1dmFsIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZmlsdGVyQmFyIiwic2hvcEdyaWRMaXN0IiwiYm90dG9tTG9hZE1vcmUiLCJwbGFjZWhvbGRlciIsImNvbXB1dGVkIiwibWV0aG9kcyIsImN1cnJlbnRUeXBlIiwib2JqIiwibmFtZSIsInR5cGUiLCJnZXRPcmdMaXN0Iiwib25TaGFyZUFwcE1lc3NhZ2UiLCJyZXMiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInRpdGxlIiwiY2F0ZSIsInBhdGgiLCJjYXRDb2RlIiwic3VjY2VzcyIsImZhaWwiLCJldmVudHMiLCJ0aGF0IiwiZ2V0T3JnQnlJZCIsInF1ZXJ5IiwiY29kZSIsInBhcnNlSW50IiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsIm1zZyIsIiRhcHBseSIsInNpemUiLCJvcmdQZXJzb25MaXN0IiwicGFnZSIsIm9yZ0lkIiwicmVjb3JkcyIsIm9wdGlvbiIsImdldE9yZyIsImdldEdvb2RMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVMsRUFESjtBQUVMQyxXQUFJLEVBRkM7QUFHTEMsWUFBTSxFQUhE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Q0E7QUFDQSxXQUFLQyxXQUFMLEdBQW1CLENBQW5CO0FBQ0E7QUFDQSxXQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBQ0E7QUFDQSxXQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0E7QUFDQSxXQUFLQyxvQkFBTCxHQUE0QixLQUE1QjtBQUNBLFdBQUtDLElBQUwsR0FBWSxDQUFaO0FBQ0FvQixjQUFRQyxHQUFSLENBQVksVUFBUSxLQUFLWSxJQUF6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQUtjLE1BQUw7QUFDQTtBQUNBLFdBQUsvQixVQUFMO0FBQ0Q7Ozs7QUFnREQ7b0NBQ2dCO0FBQ2QsVUFBSWMsT0FBTyxJQUFYO0FBQ0FBLFdBQUtoQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0FzQixjQUFRQyxHQUFSLENBQVlTLEtBQUtqQyxVQUFMLEdBQWtCLEtBQWxCLEdBQTBCaUMsS0FBS2xDLFdBQTNDO0FBQ0E7QUFDQSxVQUFLa0MsS0FBS2pDLFVBQU4sR0FBb0JpQyxLQUFLbEMsV0FBN0IsRUFBMEM7QUFDeEM7QUFDQSxZQUFJa0MsS0FBSy9CLG9CQUFULEVBQStCO0FBQzdCLGlCQUFPLElBQVA7QUFDRDtBQUNEK0IsYUFBSy9CLG9CQUFMLEdBQTRCLElBQTVCO0FBQ0ErQixhQUFLbEMsV0FBTDtBQUNBa0MsYUFBS2tCLFdBQUwsQ0FBaUJsQixLQUFLbEMsV0FBdEI7QUFDQWtDLGFBQUsvQixvQkFBTCxHQUE0QixLQUE1QjtBQUNELE9BVEQsTUFTTztBQUNMK0IsYUFBS2hDLFdBQUwsR0FBbUIsS0FBbkI7QUFDRDtBQUNGOzs7O0VBcktxQyxlQUFLNkMsSTs7a0JBQXhCeEQsVSIsImZpbGUiOiJvcmdfZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgRmlsdGVyQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL2ZpbHRlcl9iYXJcIlxuaW1wb3J0IFNob3BHcmlkTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3Nob3BfZ3JpZF9saXN0J1xuaW1wb3J0IEJvdHRvbUxvYWRNb3JlIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9ib3R0b21Mb2FkTW9yZVwiXG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL3BsYWNlaG9sZGVyXCJcbmltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lRGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICcnLFxuICB9XG4gIGRhdGEgPSB7XG4gICAgb3JnQ29kZTogXCJcIixcbiAgICBvcmc6e30sXG4gICAgbGlzdDogW10sXG4gICAgcHVyY2hhc2V0eXBlOiAxLFxuICAgIGlzX2VtcHR5OiBmYWxzZSxcbiAgICAvL+W9k+WJjemhtemdolxuICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgIC8v5oC76aG15pWwXG4gICAgcGFnZV90b3RhbDogMCxcbiAgICAvL+aYr+WQpuaYvuekuiDlupXpg6hsb2FkaW5nXG4gICAgc2hvd0xvYWRpbmc6IHRydWUsXG4gICAgLy/pmLLmraLph43lpI3liqDovb1cbiAgICBwcmV2ZW50UmVwZWF0UmV1cWVzdDogZmFsc2UsXG4gICAgc29ydDogMSxcbiAgICBza3V2YWw6IFwiXCJcbiAgfVxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiZmlsdGVyQmFyXCI6e1wieG1sbnM6di1vblwiOlwiXCJ9LFwic2hvcEdyaWRMaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpwdXJjaGFzZXR5cGUuc3luY1wiOlwicHVyY2hhc2V0eXBlXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJsaXN0XCJ9LFwiYm90dG9tTG9hZE1vcmVcIjp7XCJ2LWJpbmQ6c2hvdy5zeW5jXCI6XCJzaG93TG9hZGluZ1wiLFwibWVzc2FnZVwiOlwi5q2j5Zyo5Yqg6L29XCJ9LFwicGxhY2Vob2xkZXJcIjp7XCJ2LWJpbmQ6c2hvdy5zeW5jXCI6XCJpc19lbXB0eVwiLFwibWVzc2FnZVwiOlwi5pqC5peg5Y+R546w5pWw5o2uXCJ9fTtcclxuJGV2ZW50cyA9IHtcImZpbHRlckJhclwiOntcInYtb246Y3VycmVudFR5cGVcIjpcImN1cnJlbnRUeXBlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgZmlsdGVyQmFyOiBGaWx0ZXJCYXIsXG4gICAgc2hvcEdyaWRMaXN0OiBTaG9wR3JpZExpc3QsXG4gICAgYm90dG9tTG9hZE1vcmU6IEJvdHRvbUxvYWRNb3JlLFxuICAgIHBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlclxuICB9XG5cbiAgLy/ojrflj5bmuIXljZXor6bmg4VcbiAgYXN5bmMgZ2V0T3JnKCl7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuZ2V0T3JnQnlJZCh7XG4gICAgICBxdWVyeTp7XG4gICAgICAgY29kZTogcGFyc2VJbnQodGhpcy5vcmdDb2RlKVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwib3JnLS0tLS0tXCIrSlNPTi5zdHJpbmdpZnkoanNvbikpO1xuICAgIGlmKGpzb24uZGF0YS5jb2RlID09IDApe1xuICAgICAgdGhhdC5vcmcgPSBqc29uLmRhdGEuZGF0YTtcbiAgICB9IGVsc2V7XG4gICAgICAgICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZyk7XG4gICAgfVxuICAgIHRoYXQuJGFwcGx5KCk7XG5cbiAgfVxuXG4gIC8v6I635Y+W5riF5Y2V55So5oi35YiX6KGoXG4gIGFzeW5jIGdldE9yZ0xpc3QoY3VycmVudFBhZ2UsIHNpemUpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgLy9jb25zdCBqc29uID0gYXdhaXQgYXBpLmdldEdvb2RzTGlzdCh7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5vcmdQZXJzb25MaXN0KHtcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIHBhZ2U6IGN1cnJlbnRQYWdlIHx8IDEsXG4gICAgICAgIHNpemU6IHNpemUgfHwgMTAsXG4gICAgICAgIG9yZ0lkOiBwYXJzZUludCh0aGlzLm9yZ0NvZGUpLFxuICAgICAgICBzb3J0OiB0aGlzLnNvcnQsXG4gICAgICAgIHNrdXZhbDogdGhpcy5za3V2YWxcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uKSk7XG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgIHRoYXQubGlzdCA9IFsuLi50aGF0Lmxpc3QsIC4uLmpzb24uZGF0YS5kYXRhLnJlY29yZHNdO1xuICAgICAgdGhhdC5wYWdlX3RvdGFsID0ganNvbi5kYXRhLnBhZ2VfdG90YWw7XG4gICAgICBpZiAoanNvbi5kYXRhLnBhZ2VfdG90YWwgPT0gMCkge1xuICAgICAgICAvL+aaguaXoOaVsOaNrlxuICAgICAgICB0aGF0LmlzX2VtcHR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpO1xuICAgIH1cbiAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhhdC4kYXBwbHkoKTtcbiAgfVxuXG4gIG9uTG9hZChvcHRpb24pIHtcbiAgICB0aGlzLmNhdGU9e307XG4gICAgdGhpcy5saXN0ID0gW107XG4gICAgdGhpcy5za3V2YWwgPSBcIlwiO1xuICAgIHRoaXMub3JnQ29kZSA9IG9wdGlvbi5jb2RlO1xuICAgIHRoaXMuaXNfZW1wdHkgPSBmYWxzZTtcbiAgICAvL+W9k+WJjemhtemdolxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xuICAgIC8v5oC76aG15pWwXG4gICAgdGhpcy5wYWdlX3RvdGFsID0gMDtcbiAgICAvL+aYr+WQpuaYvuekuiDlupXpg6hsb2FkaW5nXG4gICAgdGhpcy5zaG93TG9hZGluZyA9IHRydWU7XG4gICAgLy/pmLLmraLph43lpI3liqDovb1cbiAgICB0aGlzLnByZXZlbnRSZXBlYXRSZXVxZXN0ID0gZmFsc2U7XG4gICAgdGhpcy5zb3J0ID0gMTtcbiAgICBjb25zb2xlLmxvZyhcImlkPT09XCIrdGhpcy5jb2RlKTtcbiAgICAvL3RoaXMubGlzdCA9IGJiLnJlc3VsdC5wcm9kdWN0cztcbiAgICAvL3RoaXMuJGFwcGx5KCk7XG4gICAgLy/ojrflj5bmuIXljZXor6bmg4VcbiAgICB0aGlzLmdldE9yZygpO1xuICAgIC8v6I635Y+W5riF5Y2V55So5oi35YiX6KGoXG4gICAgdGhpcy5nZXRPcmdMaXN0KCk7XG4gIH1cbiAgY29tcHV0ZWQgPSB7XG5cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGN1cnJlbnRUeXBlKG9iaikge1xuICAgICAgLy90aXAuc3VjY2VzcyhcIueKtuaAgTpcIiArIG9iaik7XG4gICAgICB2YXIgbmFtZSA9IG9iai5uYW1lO1xuICAgICAgdmFyIHR5cGUgPSBvYmoudHlwZTtcbiAgICAgIGlmIChuYW1lPT1cInpob25naGVcIikge1xuICAgICAgICB0aGlzLnNvcnQgPSAtMTtcbiAgICAgIH0gZWxzZSBpZiAobmFtZT09XCJzYWxlXCIpIHtcbiAgICAgICAgdGhpcy5zb3J0ID0gMztcbiAgICAgIH0gZWxzZSBpZiAobmFtZT09XCJwcmljZVwiKSB7XG4gICAgICAgIGlmICh0eXBlPT1cImRlc2NcIikge1xuICAgICAgICAgIHRoaXMuc29ydCA9IDI7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZT09XCJhc2NcIikge1xuICAgICAgICAgIHRoaXMuc29ydCA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmIChuYW1lID09IFwic2t1XCIpIHtcbiAgICAgICAgdGhpcy5za3V2YWwgPSB0eXBlO1xuICAgICAgfVxuICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgICB0aGlzLnNob3dMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNfZW1wdHkgPSBmYWxzZTtcbiAgICAgIHRoaXMuZ2V0T3JnTGlzdCgpO1xuICAgIH0sXG4gICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogdGhpcy5jYXRlLm5hbWUsXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvaG9tZV9kZXRhaWw/Y29kZT0nK3RoaXMuY2F0Q29kZSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXZlbnRzID0ge1xuXG4gIH1cbiAgLy/liqDovb3mm7TlpJpcbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5zaG93TG9hZGluZyA9IHRydWU7XG4gICAgY29uc29sZS5sb2codGhhdC5wYWdlX3RvdGFsICsgXCI9PT1cIiArIHRoYXQuY3VycmVudFBhZ2UpO1xuICAgIC8v5Yik5pat5oC76aG15pWw5piv5ZCm5aSn5LqO57+76aG15pWwXG4gICAgaWYgKCh0aGF0LnBhZ2VfdG90YWwpID4gdGhhdC5jdXJyZW50UGFnZSkge1xuICAgICAgLy/pmLLmraLph43lpI3liqDovb1cbiAgICAgIGlmICh0aGF0LnByZXZlbnRSZXBlYXRSZXVxZXN0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgdGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCA9IHRydWU7XG4gICAgICB0aGF0LmN1cnJlbnRQYWdlKys7XG4gICAgICB0aGF0LmdldEdvb2RMaXN0KHRoYXQuY3VycmVudFBhZ2UpO1xuICAgICAgdGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuXG4iXX0=