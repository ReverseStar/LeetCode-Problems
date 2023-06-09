/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let sorted = letters.sort((a,b) => a - b);
    let set = [...new Set(sorted)];
    // console.log(set);
    
    for(let i=0; i<set.length; i++){
        if(set[i] > target) return set[i];
    }
    return set[0];
};