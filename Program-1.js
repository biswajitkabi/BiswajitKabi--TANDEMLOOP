// Problem 1: Implement Calculator using Class (Add, Subtract, Multiply, Divide)

class Calculator {
  calculate(a, b, operation) {
    switch (operation.toLowerCase()) {
      case "addition":
        return a + b;
      case "subtraction":
        return a - b;
      case "multiplication":
        return a * b;
      case "division":
        if (b === 0) return "Error: Division by zero";
        return a / b;
      default:
        return "Error: Invalid operation type";
    }
  }
}

// Example Usage:
const calc = new Calculator();
let a = 10.5;                // double (number)
let b = 5.2;                 // double (number)
let operation = "division";  // string

console.log(calc.calculate(a, b, operation));

// Output: 2.0192307692307693
