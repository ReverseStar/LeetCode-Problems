/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let cnt = 0;
    let arr = [];
    
    for(n of pushed){
        arr.push(n);
        
        while(arr.length > 0 && arr[arr.length - 1] === popped[cnt]){
            arr.pop();
            cnt++;
        }
    }
    return arr.length === 0;
};