/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let n = BigInt(num.join('')) + BigInt(k);
    return n.toString().split('');
};