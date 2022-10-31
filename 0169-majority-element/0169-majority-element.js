/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let sorted = nums.sort((a,b) => a - b); // implicite return 
    
    let ans = Math.floor(sorted.length / 2);
    return sorted[ans];
};