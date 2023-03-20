/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let cnt = 0;
    
    for(let i=0; i<flowerbed.length; i++){
        if(!n) return true;
        if(flowerbed[i] === 0 && flowerbed?.[i-1] !== 1 && flowerbed?.[i+1] !== 1){
            n--;
            flowerbed[i] = 1;
        }
        
        if(!n) return true;
    }
    return !n;
};