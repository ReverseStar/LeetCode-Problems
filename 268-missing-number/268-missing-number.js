/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let sum = nums.reduce((acc,curr) => {
        return acc + curr;
    },0);

    let len = nums.length; 
    let expected = (len*(len+1)) / 2;
    return expected - sum;
};
