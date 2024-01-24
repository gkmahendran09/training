function largestPrimeFactor(number) {
    let i = 2;
  
    while (i <= number) {
      if (number % i === 0) {
        number /= i;
      } else {
        i++;
      }
    }
  
    return i;
  }
  
  const targetNumber = 600851475143;
  const result = largestPrimeFactor(targetNumber);
  
  console.log(`Largest prime factor of ${targetNumber}: ${result}`);
  document.write("<p> <b>The largest prime factor is "+ result + " </p>");
  