const http = require('http');
const fs = require('fs');
console.clear();
const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/')
        res.end('<h1>Welcome to custom API</h1>');
    else if(url==='/api')
    {
        fs.readFile(`./myapi/user.json`, 'utf-8', (err,data)=>{
            if(err)
                console.log(err);
            else
            {
                let str = "";
                let result = Array.from(JSON.parse(data).students);
                result.forEach(element => {
                    str += `<h1>${element.name}</h1>`;
                });

                res.end(`<h1>${str}</h1>`);
            }
        });

    }
});


server.listen(5000);