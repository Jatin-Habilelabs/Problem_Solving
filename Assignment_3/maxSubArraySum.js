// problem 1) find maximum sum of n number in an array and number are consucative. 
// add async ,await and error handling .




// Time complexity is 0(n^2)===============


// function exceptionHandling(sumArr,lengthNumber){
//     if(sumArr.length<lengthNumber){
//         console.log("error : array should not be in proper formet");
//         return true;
//     }
//     if(lengthNumber===1){
//         console.log("error : value of length number is greater than array length");
//         return true;
//     }
// return false;
// }

// const sumArr = [2,3,-1,-4,6];
// const lengthNumber = 3
// let max_sum = 0;
//  async function findMaxSum(sumArr, lengthNumber) {

//     try {
//         const error= await exceptionHandling(sumArr,lengthNumber);
//         const length = sumArr.length;
//         for (var i = 0; i <=length-lengthNumber ; i++) {
//             sum = 0
//             for (var j = 0; j < lengthNumber; j++) {
//                 let k = i + j;
//                 sum += sumArr[k];
//             }
//             if (max_sum < sum) {
//                 max_sum = sum;
//             }
//         }

//         console.log(max_sum);
//     } catch (error) {
//         console.log(error);
//     }


// }
// findMaxSum(sumArr, lengthNumber)


// Time complexity is 0(n)===============

function exceptionHandling(sumArr, lengthNumber) {
    if (sumArr.length < lengthNumber) {
        console.log("error : array should not be in proper formet");
        return true;
    }
    if (lengthNumber === 1) {
        console.log("error : value of length number is greater than array length");
        return true;
    }
    return false;
}
const sumArr = [1, 12, 3, 19, 3, 2, 12];
const lengthNumber = 3
let max_sum = 0;
async function findMaxSum(sumArr, lengthNumber) {
    try {
        const error = await exceptionHandling(sumArr, lengthNumber);
        const length = sumArr.length;
        let currSum = 0;
        for (var i = 0; i <= length - lengthNumber; i++) {
            if (i == 0) {
                currSum = sumArr[i] + sumArr[i + 1] + sumArr[i + 2];
            }
            else {
                currSum += sumArr[i + 2] - sumArr[i - 1];
            }
            if (max_sum < currSum) {
                max_sum = currSum
            }
        }

        console.log(max_sum);
    }
    catch (error) {
        console.log(error);
    }

}
findMaxSum(sumArr, lengthNumber)