/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((acc,curr) => acc+curr, 0);
    
    let minDiff = null;
    let len = nums.length;
    let minIdx;
    
    for(let i=0; i<nums.length; i++){
        leftSum += nums[i];
        rightSum -= nums[i];
        
        let absDiff = Math.abs(Math.floor(leftSum / (i+1)) - Math.floor(rightSum / Math.max(len - i - 1, 1)));

        if(absDiff === 0) return i;
        if(minDiff === null || absDiff < minDiff){
            minDiff = absDiff;
            minIdx = i;
        }
    }
    return minIdx;
};