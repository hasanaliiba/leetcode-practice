// function maximumWealth(accounts: number[][]): number {
//     let finalArray : number[] = new Array(accounts.length).fill(0);
//     for(var i = 0; i < accounts.length; i++){
//         console.log(accounts[i]);
//         let resultForEachCustomer = 0;
//         for(var j = 0; j < accounts[i].length; j++){
//             resultForEachCustomer = resultForEachCustomer + accounts[i][j];
//         }
//         finalArray[i] = resultForEachCustomer;
//     }
//     return Math.max(...finalArray);
// };

// Better Solution
function maximumWealth(accounts: number[][]): number {
    let max = 0;
    for (var i = 0; i < accounts.length; i++) {
        let resultForEachCustomer = 0;
        for (var j = 0; j < accounts[i].length; j++) {
            resultForEachCustomer = resultForEachCustomer + accounts[i][j];
            if (max < resultForEachCustomer) {
                max = resultForEachCustomer
            }
        }
    }
    return max;
};