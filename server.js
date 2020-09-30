const fs = require('fs')
const http = require('http')

const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(404)
        }else {
            res.write(data)
        }
    })
    res.end()
    console.log('ye')
})

app.listen(3000, err => {
    if (err) throw err
})