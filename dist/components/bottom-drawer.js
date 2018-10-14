'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Flash = function (_wepy$component) {
  _inherits(Flash, _wepy$component);

  function Flash() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Flash);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Flash.__proto__ || Object.getPrototypeOf(Flash)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      items: {
        type: Object,
        default: [{ name: '1', value: '1' }]
      }
    }, _this.data = {
      isOpen: false,
      cancelText: '取消'
    }, _this.methods = {
      showDrawer: function showDrawer() {
        this.isOpen = true;
        this.$apply();
      },
      hideDrawer: function hideDrawer() {
        this.isOpen = false;
        this.$apply();
      },
      handleItemTap: function handleItemTap(_ref2) {
        var target = _ref2.target;

        this.$emit('itemtap', target.id);
      },
      handleTapSheet: function handleTapSheet(e) {
        var isTarget = e.target.id === 'sheetmask';
        if (isTarget) {
          this.isOpen = false;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Flash, [{
    key: 'onLoad',
    value: function onLoad() {
      // if (wepy.T.locale === 'en') {
      //   this.cancelText = 'cancel'
      // }
    }
  }]);

  return Flash;
}(_wepy2.default.component);

exports.default = Flash;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdHRvbS1kcmF3ZXIuanMiXSwibmFtZXMiOlsiRmxhc2giLCJwcm9wcyIsIml0ZW1zIiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJuYW1lIiwidmFsdWUiLCJkYXRhIiwiaXNPcGVuIiwiY2FuY2VsVGV4dCIsIm1ldGhvZHMiLCJzaG93RHJhd2VyIiwiJGFwcGx5IiwiaGlkZURyYXdlciIsImhhbmRsZUl0ZW1UYXAiLCJ0YXJnZXQiLCIkZW1pdCIsImlkIiwiaGFuZGxlVGFwU2hlZXQiLCJlIiwiaXNUYXJnZXQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU87QUFDTEMsY0FBTUMsTUFERDtBQUVMQyxpQkFBUyxDQUFDLEVBQUNDLE1BQU0sR0FBUCxFQUFZQyxPQUFPLEdBQW5CLEVBQUQ7QUFGSjtBQURELEssUUFPUkMsSSxHQUFPO0FBQ0xDLGNBQVEsS0FESDtBQUVMQyxrQkFBWTtBQUZQLEssUUFLUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHdCQUNNO0FBQ1osYUFBS0gsTUFBTCxHQUFjLElBQWQ7QUFDQSxhQUFLSSxNQUFMO0FBQ0QsT0FKTztBQUtSQyxnQkFMUSx3QkFLTTtBQUNaLGFBQUtMLE1BQUwsR0FBYyxLQUFkO0FBQ0EsYUFBS0ksTUFBTDtBQUNELE9BUk87QUFTUkUsbUJBVFEsZ0NBU2lCO0FBQUEsWUFBVEMsTUFBUyxTQUFUQSxNQUFTOztBQUN2QixhQUFLQyxLQUFMLENBQVcsU0FBWCxFQUFzQkQsT0FBT0UsRUFBN0I7QUFDRCxPQVhPO0FBWVJDLG9CQVpRLDBCQVlRQyxDQVpSLEVBWVc7QUFDakIsWUFBTUMsV0FBV0QsRUFBRUosTUFBRixDQUFTRSxFQUFULEtBQWdCLFdBQWpDO0FBQ0EsWUFBSUcsUUFBSixFQUFjO0FBQ1osZUFBS1osTUFBTCxHQUFjLEtBQWQ7QUFDRDtBQUNGO0FBakJPLEs7Ozs7OzZCQW9CQTtBQUNSO0FBQ0E7QUFDQTtBQUNEOzs7O0VBckNnQyxlQUFLYSxTOztrQkFBbkJ0QixLIiwiZmlsZSI6ImJvdHRvbS1kcmF3ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxhc2ggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBpdGVtczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IFt7bmFtZTogJzEnLCB2YWx1ZTogJzEnfV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIGNhbmNlbFRleHQ6ICflj5bmtognXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dEcmF3ZXIgKCkge1xuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWVcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIGhpZGVEcmF3ZXIgKCkge1xuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBoYW5kbGVJdGVtVGFwICh7dGFyZ2V0fSkge1xuICAgICAgICB0aGlzLiRlbWl0KCdpdGVtdGFwJywgdGFyZ2V0LmlkKVxuICAgICAgfSxcbiAgICAgIGhhbmRsZVRhcFNoZWV0IChlKSB7XG4gICAgICAgIGNvbnN0IGlzVGFyZ2V0ID0gZS50YXJnZXQuaWQgPT09ICdzaGVldG1hc2snXG4gICAgICAgIGlmIChpc1RhcmdldCkge1xuICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAvLyBpZiAod2VweS5ULmxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgLy8gICB0aGlzLmNhbmNlbFRleHQgPSAnY2FuY2VsJ1xuICAgICAgLy8gfVxuICAgIH1cbiAgfVxuIl19