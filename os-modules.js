const os = require('os')

const system = os.version()
const user = os.totalmem()
const test = os.freemem()

console.log(system);
console.log(user.username);
console.log(test);