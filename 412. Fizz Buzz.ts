// Problem: https://leetcode.com/problems/fizz-buzz/

function fizzBuzz(n: number): string[] {
    let stringArray: string[] = [];
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            stringArray.push('FizzBuzz');
        }
        else if (i % 3 === 0) {
            stringArray.push('Fizz');
        }
        else if (i % 5 === 0) {
            stringArray.push('Buzz');
        }
        else {
            stringArray.push(String(i));
        }
    }
    return stringArray;
};