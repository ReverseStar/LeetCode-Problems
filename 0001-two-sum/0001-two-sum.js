/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target, map = new Map()) {
    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        let complement = target - num;
        let sumIdx = map.get(complement);
        // console.log(sumIdx);
        let isTarget = map.has(complement)
        if(isTarget) return [i, sumIdx];
        
        map.set(num, i);
    }
    return
};