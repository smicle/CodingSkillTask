"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
console.log('Task1-CollisionJudge');
var input = function (s) {
    if (s === void 0) { s = ''; }
    return readlineSync.question(s);
};
var range = function (n) { return Array.from({ length: n }, function (_, i) { return i; }); };
var splitInNumber = function (s) { return s.split(' ').map(function (n) { return Number(n); }); };
var s_raw = splitInNumber(input());
var self = {
    x: s_raw[0],
    y: s_raw[1],
    width: s_raw[2],
    height: s_raw[3],
};
var N = Number(input());
var enemy = [];
for (var _ in range(N)) {
    var e_raw = splitInNumber(input());
    enemy.push({
        x: e_raw[0],
        y: e_raw[1],
        width: e_raw[2],
        height: e_raw[3],
    });
}
enemy.forEach(function (e, i) {
    var judge_x = Math.abs(self.x - e.x);
    var judge_y = Math.abs(self.y - e.y);
    var judge_width = self.width / 2 + e.width / 2;
    var judge_height = self.height / 2 + e.height / 2;
    if (judge_x < judge_width && judge_y < judge_height) {
        console.log("\u6575\u6A5F" + (i + 1) + "\u304C\u5F53\u305F\u308A");
    }
});
