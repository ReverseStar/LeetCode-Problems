/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    let answer = [];
    let sorted = nums.sort((a,b) => a - b);
    
    for(q of queries){
        let cnt = 0;
        let sum = 0;
        
        for(let i=0;i<nums.length;i++){
            let temp = sum + nums[i];
            if(temp <= q){
                sum += nums[i];
                cnt++;
            }
        }
        answer.push(cnt);
    }
    // console.log(answer);
    return answer;
};