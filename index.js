// ++++++++++++++++++++++++++++++++++++++++++++++++++


// SHARPENER, RUNNING ON PORT 4000

const http = require('http');


const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/')
        res.end("<h1>hello, my name is Stanley</h1>");
});


server.listen(4000, ()=>{
    console.log("Server is running on port 4000");
});


// ++++++++++++++++++++++++++++++++++++++++++++++++++