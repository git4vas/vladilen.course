const path = require('path');

console.log('filename: ', path.basename(__filename));
console.log('dirname: ', path.basename(__filename));
console.log('extension: ', path.extname(__filename));
console.log('parse: ', path.parse(__filename).name);
console.log(path.join(__dirname, 'server', 'index.html'))