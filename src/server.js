// Import the http module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header to be an HTML content type
  res.setHeader('Content-Type', 'text/html');
  
  // Send a simple HTML response
  res.statusCode = 200;
  res.end('<h1>Hello, welcome to my server!</h1>');
});

// Define the port the server will listen on
const port = 80;

// Start the server
server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}/`);
});
