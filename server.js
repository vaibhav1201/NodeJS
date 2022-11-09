const http = require("http");
const fs = require("fs");

const file = fs.readFileSync("tut1.html");

const server = http.createServer((req, res) =>{
res.writeHead(200, {'content-type' : 'text/html'})
res.end(file)
})
server.listen(8000, '127.0.0.1', ()=>{console.log("listening on port 8000")})
