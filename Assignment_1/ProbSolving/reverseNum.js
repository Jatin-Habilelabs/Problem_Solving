// 4. Print Reverse of a number
// a. Example 1234
// b. 4,2,3,1


let num = 1234;
function reverseNum(digit) {
  let sum = 0
  while (digit > 0) {
    sum = sum * 10
    sum += (digit % 10);
    digit = Math.floor(digit / 10)

  }
  console.log(sum);
}
reverseNum(num)
