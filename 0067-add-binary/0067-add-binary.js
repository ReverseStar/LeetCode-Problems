/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // console.log(BigInt('0b' + a));
    // console.log(BigInt('0b' + b));
    return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
};