function sumEvenFibonacci(limit) {
    let fib1 = 1;
    let fib2 = 2;
    let sum = 0;

    while (fib2 <= limit) {
        if (fib2 % 2 === 0) {
            sum += fib2;
        }

        let nextFib = fib1 + fib2;
        fib1 = fib2;
        fib2 = nextFib;
    }

    return sum;
}
    // Find the sum of even-valued Fibonacci terms not exceeding four million
    const limit = 4000000;
    const result = sumEvenFibonacci(limit);

    document.write("<p>  <b> Sum of even-valued Fibonacci terms not exceeding " + limit + " is: "   + result +  "</p>");