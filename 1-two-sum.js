var twoSum = function(nums, target) {
    for(let i = 0; i <= nums.length; i++ ){
        for (let j = 0; j <=nums.length; j ++){
            if(i != j){
                if(nums[i] + nums[j] === target){
                    return [i, j]
                }
            }
        }
    }
};

let nums = [2,7,11,15], target = 9
console.log(twoSum(nums, target))