// NodeJS vs JS
// 1) Node runs on a server - not on a browser (backend)
// 2) Console is in terminal window
console.log("Hello World")

// 3) global object instead of window object
// console.log(global);

// 4) Has common core modules
// 5) CommonJS modules, not ES6 modules
const os = require('os')
const path = require('path')
const { add, subtract, multiply, divide } = require('./math')

console.log(add(2, 4));
console.log(subtract(2, 4));
console.log(multiply(2, 4));
console.log(divide(2, 4));

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))

// 6) Missing some JS APIs like fetch
