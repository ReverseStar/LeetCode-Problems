/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let asc = [...nums].sort((a,b) => a - b);
    let desc = [...nums].sort((a,b) => b - a);
    // console.log(asc, desc);
    
    return Math.abs((asc[0]*asc[1]) - (desc[0]*desc[1]));
};