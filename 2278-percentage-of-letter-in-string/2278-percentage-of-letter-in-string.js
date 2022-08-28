/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let freq = _.countBy(s);
    let cnt = freq[letter];
    
    if(!(s.split('').includes(letter))){
        return 0;
    }
    return Math.floor((cnt/s.length)*100);
};