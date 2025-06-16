const http = require('http');

const server = http.createServer((req, res) => {
  res.end('New deployment Version 3');
});

server.listen(3000, () => {
  console.log("App version: v3 is now live");
});