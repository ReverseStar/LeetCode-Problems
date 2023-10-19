/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const process = (sen) => {
        let stack = [];
        
        for(let ch of sen){
            if(ch === '#'){
                stack.length > 0 && stack.pop();
            } else {
                stack.push(ch);
            }
        }
        return stack.join('');
    }
    
    return process(s) === process(t);
};

