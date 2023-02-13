
//  problem 4) set all zeroes to right of the array eg: =[1,0,2,0]  [1,2,0,0]

const arrZero = [1, 1, 2, 2, 2,-99, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 55, 5, 5, 5, 5]
const replaceZero = (arrZero) => {
    arrZero.sort((a, b) => a - b);
    let lastIndex = arrZero.length - 1;
    for (data in arrZero) {
        if (arrZero[lastIndex] === 0) {
            lastIndex--;
        }
        else if (arrZero[data] === 0 && data < lastIndex) {
            let temp = arrZero[data];
            arrZero[data] = arrZero[lastIndex];
            arrZero[lastIndex] = temp;
            lastIndex--;
        }
    }
    console.log(arrZero);
}
replaceZero(arrZero)