const lib = require('./dist/index.js')

// add some code here to test your lib
console.log('Input 10-digit number ---> expect formatted phone number');
console.log(lib.format(5558675309));
console.log('\n\n');

console.log('Input 10-digit number with decimal ---> expect formatted phone number');
console.log(lib.format(800995.1222));
console.log('\n\n');

console.log('Input 10-digit string of numbers with formatting ---> expect formatted phone number');
console.log(lib.format('772-556-9944'));
console.log('\n\n');

console.log('Input 3-digit number ---> expect error message');
console.log(lib.format(222));
console.log('\n\n');

console.log('Input boolean ---> expect error message');
console.log(lib.format(false));
console.log('\n\n');
