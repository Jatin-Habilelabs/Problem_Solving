

// 3. 1
//    1 2
//    1 2 3
//    1 2 3 4
//    1 2 3 4 5

const numTriangle = () => {
  let str = ""
  for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
      str += j + ' '
    }
    str += '\n'
  }
  console.log(str);
}
numTriangle()