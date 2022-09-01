/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let arr = [];
    for(let ch of s){
        if(arr.includes(ch)){
            return ch;
        }
        arr.push(ch)
    }
};