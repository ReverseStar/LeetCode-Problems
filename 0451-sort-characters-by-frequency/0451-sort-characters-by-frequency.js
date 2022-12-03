/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let arr = _.countBy(s);
    // console.log(arr);
    
    let vals = Object.entries(arr).sort((a,b) => b[1] - a[1]);
    // console.log(vals);
    
    let str = vals.map(([ch,freq]) => {
        return ch.repeat(freq);
    })
    
    return str.join('');
};