function factorial(n) {
  // Base case: If n is NaN, 0, or 1, the factorial is 1.
  // This also handles cases where no argument is passed (n = NaN).
  if (isNaN(n) || n === 0 || n === 1) {
    return 1;
  }

  // Recursive case: n! = n * (n-1)!
  return n * factorial(n - 1);
}

const arg = Number(process.argv[2]);

console.log(factorial(arg));