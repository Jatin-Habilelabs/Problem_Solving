//  find minimum  sum of n number in an array and number are consucative. add async ,await and error handling

const errorHandling = (arr, k) => {
    if (arr.length < k) {
        console.log(" length of array should be greater than sub array length");
        return true
    }

    if (k === 1) {
        console.log("value of k should be greater than 1");
        return true
    }

    return false
}

const arr = [2, 3, -1, -4, 6];
const lengthOfNumber = 2
let min_sum = arr[0];
const findMinSum = async (arr, lengthOfNumber) => {
    try {
        const error = await errorHandling(arr, lengthOfNumber);

        if (!error) {
            const length = arr.length;
            for (var i = 0; i <= length - lengthOfNumber; i++) {
                sum = 0
                for (var j = 0; j < lengthOfNumber; j++) {
                    let k = i + j;
                    sum += arr[k];
                }
                if (min_sum > sum) {
                    min_sum = sum;
                }
            }

            console.log(min_sum);
        }
    } catch (error) {

    }

}
findMinSum(arr, lengthOfNumber)