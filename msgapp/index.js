const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    let filePath = `./msgapp/msg.txt`;
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<form action="/res" method="post">
        <input type="text" name="msg">
        <input type="submit" value="submit">
    </form>`);
    }
    else if (req.url === '/res' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const formData = new URLSearchParams(body);
            let msg = formData.get('msg');
            fs.writeFile(filePath, msg, (err) => { if(err)console.log(err) });
            fs.readFile(filePath, 'utf-8', (err, data) => {
                if (err)
                    console.log(err);
                else {
                    res.writeHead(200, { location: '/' });
                    res.end(`<h1>${data}</h1><form action="/res" method="post">
                    <input type="text" name="msg">
                    <input type="submit" value="submit">
                </form>`);
                }
            });

        });
    }
});

server.listen(4000);