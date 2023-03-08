/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    
    while(left < right){
        let hours = 0;
        let mid = Math.floor((left + right) / 2);
        
        for(let pile of piles){
            hours += Math.ceil(pile / mid);
        }
        
        hours <= h ? right = mid : left = mid + 1;
    }
    return left;
};


/* This is NOT exactly Binary Search as BS requires Sorted elements. 
 So, using a modified BS called, "Binary Search on Value". */
