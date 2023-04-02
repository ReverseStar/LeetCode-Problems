/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    let arr = [];
    potions.sort((a,b) => a-b);
    
    for(spell of spells){
        let left = 0;
        let right = potions.length - 1;
        let idx = potions.length;
        
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            
            if(spell * potions[mid] >= success){
                right = mid - 1;
                idx = mid;
            } else {
                left = mid + 1;
            }
        }
        arr.push(potions.length - idx);
    }
    
    return arr;
};