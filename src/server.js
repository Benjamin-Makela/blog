const http = require("http");
const fs = require('fs');
const path = require('path');
const port = 80;

const server = http.createServer(function (req, res) {
    const filePath = path.join(__dirname, req.url === '/' ? 'benny.html' : req.url);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end("<h1>404 Not Found</h1>");
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(port, "0.0.0.0", function (error) {
    if (error) {
        console.log("somethin wenmt wrong", error);
    } else {
        console.log("listening on port" + port);
    }
});