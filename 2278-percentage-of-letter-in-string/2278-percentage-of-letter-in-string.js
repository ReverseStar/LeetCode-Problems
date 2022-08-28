/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let freq = _.countBy(s);
    //console.log(freq);
    let cnt = freq[letter];
    //console.log(cnt);
    if(!(s.split('').includes(letter))){
        return 0;
    }
    
    let par = Math.floor((cnt/s.length)*100);
    return par;
};