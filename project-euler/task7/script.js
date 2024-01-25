let result = BigInt(2) ** BigInt(1000);
let resultString = result.toString();
let sum=0;
for (let i = 0; i < resultString.length; i++) {

  sum += parseInt(resultString[i]);
}

console.log(sum); 
document.write("<p><b> power digit sum is " + sum + "</p>")