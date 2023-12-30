/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    let mod = words.join("");
    // console.log(mod);
    let freq = _.countBy(mod);
    // console.log(freq);
    let vals = Object.values(freq);
    // console.log(vals);
    
    for(let val of vals){
        if(val % words.length !== 0){
            return false;
        }
    }
    return true;
};