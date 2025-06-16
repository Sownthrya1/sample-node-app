const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from updated Node app!');
});

server.listen(3000, () => {
  console.log("Running Version 4");
});