/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let sorted = [...nums].sort((a,b) => a - b);
    let rev = [...sorted].sort((a,b) => b - a);
    
    return _.isEqual(nums, sorted) || _.isEqual(nums, rev);
};