// Program-3: Generate first a odd numbers as a series

const a = parseInt(require("fs").readFileSync(0, "utf-8").trim(), 10);

let n = a % 2 === 0 ? a - 1 : a;  // nearest odd ≤ a (number of terms)
let result = [];

for (let i = 1; i <= n; i++) {
  result.push(2 * i - 1);  // generating ith odd
}

console.log(result.join(", "));


// Output Examples:
// Input: 1 → 1
// Input: 2 → 1
// Input: 3 → 1, 3, 5
// Input: 4 → 1, 3, 5
// Input: 5 → 1, 3, 5, 7, 9
// Input: 6 → 1, 3, 5, 7, 9