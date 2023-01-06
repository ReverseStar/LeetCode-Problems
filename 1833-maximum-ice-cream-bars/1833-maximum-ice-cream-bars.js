/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let cnt = 0;
    
    let sorted = costs.sort((a,b) => a - b);
    
    for(let i=0; i<sorted.length; i++){
        if(coins === 0) break;
        if(sorted[i] <= coins){
            coins -= sorted[i];
            cnt++;
        }
    }
    console.log(cnt);
    return cnt;
};