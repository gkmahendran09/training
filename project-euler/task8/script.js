function isPrime(n) {
  if (n <= 1) {
      return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
          return false;
      }
  }
  return true;
}

const primeNumbersBelow2000000 = [];
for (let num = 2; num < 2000000; num++) {
  if (isPrime(num)) {
      primeNumbersBelow2000000.push(num);
  }
}

const sumOfPrimesBelow2000000 = primeNumbersBelow2000000.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of prime numbers below 2,000,000:", sumOfPrimesBelow2000000);
document.write("Sum of prime numbers below 2,000,000:", sumOfPrimesBelow2000000 );