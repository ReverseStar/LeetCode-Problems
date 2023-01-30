/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (mp[n] !== undefined) return mp[n];
    return mp[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

const mp = {
    0: 0,
    1: 1,
    2: 1
};