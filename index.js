const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Updated deploy.yml to deploy on container');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});