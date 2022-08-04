/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let num = BigInt(digits.join(""));
    return ((num + 1n).toString().split(''));

};
