const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end("Sownthrya Sample node app");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

