/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length;
    
    //Edge cases
    if(n === 0) return 0;
    if(n === 1) return nums[0];
    
    //Creating DP array to store max loot
    let dp = new Array(n).fill(0);
    
    //Base cases
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    //looping through houses
    // [2,7,9,3,1]
    for(let i=2; i<n; i++){
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
    }
    //the last house 
    return dp[n-1];
};