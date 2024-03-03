/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res = [];
    
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right){
        if((nums[left]) * (nums[left]) > (nums[right]) * (nums[right])){
            res.push(nums[left] * nums[left]);
            left++;
        } else {
            res.push(nums[right] * nums[right]);
            right--;
        }
    }
    
    return res.toReversed();
};