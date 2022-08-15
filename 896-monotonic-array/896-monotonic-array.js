/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let asc = [...nums].sort((a,b) => a - b);
    let desc = [...nums].sort((a,b) => b - a);
    
    // return ((asc.toString() === nums.toString()) || (desc.toString() === nums.toString()))
    
    return (JSON.stringify(asc) === JSON.stringify(nums)) || (JSON.stringify(desc) === JSON.stringify(nums));
};