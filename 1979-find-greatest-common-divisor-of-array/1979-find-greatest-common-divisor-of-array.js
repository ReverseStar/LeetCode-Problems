/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let mx = Math.max(...nums);
    let mn = Math.min(...nums);
    console.log(mx,mn);
    
    let ans = 1;
    for(let i=mn; i>= 0; i--){
        if(mx % i === 0 && mn % i === 0){
            return i;
        }
    }
};