//js/mathematicalfunction.js

//1.factorial of a given number
function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  //2.prime number check
  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  //3.fibonacci sequence
  function fibonacciSequence(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }