import http from 'http'; //import the built-in http module

const hostname = '127.0.0.1';
const port = 3000;

// instantiate a new HTTP server and store a reference to it in "server"
const server = http.createServer((req, res) => 
{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World');
});

server.listen(port, hostname, () => 
{
  console.log(`Server running at http://${hostname}:${port}/`);
});