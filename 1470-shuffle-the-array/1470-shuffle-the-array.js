/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr = [];
    let half = nums.length / 2;
    
    let first = nums.slice(0, half);
    let last = nums.slice(half, nums.length);
    
    // console.log(first, last);
    
    for(let i=0; i<half; i++){
        arr.push(first[i], last[i]);
    }
    // console.log(arr);
    return arr;
};