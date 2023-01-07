/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let idx = 0;
    let total = 0;
    
    let sumOfGas = gas.reduce((acc,curr) => acc + curr, 0);
    let sumOfCost = cost.reduce((acc,curr) => acc + curr, 0);
    
    if(sumOfGas < sumOfCost) return -1;
    
    for(let i=0; i<gas.length; i++){
        total += gas[i] - cost[i];
         if(total < 0){
             idx = i+1;
             total = 0;
         }
    }
    // console.log(idx);
    return idx;
};