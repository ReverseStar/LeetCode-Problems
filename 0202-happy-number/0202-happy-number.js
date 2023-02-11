/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n,seen={}) {
    
    if(n === 1) return true;
    if(seen.hasOwnProperty(n)) return false;
    
    seen[n] = true;
    
    let num = Array.from(n.toString()).map(digit => Number.parseInt(digit)**2);
    
    num =  num.reduce((acc, curr) => {
        return acc + curr;
    },0);
    
    return isHappy(num,seen)
    //console.log(num);
};