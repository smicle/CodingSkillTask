"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
console.log('1-1task');
var rl = require('readline').createInterface(process.stdin, process.stdout);
var input = function () { return new Promise(function (r) { return rl.once('line', r); }); };
var range = function (n) { return Array.from({ length: n }, function (_, i) { return i; }); };
(function () { return __awaiter(_this, void 0, void 0, function () {
    var s_raw, self, N, _a, enemy, _b, _c, _i, _, e_raw;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4, input()];
            case 1:
                s_raw = (_d.sent()).split(' ').map(function (n) { return Number(n); });
                self = {
                    x: s_raw[0],
                    y: s_raw[1],
                    width: s_raw[2],
                    height: s_raw[3],
                };
                _a = Number;
                return [4, input()];
            case 2:
                N = _a.apply(void 0, [_d.sent()]);
                enemy = [];
                _b = [];
                for (_c in range(N))
                    _b.push(_c);
                _i = 0;
                _d.label = 3;
            case 3:
                if (!(_i < _b.length)) return [3, 6];
                _ = _b[_i];
                return [4, input()];
            case 4:
                e_raw = (_d.sent()).split(' ').map(function (n) { return Number(n); });
                enemy.push({
                    x: e_raw[0],
                    y: e_raw[1],
                    width: e_raw[2],
                    height: e_raw[3],
                });
                _d.label = 5;
            case 5:
                _i++;
                return [3, 3];
            case 6:
                enemy.forEach(function (e, i) {
                    var judge_x = Math.abs(self.x - e.x);
                    var judge_y = Math.abs(self.y - e.y);
                    var judge_width = self.width / 2 + e.width / 2;
                    var judge_height = self.height / 2 + e.height / 2;
                    if (judge_x < judge_width && judge_y < judge_height) {
                        console.log("\u6575\u6A5F" + (i + 1) + "\u304C\u5F53\u305F\u308A");
                    }
                });
                process.exit();
                return [2];
        }
    });
}); })();
