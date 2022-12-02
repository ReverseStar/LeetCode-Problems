/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {

    // word1.forEach(ch => {
    //     if(!word2.includes(i)){
    //         return false;
    //     }
    // })
    let flag = 0;
    let w1 = word1.split('');
    let w2 = word2.split('');
    console.log(w1,w2);
    
    w1.forEach(ch => {
        if(!word2.includes(ch)){
            flag = 1;
        }
    })
    if(flag === 1){
        return false;
    }
    // console.log(flag);

    let freq1 = _.countBy(w1);
    let freq2 = _.countBy(w2);
    // console.log(freq1);
    
    let f1 = Object.values(freq1);
    let f2 = Object.values(freq2);
    // console.log(f1);
    
    let ff = sorted(f1);
    let fff = sorted(f2);
    // console.log(ff,fff);
    return _.isEqual(ff,fff);
    
};

const sorted = (nums) => {
    return nums.sort((a,b) => a - b);
}