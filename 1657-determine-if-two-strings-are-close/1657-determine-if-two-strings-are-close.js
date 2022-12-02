/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    let flag = 0;
    let w1 = word1.split('');
    let w2 = word2.split('');
    
    w1.forEach(ch => {
        if(!word2.includes(ch)){
            flag = 1;
        }
    })
    
    if(flag === 1){
        return false;
    }

    let freq1 = _.countBy(w1);
    let freq2 = _.countBy(w2);

    let val1 = Object.values(freq1);
    let val2 = Object.values(freq2);

    
    let sorted1 = sorted(val1);
    let sorted2 = sorted(val2);
    
    return _.isEqual(sorted1,sorted2);
};

const sorted = (nums) => {
    return nums.sort((a,b) => a - b);
}