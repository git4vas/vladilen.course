const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    
    console.log(req.url)

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filePath)
    let contentType = 'text/html'

    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/jaavascript'
        break
    default:
        contentType = 'text/html'


    }

    if (!ext) {
        filePath += '.html'
    }
    

    console.log(filePath)

    fs.readFile(filePath, (err, data0) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data1) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error')
                } else {
                    res.writeHead(404, {
                        'Content-type': 'text/html'
                    })
                res.end(data1)
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            })
            res.end(data0)
        }
    })
})


const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log(`server started..on port ${PORT}`)
})