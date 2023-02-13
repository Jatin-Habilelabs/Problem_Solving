
// 5.          *
//           * * *
//         * * * * *
//       * * * * * * *
//     * * * * * * * * *

const Pyramid = () => {
  let str = ""
  for (var i = 1; i <= 5; i++) {
    for (var k = 0; k <= 5 - i; k++) {
      str += ' ';
    }
    for (var j = 1; j <= 2 * i - 1; j++) {
      str += '*'
    }
    str += '\n'
  }
  console.log(str);
}
Pyramid()