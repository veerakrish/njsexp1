// Program to demonstrate basic web server in Node.js
const http = require('http');

// Create HTTP server
const server = http.createServer((req, res) => {
    // Set response header
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    // Send response
    res.end(`
        <h1>Welcome to Node.js Server</h1>
        <p>This is a basic web server created using Node.js http module.</p>
        <p>Current time: ${new Date().toLocaleString()}</p>
    `);
});

// Server listening port
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});