
// 6. Prime factorization of A Number
// a. Take as input a number n
// b. Print all its prime factors from smallest to largest.
// c. Example: n=1440,result :2 2 2 2 2 3 3 5.

function primeFactorization(n) {
    function isPrime(n) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    const result = [];
    for (let i = 2; i <= n; i++) {
        while (isPrime(i) && n % i === 0) {
            result.push(i);
            n = n / i;
        }
    }
    return result;
}
console.log(primeFactorization(10));