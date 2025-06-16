const http = require('http');

const server = http.createServer((req, res) => {
  res.end('App deployed on container is working!');
});

server.listen(3000, () => {
  console.log("Running Version 4");
});