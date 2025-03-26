const http = require("http");
const fs = require('fs');
const path = require('path');
const port = 80;

const server = http.createServer(function (req, res) {
    if (req.url === "/") {
        const filePath = path.join(__dirname, 'benny.html');
        fs.readFile(filePath, (err, data) => {
            if (!err) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === "/media/favicon.ico") {
        const filePath = path.join(__dirname, "/media/favicon.ico");
        fs.readFile(filePath, (err, data) => {
            if (!err) {
                res.writeHead(200, { 'Content-Type': 'image/x-icon' });
                res.end(data);
            }
        });
    } else {
        const filePath = path.join(__dirname, req.url);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("<h1>This file does not exist idiot. Nice try buddy.</h1>");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
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