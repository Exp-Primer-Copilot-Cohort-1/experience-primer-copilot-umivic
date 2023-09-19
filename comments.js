// Create web server
// 1. Load http module
const http = require('http');
// 2. Create web server
const server = http.createServer();
// 3. Listen for request
server.on('request', (req, res) => {
    // 4. Write response
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!\n');
    res.end();
});
// 5. Listen on port 3000
server.listen(3000, () => {
    console.log('Node server created at port 3000');
});