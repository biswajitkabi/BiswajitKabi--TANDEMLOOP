// Program-4: Count multiples of 1–9 in an array

const arr = JSON.parse(require("fs").readFileSync(0, "utf-8").trim());
let result = {};

for (let i = 1; i <= 9; i++) {
  result[i] = arr.filter(n => n % i === 0).length;
}

console.log(result);

// Output Example:
// {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}