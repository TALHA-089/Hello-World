const add = require('./app.js');

console.log("Starting Unit Test: Checking if 2 + 2 = 4...");

if (add(2, 2) === 4) {
  console.log("Test Passed!");
  process.exit(0);
} else {
  console.log("Test Failed!");
  process.exit(1);
}