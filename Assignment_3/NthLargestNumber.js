
// return Nth largest number from an array



const arr = [1, 2, 4, 4, 4, 5, 8, 9, 9]
const NthElement = 2

const errorHandling = (arr) => {
    if (arr.length < NthElement) {
        console.log(" array should contain some more values");
        return true
    }
    return false
}

const NthLargestElement = async (arr) => {
    try {
        const error = await errorHandling(arr);

        if (!error) {
            let count = {};

            arr.forEach(element => {
                if (element in count) {
                    count[element] = 1 + count[element]
                }
                else {
                    count[element] = 1
                }
            });

            let distinctArr = Object.keys(count)

            if (distinctArr.length < NthElement) {
                console.log("there should be more  distinct elements to calculate given largest element");
                return false
            }

            let result = distinctArr[distinctArr.length - NthElement]
            console.log(result);
            return true
        }
    }
    catch (error) {
        console.log(error);
    }
}
NthLargestElement(arr)



