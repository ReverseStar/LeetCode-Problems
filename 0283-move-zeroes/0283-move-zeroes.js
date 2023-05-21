/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    nums.forEach(num => {
        if(num === 0){
            nums.splice(nums.indexOf(num),1);
            nums.push(0);
        }
    })
    // console.log(nums)
    return nums;
};