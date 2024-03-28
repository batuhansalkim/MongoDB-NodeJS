const http = require("http");
const fs = require("fs");
const _=require('lodash');


const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader("Content-type", "text/html");

    let path = "./views/";
    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200
            break;
        case "/about-me":
            path += "about.html";
            res.statusCode = 301
            res.setHeader("Location", "/about");
            break;
        default:
            path += "404.html";
            res.statusCode = 404
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {

            res.end(data);
        }
    });
})

server.listen(3000, "localhost", () => {
    console.log("3000 portu dinleniyor...");
    console.log("batuhan salkım");
}) 


let nums=[23,45,67,44]

_.each(nums, (val,keys)=>{
    console.log(val,keys);
})

let num =  _.random(0,20);
console.log(num);