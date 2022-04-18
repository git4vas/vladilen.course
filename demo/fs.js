//filesystem
const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname,'test'), (err) => {
// if (err) {
//         throw err
//     }
//     console.log('DIR created')
// });


const filePath = path.join(__dirname, 'test', 'text.txt');
// fs.writeFile(filePath, 'hello filepath', err => {
//     if (err) {throw err}
//     console.log('file created')
// })
// fs.appendFile(filePath, '\nhello again', err => {
//     if (err) {throw err};
//     console.log('line appended')
// })


// fs.readFile(filePath, (err, content) => {
//     if (err) {
//         throw err
//     }
// })
//     const data = Buffer.from(content)
//     console.log('content: ', data.toString())


fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }
    console.log(content)
})
