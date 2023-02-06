/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr = [];
    
    let first = nums.slice(0, n);
    let last = nums.slice(n, nums.length);
    // console.log(first, last);
    
    for(let i=0; i<n; i++){
        arr.push(first[i], last[i]);
    }
    return arr;
};