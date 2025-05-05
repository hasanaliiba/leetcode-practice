function runningSum(nums: number[]): number[] {
    let sumArray: number[] = [];
    let sumHolder = 0;
    for (var i = 0; i < nums.length; i++) {
        sumHolder = sumHolder + nums[i];
        sumArray.push(sumHolder);
    }
    return sumArray;
};