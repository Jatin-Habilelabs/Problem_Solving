// 3. Count digits in Number
// a. Example:1234=>4.

let digit = 1234;
function countLength(digit) {
     let length = 0
     while (digit > 0) {

          digit = Math.floor(digit / 10)
          length++;
     }
     console.log(length);
}
countLength(digit)
