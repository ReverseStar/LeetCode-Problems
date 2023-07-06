/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let total = 0;
    let res = Infinity;
    
    
    for(let i=0; i<nums.length; i++){
        total += nums[i];
        
        while(total >= target){
            res = Math.min(res, i - left+1);
            total -= nums[left];
            left++;
        }
    }
    return res === Infinity ? 0 : res;
};