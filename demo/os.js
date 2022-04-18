const os = require('os')

console.log('operating system =', os.platform())
console.log('architecture =', os.arch())
// console.log('CPUs =', os.cpus())
console.log('MEM =', os.totalmem(), 'free =', os.freemem())
console.log('homeDIR =', os.homedir())
console.log('UPtime =', os.uptime())