/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let day = 0;
    let deposit = 1;
    let res = 0;
    
    while(day < n){
        res += deposit;
        deposit++;
        day++;
        
        if(day % 7 === 0){
            deposit = Math.floor(day / 7) + 1; 
        }
    }
    
    return res;
};