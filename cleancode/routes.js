const requestHandler = (req, res)=>{
    const url = req.url;

    if(url==='/')
    {
        res.writeHeader(200, {'Content-Type':'text/html'});
        res.end('<h1>Welcome to Home Page</h1>');
    }
    else if(url==='/about')
    {
        res.writeHeader(200, {'Content-Type':'text/html'});
        res.end('<h1>Welcome to About Page</h1>');
    }
    else if(url==='/contact')
    {
        res.writeHeader(200, {'Content-Type':'text/html'});
        res.end('<h1>Welcome to Contact Page</h1>');
    }
    else
    {
        res.writeHeader(404, {'Content-Type':'text/html'});
        res.end("<h1 style='color:red'>404 Error, Page Not Found</h1>");
    }
}


module.exports = {requestHandler};