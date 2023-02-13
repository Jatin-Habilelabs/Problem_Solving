// 6. * * * * * * * * *
//     * * * * * * *
//        * * * * *
//          * * *
//            *

const reversePyramid = () => {
  let str = ""
  for (var i = 5; i > 0; i--) {
    for (var k = 5 - i; k > 0; k--) {
      str += ' ';
    }
    for (var j = 1; j <= 2 * i - 1; j++) {
      str += '*'
    }
    str += '\n'
  }
  console.log(str);
}

reversePyramid()
