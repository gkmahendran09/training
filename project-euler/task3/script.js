function squares(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += Math.pow(i, 2);
    }
    return sum;
}

const n = 100;
const result = squares(n);
document.write("<p> <b> Sum of the squares of the first " + n + " natural numbers: " + result + "</b></p>");

function second(m){
    let total = 0;
    for(let i = 1; i <= m; i++){
        total += i; 
    }
    return total;
}

const m = 100;
const sumOfNaturalNumbers = second(m);
const sumOfSquares = sumOfNaturalNumbers * sumOfNaturalNumbers;

document.write("<p> <b> Square of sum of the first " + m + " natural numbers: " + sumOfSquares + "</b></p>");

const difference = sumOfSquares - result;

document.write("<p> <b> difference between the sum of the squares of the first one hundred natural numbers and the square of the sum" + difference + "</b></p>");
