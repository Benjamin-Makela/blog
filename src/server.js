const http = require("http");
const port = 80;

const server = http.createServer(function(req, res) {
    res.write("hello node");
    res.end();
});

server.listen(port, function(error) {
    if (error) {
        console.log("somethin wenmt wrong", error);
    } else {
        console.log("listening on port" + port);
    }
});