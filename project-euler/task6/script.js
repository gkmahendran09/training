function isPalindrome(num) {
  // Convert the number to a string and check if it reads the same backward
  return num.toString() === num.toString().split('').reverse().join('');
}

function findLargestPalindrome() {
  let largestPalindrome = 0;

  // Iterate through all possible products of two 3-digit numbers
  for (let i = 100; i < 1000; i++) {
      for (let j = 100; j < 1000; j++) {
          const product = i * j;
          if (isPalindrome(product) && product > largestPalindrome) {
              largestPalindrome = product;
          }
      }
  }

  return largestPalindrome;
}

const result = findLargestPalindrome();
console.log("The largest palindrome made from the product of two 3-digit numbers is:", result);

document.write("The largest palindrome made from the product of two 3-digit numbers is:", result);