// (function(exports, require, module, __dirname, __filename) {

// plugged in module
const chalk = require('chalk')

//own module
const text = require('./data')

console.log(chalk.blue(text))
console.log(__filename)
console.log(__dirname)



// })