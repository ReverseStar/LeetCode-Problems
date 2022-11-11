/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let uniq = [...new Set(nums)];
    for(let i=0;i<uniq.length;i++){
        nums[i] = uniq[i];
    }
    return uniq.length
};