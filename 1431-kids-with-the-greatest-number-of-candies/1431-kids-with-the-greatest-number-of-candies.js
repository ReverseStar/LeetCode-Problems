/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let ans = [];
    let max = Math.max(...candies);
    // console.log('the max is', max);
    candies.map(candy => {
        if(candy + extraCandies >= max){
            ans.push(true);
        } else {
            ans.push(false);
        }
    })
    return ans;
};