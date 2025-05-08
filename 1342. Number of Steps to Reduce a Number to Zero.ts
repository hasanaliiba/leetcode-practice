// Problem: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/description/

function numberOfSteps(num: number): number {
    let finalCondition = num;
    let counter = 1;
    if (finalCondition != 0) {
        while (finalCondition != 1) {
            if (finalCondition % 2 == 0) {
                finalCondition = finalCondition / 2;
                counter++
            }
            else if (finalCondition % 2 != 0) {
                finalCondition--;
                counter++;
            }
        }
        return counter++;
    }
    else
        return 0;
};