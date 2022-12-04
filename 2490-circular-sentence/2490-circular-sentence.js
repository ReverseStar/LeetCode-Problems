/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    let arr = sentence.split(' ');
    console.log(arr)
    
    arr.push(arr[0]);
    
    for(let i=0;i<arr.length-1;i++){
        let w = arr[i];
        let w2 = arr[i+1];
        if(w[w.length-1] !== w2[0]){
            return false;
        }
    }
    return true;
};

