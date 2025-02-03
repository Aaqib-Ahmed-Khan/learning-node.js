const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': "text/html" });

    const filePath = path.join(__dirname, "index.html");

    fs.readFile(filePath, (err, htmlContent) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Error reading HTML file");
        } else {
            res.end(htmlContent);
        }
    });
});

server.listen(3300);
