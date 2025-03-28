const http = require("http");
const fs = require('fs');
const path = require('path');
const port = 80;

const server = http.createServer(function (req, res) {
    // console.log(req.method);
    if (req.url === "/") {
        // console.log("serving benny.html");
        const filePath = path.join(__dirname, 'benny.html');
        fs.readFile(filePath, (err, data) => {
            if (!err) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === "/POST") {
        if (req.method === "POST") {
            // console.log("serving post http request");
            let body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });
            req.on("end", () => {
                try {
                    const postData = JSON.parse(body);
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ message: "Data received successfully!" }));
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                    res.writeHead(400, { "Content-Type": "text/plain" });
                    res.end("Invalid JSON data");
                }
            });
        } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("We really don't have anything else here");
        }
    } else {
        // console.log("literally anything else");
        const filePath = path.join(__dirname, req.url);
        fs.readFile(filePath, (err, data) => {
            // console.log(req.url);
            if (err) {
                // console.log(err);
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