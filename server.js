const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);

    res.setHeader("Content-Type","text/html");
    res.write("<head><title>Node Js Dersleri</title></head>")
    res.write("<h1>Merhabalar</h1>");
    res.end();
})

server.listen(3000,"localhost",()=>{
    console.log("3000 portu dinleniyor...");
    console.log("batuhan salkım");
}) 