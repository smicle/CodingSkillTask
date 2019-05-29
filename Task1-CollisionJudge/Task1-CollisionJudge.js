"use strict";
exports.__esModule = true;
// import '../util/Prototype'
// import * as smicle from '../util/Function'
var util = require("smicle-util");
console.log('Task1-Collisionis');
// prettier-ignore
var s = util.input().split(' ').map(Number);
var self = {
    x: s[0],
    y: s[1],
    width: s[2],
    height: s[3]
};
var n = util.input()._num();
// prettier-ignore
var enemy = util.range(n)
    .map(function (_) { return util.input().split(' ').map(Number); })
    .map(function (e) { return ({
    x: e[0],
    y: e[1],
    width: e[2],
    height: e[3]
}); });
enemy.forEach(function (e, i) {
    var is_x = Math.abs(self.x - e.x);
    var is_y = Math.abs(self.y - e.y);
    var is_width = self.width / 2 + e.width / 2;
    var is_height = self.height / 2 + e.height / 2;
    if (is_x < is_width && is_y < is_height) {
        console.log("\u6575\u6A5F" + (i + 1) + "\u304C\u5F53\u305F\u308A");
    }
});
/* SampleCase
100 100 70 100
3
50 60 100 50
10 120 100 50
165 115 70 70
*/
