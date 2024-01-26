function findMultiplesSum(limit) {
    let sum = 0;

    for (let i = 1; i < limit; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    return sum;
  }

  const limit = 1000;
  const result = findMultiplesSum(limit);

  document.write(`<p>The sum of multiples of <b>3</b> or <b>5</b> below <b>${limit}</b> is: <b>${result}</b></p>`);