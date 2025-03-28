const http = require("http");
const fs = require('fs');
const path = require('path');
const port = 80;

const server = http.createServer(function (req, res) {
    if (req.method === "GET") {
        console.log(req);
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("GET request received");
    } else if (req.url === "/") {
        const filePath = path.join(__dirname, 'benny.html');
        fs.readFile(filePath, (err, data) => {
            if (!err) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        const filePath = path.join(__dirname, req.url);
        fs.readFile(filePath, (err, data) => {
            console.log(req.url);
            if (err) {
                console.log(err);
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("<h1>This file does not exist idiot. Nice try buddy.</h1>");
            } else {
                let ct = "";
                if (/\.html$/.test(filePath)) {
                    ct += "text/html";
                } else if (/\.js$/.test(filePath)) {
                    ct += "text/javascript";
                } else if (/\.ico$/.test(filePath)) {
                    ct += "image/x-icon";
                }
                res.writeHead(200, { "Content-Type": ct });
                res.end(data);
            }
        });
    }
});

server.listen(port, "0.0.0.0", function (error) {
    if (error) {
        console.log("somethin wenmt wrong", error);
    } else {
        console.log("listening on port" + port);
    }
});