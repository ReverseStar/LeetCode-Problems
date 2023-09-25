/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
//     let sum_s = 0;
//     let sum_t = 0;
    
//     for(let ch in s) sum_s += s.charCodeAt(ch);
//     for(let ch in t) sum_t += t.charCodeAt(ch);
    
//     console.log(sum_s, sum_t);
//     return String.fromCharCode(sum_t - sum_s);
    let sum = 0;
    
    for(let ch in s){
        sum ^= s.charCodeAt(ch);
    }
    for(let ch in t){
        sum ^= t.charCodeAt(ch);
    }
    
    return String.fromCharCode(sum);
};

