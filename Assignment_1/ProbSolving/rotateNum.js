// 5. Rotate a number.
// a. You are given two number n and k. You are required to rotate n ,k times to the right .
// if k is positive rotate to the right I.e., remove rightmost digit and make it leftmost. 
// Do the  reverse for negative value of k. Also k can have an absolute value larger than number of digits in n.
// b. Take as input n and k
// c. Print the rotated number
// d. N=123456, k=3 , result=456123

const numberOfDigit = (n) => {
  let digit = 0
  while (n > 0) {
    digit++;
    n = Math.floor(n / 10);
  }
  return digit;
}

const rotateNumberByK = (n, k) => {
  let x = numberOfDigit(n)

  k = (k % x)

  if (k < 0)
    k += x

  let terms = 10 ** k
  let left = Math.floor(n / terms)
  let right = Math.floor(n % terms)

  let result = (right * (10 ** (x - k))) + (left)
  console.log(`Number after ${k} rotations :`, result);
}

rotateNumberByK(12345, -1);

