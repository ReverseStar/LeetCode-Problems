/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let cnt = 0;
    console.log(nums.sort())
    for(let i=0;i<nums.length;i++){
        if(nums[i] === nums[i+1]){
            i+=1;
        } else{
            return nums[i];
        }
    }
};