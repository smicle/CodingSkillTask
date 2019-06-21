import 'smicle-util';
export var paintTheTrout = function (N) {
    var a = [];
    for (var n = ((N / 8) | 0) * 8, i = 0; i < 8; i++) {
        a.push(n + i);
    }
    for (var n = N % 8, i = 0; i < 8; n += 8, i++) {
        a.push(n);
    }
    for (var n = N; n < 64; n += 9) {
        a.push(n);
        if (n % 8 == 7)
            break;
    }
    for (var n = N; n >= 0; n -= 9) {
        a.push(n);
        if (n % 8 == 0)
            break;
    }
    for (var n = N; n >= 0; n -= 7) {
        a.push(n);
        if (n % 8 == 7)
            break;
    }
    for (var n = N; n < 64; n += 7) {
        a.push(n);
        if (n % 8 == 0)
            break;
    }
    return a._uniq();
};
