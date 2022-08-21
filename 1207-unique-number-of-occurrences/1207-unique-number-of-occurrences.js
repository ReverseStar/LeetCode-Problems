/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let freq = _.countBy(arr);
    //console.log(freq,typeof(freq));
    let freqVal = Object.values(freq);
    let unq = [...new Set(freqVal)]
    //console.log('unique : ',unq);
    if(unq.length === freqVal.length){
        return true;
    } else {
        return false;
    }
};