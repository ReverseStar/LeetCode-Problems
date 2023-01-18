/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    const kadaneMax = (arr, len) => {
        let sum = arr[0];
        let maxSum = arr[0];

        for(let i=1; i<len; i++){
            sum = Math.max(sum + arr[i], arr[i]);
            maxSum = Math.max(maxSum, sum);
        }
        return maxSum;
    }

       const kadaneMin = (arr, len) => {
        let sum = arr[0];
        let minSum = arr[0];

        for(let i=1; i<len; i++){
            sum = Math.min(sum + arr[i], arr[i]);
            minSum = Math.min(minSum, sum);
        }
        return minSum;
    }

    let len = nums.length;
    let totalSum = nums.reduce((a,b) => a+b, 0);

    let maxSum = kadaneMax(nums, len);
    let minSum = kadaneMin(nums, len);
    let circularSum = totalSum - minSum;

    return maxSum > 0 ? Math.max(maxSum,circularSum) : maxSum;
};