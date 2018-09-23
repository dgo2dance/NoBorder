'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 提示与加载工具类
 */
var Tips = (_temp = _class = function () {
  function Tips() {
    _classCallCheck(this, Tips);
  }

  _createClass(Tips, null, [{
    key: 'success',

    /**
     * 弹出提示框
     */

    value: function success(title) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

      wx.showToast({
        title: title,
        icon: 'success',
        mask: true,
        duration: duration
      });
      if (duration > 0) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, duration);
        });
      }
    }

    /**
     * 弹出确认窗口
     */

  }, {
    key: 'modal',
    value: function modal(text) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '提示';

      return new Promise(function (resolve, reject) {
        wx.showModal({
          title: title,
          content: text,
          showCancel: false,
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(res) {
            reject(res);
          }
        });
      });
    }

    /**
     * 弹出确认窗口
     */

  }, {
    key: 'confirm',
    value: function confirm(text) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '提示';

      return new Promise(function (resolve, reject) {
        wx.showModal({
          title: title,
          content: text,
          showCancel: true,
          success: function success(res) {
            if (res.confirm) {
              resolve(payload);
            } else if (res.cancel) {
              reject(payload);
            }
          },
          fail: function fail(res) {
            reject(payload);
          }
        });
      });
    }
  }, {
    key: 'toast',
    value: function toast(title, onHide) {
      var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'success';

      wx.showToast({
        title: title,
        icon: icon,
        mask: true,
        duration: 500
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    /**
     * 警告框
     */

  }, {
    key: 'alert',
    value: function alert(title) {
      wx.showToast({
        title: title,
        image: '/images/icons/alert.png',
        mask: true,
        duration: 500
      });
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve();
        }, 500);
      });
    }
    /**
     * 错误框
     */

  }, {
    key: 'error',
    value: function error(title, onHide) {
      wx.showToast({
        title: title,
        image: '/images/icons/error.png',
        mask: true,
        duration: 500
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    /**
     * 弹出加载提示
     */

  }, {
    key: 'loading',
    value: function loading() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中';
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.isLoading && !force) {
        return;
      }
      this.isLoading = true;
      if (wx.showLoading) {
        wx.showLoading({
          title: title,
          mask: true
        });
      } else {
        wx.showNavigationBarLoading();
      }
    }

    /**
     * 加载完毕
     */

  }, {
    key: 'loaded',
    value: function loaded() {
      if (this.isLoading) {
        this.isLoading = false;
        if (wx.hideLoading) {
          wx.hideLoading();
        } else {
          wx.hideNavigationBarLoading();
        }
      }
    }

    /**
     * 弹出下拉动作栏
     */

  }, {
    key: 'action',
    value: function action() {
      for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
        items[_key] = arguments[_key];
      }

      return new Promise(function (resolve, reject) {
        wx.showActionSheet({
          itemList: items,
          success: function success(res) {
            var result = {
              index: res.tapIndex,
              text: items[res.tapIndex]
            };
            resolve(result);
          },
          fail: function fail(res) {
            reject(res.errMsg);
          }
        });
      });
    }
  }, {
    key: 'actionWithFunc',
    value: function actionWithFunc(items) {
      for (var _len2 = arguments.length, functions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        functions[_key2 - 1] = arguments[_key2];
      }

      wx.showActionSheet({
        itemList: items,
        success: function success(res) {
          var index = res.tapIndex;
          if (index >= 0 && index < functions.length) {
            functions[index]();
          }
        }
      });
    }
  }, {
    key: 'share',
    value: function share(title, url, desc) {
      return {
        title: title,
        path: url,
        desc: desc,
        success: function success(res) {
          Tips.toast('分享成功');
        }
      };
    }
  }, {
    key: 'setLoading',
    value: function setLoading() {
      this.isLoading = true;
    }
  }]);

  return Tips;
}(), _class.isLoading = false, _class.pause = false, _temp);
exports.default = Tips;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpcHMuanMiXSwibmFtZXMiOlsiVGlwcyIsInRpdGxlIiwiZHVyYXRpb24iLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJtYXNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwidGV4dCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJwYXlsb2FkIiwiY29uZmlybSIsImNhbmNlbCIsIm9uSGlkZSIsImltYWdlIiwiZm9yY2UiLCJpc0xvYWRpbmciLCJzaG93TG9hZGluZyIsInNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZyIsImhpZGVMb2FkaW5nIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwiaXRlbXMiLCJzaG93QWN0aW9uU2hlZXQiLCJpdGVtTGlzdCIsInJlc3VsdCIsImluZGV4IiwidGFwSW5kZXgiLCJlcnJNc2ciLCJmdW5jdGlvbnMiLCJsZW5ndGgiLCJ1cmwiLCJkZXNjIiwicGF0aCIsInRvYXN0IiwicGF1c2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7SUFHcUJBLEk7Ozs7Ozs7O0FBR25COzs7OzRCQUllQyxLLEVBQXVCO0FBQUEsVUFBaEJDLFFBQWdCLHVFQUFMLEdBQUs7O0FBQ3BDQyxTQUFHQyxTQUFILENBQWE7QUFDWEgsZUFBT0EsS0FESTtBQUVYSSxjQUFNLFNBRks7QUFHWEMsY0FBTSxJQUhLO0FBSVhKLGtCQUFVQTtBQUpDLE9BQWI7QUFNQSxVQUFJQSxXQUFXLENBQWYsRUFBa0I7QUFDaEIsZUFBTyxJQUFJSyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxxQkFBVyxZQUFNO0FBQ2ZGO0FBQ0QsV0FGRCxFQUVHTixRQUZIO0FBR0QsU0FKTSxDQUFQO0FBS0Q7QUFDRjs7QUFFRDs7Ozs7OzBCQUdjUyxJLEVBQW9CO0FBQUEsVUFBZFYsS0FBYyx1RUFBTixJQUFNOztBQUNoQyxhQUFP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RDs7OztZQWhNTUEsUyxHQUFZLEssU0FDWmtCLEssR0FBUSxLO2tCQUZJMUMsSSIsImZpbGUiOiJUaXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDmj5DnpLrkuI7liqDovb3lt6XlhbfnsbtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlwcyB7XG4gIHN0YXRpYyBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgc3RhdGljIHBhdXNlID0gZmFsc2U7XG4gIC8qKlxuICAgKiDlvLnlh7rmj5DnpLrmoYZcbiAgICovXG5cbiAgc3RhdGljIHN1Y2Nlc3ModGl0bGUsIGR1cmF0aW9uID0gNTAwKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgIG1hc2s6IHRydWUsXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICB9KVxuICAgIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOW8ueWHuuehruiupOeql+WPo1xuICAgKi9cbiAgc3RhdGljIG1vZGFsICh0ZXh0LCB0aXRsZSA9ICfmj5DnpLonKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgY29udGVudDogdGV4dCxcbiAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IHJlcyA9PiB7XG4gICAgICAgICAgcmVqZWN0KHJlcyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiDlvLnlh7rnoa7orqTnqpflj6NcbiAgICovXG4gIHN0YXRpYyBjb25maXJtICh0ZXh0LCBwYXlsb2FkID0ge30sIHRpdGxlID0gJ+aPkOekuicpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBjb250ZW50OiB0ZXh0LFxuICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLFxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgcmVzb2x2ZShwYXlsb2FkKVxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xuICAgICAgICAgICAgcmVqZWN0KHBheWxvYWQpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiByZXMgPT4ge1xuICAgICAgICAgIHJlamVjdChwYXlsb2FkKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgdG9hc3QgKHRpdGxlLCBvbkhpZGUsIGljb24gPSAnc3VjY2VzcycpIHtcbiAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgaWNvbjogaWNvbixcbiAgICAgIG1hc2s6IHRydWUsXG4gICAgICBkdXJhdGlvbjogNTAwXG4gICAgfSlcbiAgICAvLyDpmpDol4/nu5PmnZ/lm57osINcbiAgICBpZiAob25IaWRlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb25IaWRlKClcbiAgICAgIH0sIDUwMClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6K2m5ZGK5qGGXG4gICAqL1xuICBzdGF0aWMgYWxlcnQgKHRpdGxlKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9pY29ucy9hbGVydC5wbmcnLFxuICAgICAgbWFzazogdHJ1ZSxcbiAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIOmUmeivr+ahhlxuICAgKi9cblxuICBzdGF0aWMgZXJyb3IgKHRpdGxlLCBvbkhpZGUpIHtcbiAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2ljb25zL2Vycm9yLnBuZycsXG4gICAgICBtYXNrOiB0cnVlLFxuICAgICAgZHVyYXRpb246IDUwMFxuICAgIH0pO1xuICAgIC8vIOmakOiXj+e7k+adn+Wbnuiwg1xuICAgIGlmIChvbkhpZGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvbkhpZGUoKVxuICAgICAgfSwgNTAwKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDlvLnlh7rliqDovb3mj5DnpLpcbiAgICovXG4gIHN0YXRpYyBsb2FkaW5nICh0aXRsZSA9ICfliqDovb3kuK0nLCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuaXNMb2FkaW5nICYmICFmb3JjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgaWYgKHd4LnNob3dMb2FkaW5nKSB7XG4gICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgbWFzazogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHd4LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDliqDovb3lrozmr5VcbiAgICovXG4gIHN0YXRpYyBsb2FkZWQgKCkge1xuICAgIGlmICh0aGlzLmlzTG9hZGluZykge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIGlmICh3eC5oaWRlTG9hZGluZykge1xuICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOW8ueWHuuS4i+aLieWKqOS9nOagj1xuICAgKi9cbiAgc3RhdGljIGFjdGlvbiAoLi4uaXRlbXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3guc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgaXRlbUxpc3Q6IGl0ZW1zLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgaW5kZXg6IHJlcy50YXBJbmRleCxcbiAgICAgICAgICAgIHRleHQ6IGl0ZW1zW3Jlcy50YXBJbmRleF1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICByZWplY3QocmVzLmVyck1zZylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGFjdGlvbldpdGhGdW5jIChpdGVtcywgLi4uZnVuY3Rpb25zKSB7XG4gICAgd3guc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgIGl0ZW1MaXN0OiBpdGVtcyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSByZXMudGFwSW5kZXhcbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBmdW5jdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgZnVuY3Rpb25zW2luZGV4XSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHNoYXJlICh0aXRsZSwgdXJsLCBkZXNjKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHBhdGg6IHVybCxcbiAgICAgIGRlc2M6IGRlc2MsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIFRpcHMudG9hc3QoJ+WIhuS6q+aIkOWKnycpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNldExvYWRpbmcgKCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgfVxufVxuIl19