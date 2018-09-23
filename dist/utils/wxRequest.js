'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _util = require('./util.js');

var _util2 = _interopRequireDefault(_util);

var _md = require('./md5.js');

var _md2 = _interopRequireDefault(_md);

var _tip = require('./tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var API_SECRET_KEY = 'www.mall.cycle.com';
var TIMESTAMP = _util2.default.getCurrentTime();
var SIGN = _md2.default.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase());

var wxRequest = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var url = arguments[1];
        var data, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _tip2.default.loading();
                        data = params.query || {};

                        data.sign = SIGN;
                        data.time = TIMESTAMP;
                        console.log("data" + JSON.stringify(data));
                        console.log("url:" + url);

                        _context.next = 8;
                        return _wepy2.default.request({
                            url: url,
                            method: params.method || 'GET',
                            data: data,
                            //  header: { 'Content-Type': 'application/json' },
                            header: { 'Content-Type': 'application/x-www-form-urlencoded' }
                        });

                    case 8:
                        res = _context.sent;

                        _tip2.default.loaded();
                        return _context.abrupt('return', res);

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function wxRequest() {
        return _ref.apply(this, arguments);
    };
}();

var wxUpload = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params, url) {
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _tip2.default.loading();
                        console.log("wxupload---" + params);
                        //   let data = params.query || {};
                        // data.sign = SIGN;
                        // data.time = TIMESTAMP;
                        // console.log("data---wxUpload"+JSON.stringify(data));
                        console.log("url---wxUpload:" + url);

                        _context2.next = 5;
                        return _wepy2.default.uploadFile({
                            url: url,
                            filePath: params,
                            name: 'image',
                            method: 'POST',
                            header: { "Content-Type": "multipart/form-data" }

                        });

                    case 5:
                        res = _context2.sent;

                        _tip2.default.loaded();
                        return _context2.abrupt('return', res);

                    case 8:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function wxUpload(_x2, _x3) {
        return _ref2.apply(this, arguments);
    };
}();

module.exports = {
    wxRequest: wxRequest,
    wxUpload: wxUpload
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJBUElfU0VDUkVUX0tFWSIsIlRJTUVTVEFNUCIsImdldEN1cnJlbnRUaW1lIiwiU0lHTiIsImhleF9tZDUiLCJ0b0xvd2VyQ2FzZSIsInd4UmVxdWVzdCIsInBhcmFtcyIsInVybCIsImxvYWRpbmciLCJkYXRhIiwicXVlcnkiLCJzaWduIiwidGltZSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwicmVxdWVzdCIsIm1ldGhvZCIsImhlYWRlciIsInJlcyIsImxvYWRlZCIsInd4VXBsb2FkIiwidXBsb2FkRmlsZSIsImZpbGVQYXRoIiwibmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLG9CQUF2QjtBQUNBLElBQU1DLFlBQVksZUFBS0MsY0FBTCxFQUFsQjtBQUNBLElBQU1DLE9BQU8sYUFBSUMsT0FBSixDQUFZLENBQUNILFlBQVlELGNBQWIsRUFBNkJLLFdBQTdCLEVBQVosQ0FBYjs7QUFFQSxJQUFNQztBQUFBLHVFQUFZO0FBQUEsWUFBTUMsTUFBTix1RUFBZSxFQUFmO0FBQUEsWUFBbUJDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkLHNDQUFJQyxPQUFKO0FBQ0lDLDRCQUZVLEdBRUhILE9BQU9JLEtBQVAsSUFBZ0IsRUFGYjs7QUFHZEQsNkJBQUtFLElBQUwsR0FBWVQsSUFBWjtBQUNBTyw2QkFBS0csSUFBTCxHQUFZWixTQUFaO0FBQ0FhLGdDQUFRQyxHQUFSLENBQVksU0FBT0MsS0FBS0MsU0FBTCxDQUFlUCxJQUFmLENBQW5CO0FBQ0FJLGdDQUFRQyxHQUFSLENBQVksU0FBT1AsR0FBbkI7O0FBTmM7QUFBQSwrQkFRRSxlQUFLVSxPQUFMLENBQWE7QUFDekJWLGlDQUFLQSxHQURvQjtBQUV6Qlcsb0NBQVFaLE9BQU9ZLE1BQVAsSUFBaUIsS0FGQTtBQUd6QlQsa0NBQU1BLElBSG1CO0FBSTNCO0FBQ0dVLG9DQUFRLEVBQUUsZ0JBQWdCLG1DQUFsQjtBQUxnQix5QkFBYixDQVJGOztBQUFBO0FBUVZDLDJCQVJVOztBQWVkLHNDQUFJQyxNQUFKO0FBZmMseURBZ0JQRCxHQWhCTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O0FBbUJBLElBQU1FO0FBQUEsd0VBQVcsa0JBQU1oQixNQUFOLEVBQWFDLEdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2Isc0NBQUlDLE9BQUo7QUFDQUssZ0NBQVFDLEdBQVIsQ0FBWSxnQkFBY1IsTUFBMUI7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBTyxnQ0FBUUMsR0FBUixDQUFZLG9CQUFrQlAsR0FBOUI7O0FBUGE7QUFBQSwrQkFTRyxlQUFLZ0IsVUFBTCxDQUFnQjtBQUM1QmhCLGlDQUFLQSxHQUR1QjtBQUU1QmlCLHNDQUFVbEIsTUFGa0I7QUFHNUJtQixrQ0FBTSxPQUhzQjtBQUk1QlAsb0NBQVEsTUFKb0I7QUFLNUJDLG9DQUFRLEVBQUUsZ0JBQWdCLHFCQUFsQjs7QUFMb0IseUJBQWhCLENBVEg7O0FBQUE7QUFTVEMsMkJBVFM7O0FBaUJiLHNDQUFJQyxNQUFKO0FBakJhLDBEQWtCTkQsR0FsQk07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQXlCQU0sT0FBT0MsT0FBUCxHQUFpQjtBQUNidEIsd0JBRGE7QUFFYmlCO0FBRmEsQ0FBakIiLCJmaWxlIjoid3hSZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IG1kNSBmcm9tICcuL21kNSc7XG5pbXBvcnQgdGlwIGZyb20gJy4vdGlwJ1xuXG5jb25zdCBBUElfU0VDUkVUX0tFWSA9ICd3d3cubWFsbC5jeWNsZS5jb20nXG5jb25zdCBUSU1FU1RBTVAgPSB1dGlsLmdldEN1cnJlbnRUaW1lKClcbmNvbnN0IFNJR04gPSBtZDUuaGV4X21kNSgoVElNRVNUQU1QICsgQVBJX1NFQ1JFVF9LRVkpLnRvTG93ZXJDYXNlKCkpXG5cbmNvbnN0IHd4UmVxdWVzdCA9IGFzeW5jKHBhcmFtcyA9IHt9LCB1cmwpID0+IHtcbiAgICB0aXAubG9hZGluZygpO1xuICAgIGxldCBkYXRhID0gcGFyYW1zLnF1ZXJ5IHx8IHt9O1xuICAgIGRhdGEuc2lnbiA9IFNJR047XG4gICAgZGF0YS50aW1lID0gVElNRVNUQU1QO1xuICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiK0pTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICBjb25zb2xlLmxvZyhcInVybDpcIit1cmwpO1xuXG4gICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBtZXRob2Q6IHBhcmFtcy5tZXRob2QgfHwgJ0dFVCcsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAvLyAgaGVhZGVyOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgIGhlYWRlcjogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSwgXG4gICAgfSk7XG4gICAgdGlwLmxvYWRlZCgpO1xuICAgIHJldHVybiByZXM7XG59O1xuXG5jb25zdCB3eFVwbG9hZCA9IGFzeW5jKHBhcmFtcyx1cmwpID0+IHtcbiAgICB0aXAubG9hZGluZygpO1xuICAgIGNvbnNvbGUubG9nKFwid3h1cGxvYWQtLS1cIitwYXJhbXMpO1xuIC8vICAgbGV0IGRhdGEgPSBwYXJhbXMucXVlcnkgfHwge307XG4gICAgLy8gZGF0YS5zaWduID0gU0lHTjtcbiAgICAvLyBkYXRhLnRpbWUgPSBUSU1FU1RBTVA7XG4gICAgLy8gY29uc29sZS5sb2coXCJkYXRhLS0td3hVcGxvYWRcIitKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgY29uc29sZS5sb2coXCJ1cmwtLS13eFVwbG9hZDpcIit1cmwpO1xuXG4gICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkudXBsb2FkRmlsZSh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBmaWxlUGF0aDogcGFyYW1zLFxuICAgICAgICBuYW1lOiAnaW1hZ2UnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyOiB7IFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIH1cblxuICAgIH0pO1xuICAgIHRpcC5sb2FkZWQoKTtcbiAgICByZXR1cm4gcmVzO1xufTtcblxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB3eFJlcXVlc3QsXG4gICAgd3hVcGxvYWRcbn1cbiJdfQ==