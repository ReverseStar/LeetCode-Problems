/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        '(' : ')',
        '{' : '}',
        '[' : ']',
    }
    
    let stack = [];
    
     for(let ch of s) {
        if(map[ch]){
            stack.push(map[ch])
        } else if(stack.length > 0 && stack[stack.length-1] === ch){
            stack.pop();
        }else{
            return false;
        }
    }
    return stack.length === 0;
};