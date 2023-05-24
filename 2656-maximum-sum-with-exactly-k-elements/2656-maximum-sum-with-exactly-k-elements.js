/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let mx = Math.max(...nums);
    // console.log(mx);
    
    let sum = mx;
    let arr = [];
    
    for(i=0; i<k; i++){
        arr.push(sum++);
    }
    
    // console.log(arr);
    return arr.reduce((acc,curr) => acc + curr);
};