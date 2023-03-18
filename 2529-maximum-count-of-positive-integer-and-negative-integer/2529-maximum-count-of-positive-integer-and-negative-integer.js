/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let pos = 0;
    let neg = 0;
    
    nums.forEach(num => {
        if(num < 0) neg++;
        if(num > 0) pos++;
    })
    
    return Math.max(pos, neg);
};