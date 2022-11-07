/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    return num.toString().includes('6') ? Number.parseInt(num.toString().replace('6','9')) : num;
};