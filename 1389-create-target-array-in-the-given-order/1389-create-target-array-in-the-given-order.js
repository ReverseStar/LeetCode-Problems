/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let arr = [];
    
    for(let i=0;i<nums.length;i++){
        //placing nums value in index array
        arr.splice(index[i], 0, nums[i]);
        // console.log(arr);
    }
    //console.log(arr);
    return arr;
};