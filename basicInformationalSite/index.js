const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    if (req.url==='/'){
        fs.readFile('index.html',function(err,data){
            if (err) throw err;
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data);
            return res.end;
        });
    }
    if (req.url==='/about'){
        fs.readFile('about.html',function(err,data){
            if (err) throw err;
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data);
            return res.end;
        });
    }
    if (req.url==='/contact'){
        fs.readFile('contact.html',function(err,data){
            if (err) throw err;
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data);
            return res.end;
        });
    }
    if (req.url==='/404'){
        fs.readFile('404.html',function(err,data){
            if (err) throw err;
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data);
            return res.end;
        });
    }
})

server.listen(8080,()=>{
    console.log(`Server running at port 8080`)
})