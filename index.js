const http = require('http');

const port = 3000;
const server = http.createServer((req, res) => {
    if (req.url === '/greet') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        return res.end('Hello World\n');
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        return res.end('Not Found\n');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
