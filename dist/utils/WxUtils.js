'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Tips = require('./Tips.js');

var _Tips2 = _interopRequireDefault(_Tips);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WxUtils = function () {
  function WxUtils() {
    _classCallCheck(this, WxUtils);
  }

  _createClass(WxUtils, null, [{
    key: 'backOrRedirect',


    /**
     * 如果能够后退（多层），则navigaetBack，否则调用redirectTo
     */
    value: function backOrRedirect(url) {
      var pages = getCurrentPages();
      // route在低版本不兼容
      var index = pages.findIndex(function (item) {
        return '/' + item.__route__ == url;
      });
      if (pages.length < 2 || index < 0) {
        wx.redirectTo({
          url: url
        });
      } else {
        var delta = pages.length - 1 - index;
        wx.navigateBack({
          delta: delta
        });
      }
    }
    /**
     * 如果能够后退（多层），则navigaetBack，否则调用navigateTo
     */

  }, {
    key: 'backOrNavigate',
    value: function backOrNavigate(url) {
      var pages = getCurrentPages();
      // route在低版本不兼容
      var index = pages.findIndex(function (item) {
        return '/' + item.__route__ == url;
      });
      if (pages.length < 2 || index < 0) {
        wx.navigateTo({
          url: url
        });
      } else {
        var delta = pages.length - 1 - index;
        wx.navigateBack({
          delta: delta
        });
      }
    }

    /**
     * 选择图标（最大大小限制）
     */

  }, {
    key: 'chooseImage',
    value: function chooseImage(param, maxSize) {
      var _this = this;

      _Tips2.default.loading();
      return _wepy2.default.chooseImage(param).then(function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
          var tempFilePaths = _ref2.tempFilePaths,
              tempFiles = _ref2.tempFiles;
          var removeIndex, posStr;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(tempFiles && maxSize)) {
                    _context.next = 8;
                    break;
                  }

                  removeIndex = [];

                  tempFiles.forEach(function (file, index) {
                    var limit = maxSize * 1024 * 1024;
                    if (file.size > limit) {
                      removeIndex.push(index);
                    }
                  });
                  posStr = removeIndex.map(function (v) {
                    return v + 1;
                  }).join(',');

                  if (!(removeIndex.length > 0)) {
                    _context.next = 8;
                    break;
                  }

                  removeIndex.forEach(function (i) {
                    return tempFilePaths.splice(i, 1);
                  });
                  _context.next = 8;
                  return _Tips2.default.alert('\u7B2C' + posStr + '\u5F20\u56FE\u8D85\u8FC7' + maxSize + 'M');

                case 8:
                  _Tips2.default.loaded();
                  return _context.abrupt('return', tempFilePaths);

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()).catch(function () {
        _Tips2.default.loaded();
        return [];
      });
    }

    /**
     * 兼容性判断
     */

  }, {
    key: 'canIUse',
    value: function canIUse(str) {
      if (wx.canIUse) {
        return wx.canIUse(str);
      } else {
        return false;
      }
    }
    /**
     * 检查SDK版本
     */

  }, {
    key: 'isSDKExipred',
    value: function isSDKExipred() {
      var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
          SDKVersion = _wx$getSystemInfoSync.SDKVersion;

      console.info('[version]sdk ' + SDKVersion);
      return SDKVersion == null || SDKVersion < '1.2.0';
    }
    /**
     * 检查SDK版本
     */

  }, {
    key: 'checkSDK',
    value: function checkSDK() {
      if (this.isSDKExipred()) {
        _Tips2.default.modal('您的微信版本太低，为确保正常使用，请尽快升级');
      }
    }
  }]);

  return WxUtils;
}();

exports.default = WxUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIld4VXRpbHMuanMiXSwibmFtZXMiOlsiV3hVdGlscyIsInVybCIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiX19yb3V0ZV9fIiwibGVuZ3RoIiwid3giLCJyZWRpcmVjdFRvIiwiZGVsdGEiLCJuYXZpZ2F0ZUJhY2siLCJuYXZpZ2F0ZVRvIiwicGFyYW0iLCJtYXhTaXplIiwibG9hZGluZyIsImNob29zZUltYWdlIiwidGhlbiIsInRlbXBGaWxlUGF0aHMiLCJ0ZW1wRmlsZXMiLCJyZW1vdmVJbmRleCIsImZvckVhY2giLCJmaWxlIiwibGltaXQiLCJzaXplIiwicHVzaCIsInBvc1N0ciIsIm1hcCIsInYiLCJqb2luIiwic3BsaWNlIiwiaSIsImFsZXJ0IiwibG9hZGVkIiwiY2F0Y2giLCJzdHIiLCJjYW5JVXNlIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJTREtWZXJzaW9uIiwiY29uc29sZSIsImluZm8iLCJpc1NES0V4aXByZWQiLCJtb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7O0FBRW5COzs7bUNBR3NCQyxHLEVBQUs7QUFDekIsVUFBTUMsUUFBUUMsaUJBQWQ7QUFDQTtBQUNBLFVBQU1DLFFBQVFGLE1BQU1HLFNBQU4sQ0FBZ0I7QUFBQSxlQUFTLE1BQU1DLEtBQUtDLFNBQVosSUFBMEJOLEdBQWxDO0FBQUEsT0FBaEIsQ0FBZDtBQUNBLFVBQUlDLE1BQU1NLE1BQU4sR0FBZSxDQUFmLElBQW9CSixRQUFRLENBQWhDLEVBQW1DO0FBQ2pDSyxXQUFHQyxVQUFILENBQWM7QUFDWlQsZUFBS0E7QUFETyxTQUFkO0FBR0QsT0FKRCxNQUlPO0FBQ0wsWUFBTVUsUUFBUVQsTUFBTU0sTUFBTixHQUFlLENBQWYsR0FBbUJKLEtBQWpDO0FBQ0FLLFdBQUdHLFlBQUgsQ0FBZ0I7QUFDZEQsaUJBQU9BO0FBRE8sU0FBaEI7QUFHRDtBQUNGO0FBQ0Q7Ozs7OzttQ0FHc0JWLEcsRUFBSztBQUN6QixVQUFNQyxRQUFRQyxpQkFBZDtBQUNBO0FBQ0EsVUFBTUMsUUFBUUYsTUFBTUcsU0FBTixDQUFnQjtBQUFBLGVBQVMsTUFBTUMsS0FBS0MsU0FBWixJQUEwQk4sR0FBbEM7QUFBQSxPQUFoQixDQUFkO0FBQ0EsVUFBSUMsTUFBTU0sTUFBTixHQUFlLENBQWYsSUFBb0JKLFFBQVEsQ0FBaEMsRUFBbUM7QUFDakNLLFdBQUdJLFVBQUgsQ0FBYztBQUNaWixlQUFLQTtBQURPLFNBQWQ7QUFHRCxPQUpELE1BSU87QUFDTCxZQUFNVSxRQUFRVCxNQUFNTSxNQUFOLEdBQWUsQ0FBZixHQUFtQkosS0FBakM7QUFDQUssV0FBR0csWUFBSCxDQUFnQjtBQUNkRCxpQkFBT0E7QUFETyxTQUFoQjtBQUdEO0FBQ0Y7O0FBRUQ7Ozs7OztnQ0FHbUJHLEssRUFBT0MsTyxFQUFTO0FBQUE7O0FBQ2pDLHFCQUFLQyxPQUFMO0FBQ0EsYUFBTyxlQUFLQyxXQUFMLENBQWlCSCxLQUFqQixFQUF3QkksSUFBeEI7QUFBQSwyRUFBNkI7QUFBQSxjQUFRQyxhQUFSLFNBQVFBLGFBQVI7QUFBQSxjQUF1QkMsU0FBdkIsU0FBdUJBLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUM5QkEsYUFBYUwsT0FEaUI7QUFBQTtBQUFBO0FBQUE7O0FBRTFCTSw2QkFGMEIsR0FFWixFQUZZOztBQUdoQ0QsNEJBQVVFLE9BQVYsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPbkIsS0FBUCxFQUFpQjtBQUNqQyx3QkFBTW9CLFFBQVFULFVBQVUsSUFBVixHQUFpQixJQUEvQjtBQUNBLHdCQUFJUSxLQUFLRSxJQUFMLEdBQVlELEtBQWhCLEVBQXVCO0FBQ3JCSCxrQ0FBWUssSUFBWixDQUFpQnRCLEtBQWpCO0FBQ0Q7QUFDRixtQkFMRDtBQU1NdUIsd0JBVDBCLEdBU2pCTixZQUFZTyxHQUFaLENBQWdCO0FBQUEsMkJBQUtDLElBQUksQ0FBVDtBQUFBLG1CQUFoQixFQUE0QkMsSUFBNUIsQ0FBaUMsR0FBakMsQ0FUaUI7O0FBQUEsd0JBVTVCVCxZQUFZYixNQUFaLEdBQXFCLENBVk87QUFBQTtBQUFBO0FBQUE7O0FBVzlCYSw4QkFBWUMsT0FBWixDQUFvQjtBQUFBLDJCQUFLSCxjQUFjWSxNQUFkLENBQXFCQyxDQUFyQixFQUF3QixDQUF4QixDQUFMO0FBQUEsbUJBQXBCO0FBWDhCO0FBQUEseUJBWXhCLGVBQUtDLEtBQUwsWUFBZU4sTUFBZixnQ0FBNEJaLE9BQTVCLE9BWndCOztBQUFBO0FBZWxDLGlDQUFLbUIsTUFBTDtBQWZrQyxtREFnQjNCZixhQWhCMkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBN0I7O0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FpQkpnQixLQWpCSSxDQWlCRSxZQUFNO0FBQ2IsdUJBQUtELE1BQUw7QUFDQSxlQUFPLEVBQVA7QUFDRCxPQXBCTSxDQUFQO0FBcUJEOztBQUVEOzs7Ozs7NEJBR2VFLEcsRUFBSztBQUNsQixVQUFJM0IsR0FBRzRCLE9BQVAsRUFBZ0I7QUFDZCxlQUFPNUIsR0FBRzRCLE9BQUgsQ0FBV0QsR0FBWCxDQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBTyxLQUFQO0FBQ0Q7QUFDRjtBQUNEOzs7Ozs7bUNBR3NCO0FBQUEsa0NBQ0MzQixHQUFHNkIsaUJBQUgsRUFERDtBQUFBLFVBQ2JDLFVBRGEseUJBQ2JBLFVBRGE7O0FBRXBCQyxjQUFRQyxJQUFSLG1CQUE2QkYsVUFBN0I7QUFDQSxhQUFPQSxjQUFjLElBQWQsSUFBc0JBLGFBQWEsT0FBMUM7QUFDRDtBQUNEOzs7Ozs7K0JBR2tCO0FBQ2hCLFVBQUksS0FBS0csWUFBTCxFQUFKLEVBQXlCO0FBQ3ZCLHVCQUFLQyxLQUFMLENBQVcsd0JBQVg7QUFDRDtBQUNGOzs7Ozs7a0JBNUZrQjNDLE8iLCJmaWxlIjoiV3hVdGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaXBzIGZyb20gJy4vVGlwcyc7XG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3hVdGlscyB7XG5cbiAgLyoqXG4gICAqIOWmguaenOiDveWkn+WQjumAgO+8iOWkmuWxgu+8ie+8jOWImW5hdmlnYWV0QmFja++8jOWQpuWImeiwg+eUqHJlZGlyZWN0VG9cbiAgICovXG4gIHN0YXRpYyBiYWNrT3JSZWRpcmVjdCh1cmwpIHtcbiAgICBjb25zdCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgIC8vIHJvdXRl5Zyo5L2O54mI5pys5LiN5YW85a65XG4gICAgY29uc3QgaW5kZXggPSBwYWdlcy5maW5kSW5kZXgoaXRlbSA9PiAoJy8nICsgaXRlbS5fX3JvdXRlX18pID09IHVybCk7XG4gICAgaWYgKHBhZ2VzLmxlbmd0aCA8IDIgfHwgaW5kZXggPCAwKSB7XG4gICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgdXJsOiB1cmxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWx0YSA9IHBhZ2VzLmxlbmd0aCAtIDEgLSBpbmRleDtcbiAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgIGRlbHRhOiBkZWx0YVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiDlpoLmnpzog73lpJ/lkI7pgIDvvIjlpJrlsYLvvInvvIzliJluYXZpZ2FldEJhY2vvvIzlkKbliJnosIPnlKhuYXZpZ2F0ZVRvXG4gICAqL1xuICBzdGF0aWMgYmFja09yTmF2aWdhdGUodXJsKSB7XG4gICAgY29uc3QgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAvLyByb3V0ZeWcqOS9jueJiOacrOS4jeWFvOWuuVxuICAgIGNvbnN0IGluZGV4ID0gcGFnZXMuZmluZEluZGV4KGl0ZW0gPT4gKCcvJyArIGl0ZW0uX19yb3V0ZV9fKSA9PSB1cmwpO1xuICAgIGlmIChwYWdlcy5sZW5ndGggPCAyIHx8IGluZGV4IDwgMCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogdXJsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGVsdGEgPSBwYWdlcy5sZW5ndGggLSAxIC0gaW5kZXg7XG4gICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICBkZWx0YTogZGVsdGFcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDpgInmi6nlm77moIfvvIjmnIDlpKflpKflsI/pmZDliLbvvIlcbiAgICovXG4gIHN0YXRpYyBjaG9vc2VJbWFnZShwYXJhbSwgbWF4U2l6ZSkge1xuICAgIFRpcHMubG9hZGluZygpO1xuICAgIHJldHVybiB3ZXB5LmNob29zZUltYWdlKHBhcmFtKS50aGVuKGFzeW5jICh7dGVtcEZpbGVQYXRocywgdGVtcEZpbGVzfSkgPT4ge1xuICAgICAgaWYgKHRlbXBGaWxlcyAmJiBtYXhTaXplKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ID0gW107XG4gICAgICAgIHRlbXBGaWxlcy5mb3JFYWNoKChmaWxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxpbWl0ID0gbWF4U2l6ZSAqIDEwMjQgKiAxMDI0O1xuICAgICAgICAgIGlmIChmaWxlLnNpemUgPiBsaW1pdCkge1xuICAgICAgICAgICAgcmVtb3ZlSW5kZXgucHVzaChpbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcG9zU3RyID0gcmVtb3ZlSW5kZXgubWFwKHYgPT4gdiArIDEpLmpvaW4oJywnKTtcbiAgICAgICAgaWYgKHJlbW92ZUluZGV4Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZW1vdmVJbmRleC5mb3JFYWNoKGkgPT4gdGVtcEZpbGVQYXRocy5zcGxpY2UoaSwgMSkpO1xuICAgICAgICAgIGF3YWl0IFRpcHMuYWxlcnQoYOesrCR7cG9zU3RyfeW8oOWbvui2hei/hyR7bWF4U2l6ZX1NYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFRpcHMubG9hZGVkKCk7XG4gICAgICByZXR1cm4gdGVtcEZpbGVQYXRocztcbiAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICBUaXBzLmxvYWRlZCgpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOWFvOWuueaAp+WIpOaWrVxuICAgKi9cbiAgc3RhdGljIGNhbklVc2Uoc3RyKSB7XG4gICAgaWYgKHd4LmNhbklVc2UpIHtcbiAgICAgIHJldHVybiB3eC5jYW5JVXNlKHN0cik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIOajgOafpVNES+eJiOacrFxuICAgKi9cbiAgc3RhdGljIGlzU0RLRXhpcHJlZCgpIHtcbiAgICBjb25zdCB7U0RLVmVyc2lvbn0gPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xuICAgIGNvbnNvbGUuaW5mbyhgW3ZlcnNpb25dc2RrICR7U0RLVmVyc2lvbn1gKTtcbiAgICByZXR1cm4gU0RLVmVyc2lvbiA9PSBudWxsIHx8IFNES1ZlcnNpb24gPCAnMS4yLjAnXG4gIH1cbiAgLyoqXG4gICAqIOajgOafpVNES+eJiOacrFxuICAgKi9cbiAgc3RhdGljIGNoZWNrU0RLKCkge1xuICAgIGlmICh0aGlzLmlzU0RLRXhpcHJlZCgpKSB7XG4gICAgICBUaXBzLm1vZGFsKCfmgqjnmoTlvq7kv6HniYjmnKzlpKrkvY7vvIzkuLrnoa7kv53mraPluLjkvb/nlKjvvIzor7flsL3lv6vljYfnuqcnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==