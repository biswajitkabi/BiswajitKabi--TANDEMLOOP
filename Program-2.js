// Program-2: Generate first a odd numbers as a series

function printOddSeries(a) {
  let result = [];

  for (let i = 1; i <= a; i++) {
    result.push(2 * i - 1);
  }

  console.log(result.join(", "));
}

//  Output: (examples)
printOddSeries(1); // 1
printOddSeries(2); // 1, 3
printOddSeries(3); // 1, 3, 5
printOddSeries(4); // 1, 3, 5, 7
