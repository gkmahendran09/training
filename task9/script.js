function pythagoreanTriplet(targetSum) {
  for (let a = 1; a < targetSum; a++) {
      for (let b = a + 1; b < targetSum; b++) {
          const c = targetSum - a - b;
          if (a ** 2 + b ** 2 === c ** 2) {
              return a * b * c;
          }
      }
  }
}

const targetSum = 1000;
const result = pythagoreanTriplet(targetSum);
console.log("Product of the Pythagorean triplet:", result);
document.write("Product of the Pythagorean triplet:", result);