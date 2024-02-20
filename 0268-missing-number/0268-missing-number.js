/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let oSum = (n*(n+1)) / 2;
    let pSum = nums.reduce((acc,curr) => acc + curr, 0);
    
    return oSum - pSum;
};
