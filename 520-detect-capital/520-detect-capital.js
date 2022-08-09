/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    
    let ss = word[0].toUpperCase() + word.substring(1).toLowerCase();
    console.log(ss);
    if(ss === word){
        return true;
    } else if(word === word.toUpperCase() || word === word.toLowerCase()){
        return true;
    }  else {
        return false;
    }
};