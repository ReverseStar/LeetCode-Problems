/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((acc,curr) => acc + curr, 0);;
    let res = right;
    
    const canShip = (cap) => {
        let ships = 1;
        let currCap = cap;
        
        for(w of weights){
            if(currCap - w < 0) {
                ships++;
                currCap = cap;
            }
            currCap -= w;
        }
        return ships <= days;
    }
    
    while(left <= right){
        let cap = Math.floor((left + right) / 2);
        
        if(canShip(cap)){
            res = Math.min(res, cap);
            right = cap - 1;
        } else {
            left = cap + 1;
        }
    }
    return res;
};