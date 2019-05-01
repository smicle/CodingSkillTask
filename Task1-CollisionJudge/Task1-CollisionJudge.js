"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
console.log('Task1-CollisionJudge');
var input = function (s) {
    if (s === void 0) { s = ''; }
    return readlineSync.question(s);
};
var range = function (n) { return Array.from({ length: n }, function (_, i) { return i; }); };
var s_raw = input()
    .split(' ')
    .map(function (n) { return Number(n); });
var self = {
    x: s_raw[0],
    y: s_raw[1],
    width: s_raw[2],
    height: s_raw[3],
};
var N = Number(input());
var enemy = range(N).slice().map(function (_) {
    return input()
        .split(' ')
        .map(function (n) { return Number(n); });
})
    .map(function (e) { return ({
    x: e[0],
    y: e[1],
    width: e[2],
    height: e[3],
}); });
enemy.forEach(function (e, i) {
    var judge_x = Math.abs(self.x - e.x);
    var judge_y = Math.abs(self.y - e.y);
    var judge_width = self.width / 2 + e.width / 2;
    var judge_height = self.height / 2 + e.height / 2;
    if (judge_x < judge_width && judge_y < judge_height) {
        console.log("\u6575\u6A5F" + (i + 1) + "\u304C\u5F53\u305F\u308A");
    }
});
