/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let min1 = Infinity;
    let min2 = Infinity;
    
    for(let n of prices){
        if(n < min1){
            min2 = min1;
            min1 = n;
        } else {
            min2 = Math.min(min2, n);
        }
    }
    
    return (money - (min1+min2)) >= 0 ? money - (min1+min2) : money;
};