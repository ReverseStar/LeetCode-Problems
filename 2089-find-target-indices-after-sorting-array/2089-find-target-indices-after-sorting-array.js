/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let sorted = nums.sort((a,b) => a-b);
    let res = [];
    
    const BS = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;
        
        while (left <= right) {
            let mid = Math.floor((left+right) / 2);
            
            if (arr[mid] === target) {
                // Keep adding the matching index to the result array and shift the search window to the left
                res.push(mid);
                left = mid - 1;
                
                while (left >= 0 && arr[left] === target) {
                    res.push(left);
                    left--;
                }
                
                // Shift the search window to the right
                right = mid + 1;
                
                while (right < arr.length && arr[right] === target) {
                    res.push(right);
                    right++;
                }
                
                // Exit the loop since all occurrences have been found
                break;
            }
            
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    BS(sorted, target);
    return res.sort((a, b) => a - b);
};

