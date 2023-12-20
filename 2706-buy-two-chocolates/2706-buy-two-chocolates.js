/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let sorted = prices.sort((a,b) => a-b);
    let leftover = 0;
    
    for(let i=0; i<sorted.length; i++){
        for(let j=i+1; j<sorted.length; j++){
            if(sorted[i] + sorted[j] <= money){
                leftover = money - (sorted[i]+sorted[j]);
                // console.log('leftover: ', leftover);
                if(leftover => 0) return leftover;
            }
        }
    }
    return money;
};