import http from 'http'; //import the built-in http module
import path from 'path';
import fs from 'fs'; //const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

// instantiate a new HTTP server and store a reference to it in "server"
const server = http.createServer((req, res) => 
{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  displayHome(res);
});

server.listen(port, hostname, () => 
{
  console.log(`Server running at http://${hostname}:${port}/`);
});
function displayHome(res: http.ServerResponse): void
{
  fs.readFile("index.htm", (err, data) =>
  {
    if(err)
    {
      res.writeHead(404); //File not found
      res.end("ERROR: 404 - Page not found!");
      return;
    }
    res.writeHead(200); // everything is ok
    res.end(data);
  });
}