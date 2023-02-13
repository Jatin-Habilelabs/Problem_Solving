// problem 2) in an array remove nth element as given by user .=================================

const givenArr = [1, 2, 4, 5, 6, 9]
const element = 2;
const removeElement = (givenArr, element) => {

    const arrayLength = givenArr.length;
    for (var i = element; i < arrayLength - 1; i++) {

        let temp = givenArr[i];
        givenArr[i] = givenArr[i + 1];
        givenArr[i + 1] = temp

    }
    givenArr.pop();
    console.log(givenArr);

}
removeElement(givenArr, element);