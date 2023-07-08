/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = [];
    for(let i=0; i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            let sum = nums[i]+nums[j];
            if(sum === target){
                arr.push(i,j);
            }
        }
    }
    return arr;
};