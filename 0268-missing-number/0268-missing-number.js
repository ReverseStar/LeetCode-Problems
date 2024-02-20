/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let res = 0;
    
    for(let i=1; i<=n; i++){
        res ^= i;
    }
    for(let i=0; i<nums.length; i++){
        res ^= nums[i];
    }
    
    console.log(res);
    return res;
};
