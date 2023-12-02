/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let freq = {};
    for(let char of chars){
        if(freq[char] === undefined){
            freq[char] = 0;
        }
        freq[char]++;
    }
    
    let res = 0;
    
    for(let word of words){
        let curr_word = {};
        let good = true;
        
        for(let ch of word){
            if(!curr_word[ch]){
                curr_word[ch] = 0;
            }
            curr_word[ch]++;
            
            if(!freq[ch] || curr_word[ch] > freq[ch]){
                good = false;
                break;
            }
        }
        
        if(good){
            res += word.length;
        }
    }
    
    return res;
};