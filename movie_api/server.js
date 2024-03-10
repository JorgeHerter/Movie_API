// Import necessary modules
const http = require('http');
const fs = require('fs');
const url = require('url');

// Create a server that listens for requests on port 8080
const server = http.createServer((req, res) => {
    // Parse the request URL
    const parsedUrl = url.parse(req.url, true);

    // Check if the URL contains the word "documentation"
    if (parsedUrl.pathname.includes('documentation')) {
        // If the URL contains "documentation", return the "documentation.html" file
        fs.readFile('documentation.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        // If the URL does not contain "documentation", return the "index.html" file
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
});

// Start the server and listen on port 8080
server.listen(8080, () => {
    console.log('My test server is running on port 8080');
});
