/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
    let sum = nums[0];
    let res = nums[0];
    
    for(let i=1; i<nums.length; i++){
        sum += nums[i];
        
        res = Math.max(res, Math.ceil(sum / (i+1)));
    }
    return res;
};