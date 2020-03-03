import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(PORT, '127.0.0.1');

console.log(`Server running on port ${PORT}`);

export default server;
