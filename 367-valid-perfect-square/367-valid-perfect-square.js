/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let ans = Math.floor(Math.sqrt(num));
    console.log(ans);
    return(ans*ans === num);
};