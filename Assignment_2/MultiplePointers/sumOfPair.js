

const arr = [1, -1, 9, 9, 9, -199]
const sum = 8;
const findSum = (arr, sum) => {
    arr.sort((a, b) => a - b);
    const arrLength = arr.length;
    let firstPointer = 0;
    let lastPointer = arrLength - 1;
    for (data in arr) {
        if (arr[firstPointer] + arr[lastPointer] > sum) {
            lastPointer--;
        }
        else if (arr[firstPointer] + arr[lastPointer] < sum) {
            firstPointer++;
        }
        else if (arr[firstPointer] + arr[lastPointer] === sum) {
            console.log(arr[firstPointer], arr[lastPointer]);
            return false;
        }


    }

}
findSum(arr, sum)







