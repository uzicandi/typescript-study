// import sum, { print as changeP } from './10-3-module1.js';

// console.log(sum(1, 2));
// changeP();

import * as calculator from './10-3-module1.js';

console.log(calculator.add(1, 2));
calculator.print();
console.log(calculator.number);
