/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n = nums.length;
    let missing = 0;
    let duplicate = 0;
    
    let arr = new Array(n+1).fill(0);
    // console.log(arr);
    
    for(let i of nums){
        arr[i]++;
    }
    // console.log(arr);
    for(let i=1; i<=arr.length; i++){
        if(arr[i] === 2) duplicate = i;
        if(arr[i] === 0) missing = i;
    }
    return [duplicate, missing];
};