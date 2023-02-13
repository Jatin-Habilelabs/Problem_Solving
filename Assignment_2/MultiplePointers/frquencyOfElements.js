
//  problem 3) count unique values in an array  for eg:- arr=[1,1,2,2,3,3,4] output is 1:2 2:2 3:2 4:1==================

const givenArr = [1, 22, 22, 23, 23, 12, 12]
const thirdLargestNum=(givenArr)=> {
    givenArr.sort((a, b) => a - b);
    const obj = {}
    for (data in givenArr) {
        if (givenArr[data] in obj) {
            obj[givenArr[data]] += 1;
        }
        else {
            obj[givenArr[data]] = 1;
        }
    }
    console.log(obj);

}
thirdLargestNum(givenArr)