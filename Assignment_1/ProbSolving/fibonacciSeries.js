// 2 )  Print Fibonacci series till N value.

const upto = 5;
function fibonacci(upto) {
  let a = 0,
    b = 1;
  console.log(a);
  console.log(b);
  for (var i = 0; i < upto - 2; i++) {
    let c = a + b;
    a = b;
    b = c;
    console.log(c);
  }
}
fibonacci(upto)