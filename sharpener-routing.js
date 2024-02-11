const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/' || url === '/home')
        res.end("<h1>Welcome to Home Page</h1>");
    else if (url === '/about')
        res.end("<h1>Welcome to About Page</h1>");
    else if (url === '/node')
        res.end("<h1>Welcome to Node Js project</h1>");
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1 style='color:red'>404 Error, Page Not Found!</h1>");
    }
});

server.listen(4000);