/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let hash = {};

    for(s of strs){
        let word = s.split('').sort().join('');
        // console.log(word);
        if(!hash[word]){
            hash[word] = [];
        }
            hash[word].push(s);
    }
    // console.log(hash);
    return Object.values(hash);
};