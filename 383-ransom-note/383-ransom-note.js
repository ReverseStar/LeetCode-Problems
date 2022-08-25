/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let cnt = 0;
    
    for(let i of ransomNote){
        if(magazine.includes(i)){
            cnt++;
            magazine = magazine.replace(i,"");
        }
    }
    
    if(ransomNote.length === cnt) return true;
    else return false;
    
};