const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Updated the deploy.yml file in the sample node app');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});