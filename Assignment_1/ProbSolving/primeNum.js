//    1.)   Print all primes number between these input.
//                   a. Take two input
//                           i. Input1
//                           ii. Input2

const input1 = 2;
const input2 = 20;
function IsPrime(input1, input2) {
  for (var i = input1; i < input2; i++) {
    let count = 0
    for (var j = input1; j < input2; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count <= 1) {
      console.log(i);
    }
  }

}

IsPrime(input1, input2)