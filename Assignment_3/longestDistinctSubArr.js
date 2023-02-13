//  find largest subarray of array containing distinct characters.

const errorHandling = (arr) => {
    if (arr.length < 0) {
        console.log(" array should contain some more values");
        return true
    }
    return false
}


let arr = [5, 6, 3, 5, 7, 8, 9, 5, 6];
let arrLength = arr.length;
let max = 1, len = 1, maxIndex = 0;

const SubArr = async (arr, n) =>{
    try {
        const error = await errorHandling(arr);
        for (let i = 1; i < n; i++) {
            if (arr[i] > arr[i - 1]) {
                len++;
            }
            else {
                if (max < len) {
                    max = len;

                    maxIndex = i - max;
                }
                len = 1;
            }
        }

        if (max < len) {
            max = len;
            maxIndex = n - max;
        }

        for (let i = maxIndex; i < max + maxIndex; i++)
            console.log(arr[i] + " ");
    }
    catch (error) {
        console.log(error);
    }
}



SubArr(arr,arrLength);