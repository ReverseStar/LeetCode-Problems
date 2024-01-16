
var RandomizedSet = function() {
    this.numMap = {};
    this.numList = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    let res = !(this.numMap.hasOwnProperty(val));
    
    if(res){
        this.numMap[val] = this.numList.length;
        this.numList.push(val);
    }
    return res;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    let res = (this.numMap.hasOwnProperty(val));
    
    if(res){
        let idx = this.numMap[val];
        let lastVal = this.numList.at(-1);
        
        this.numList[idx] = lastVal;
        this.numList.pop();
        
        this.numMap[lastVal] = idx;
        
        delete this.numMap[val];
    }
    return res;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return _.sample(this.numList);
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */