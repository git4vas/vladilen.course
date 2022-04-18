const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    
    console.log(req.url)    
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) {
                throw err
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            })

            res.end(data)
        })
    } else if (req.url === '/contacts') {
        fs.readFile(path.join(__dirname, 'public', 'contacts.html'), (err, data) => {
            if (err) {
                throw err
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            })

            res.end(data)
        })
    }

})

server.listen(8080, () => {
    console.log('server started..')
})